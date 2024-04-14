import Stripe from "stripe";
import { NextResponse } from "next/server";

import { stripe } from "@/lib/stripe";
import prismadb from "@/lib/prismadb";

import { auth, currentUser } from "@clerk/nextjs";


const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}


export async function POST(req: Request) {

    const { userId } = auth();
    const user = await currentUser();
    if (!userId) {
        return new NextResponse("Unauthenticated", { status: 401 })
    }




    console.log("stripe checkout session");

    const { eventId } = await req.json();
    console.log("stripe checkout session", eventId);

    if (!eventId) {
        return new NextResponse("Missing Event Id", { status: 400 })
    }

    const event = await prismadb.event.findUnique({
        where: {
            id: eventId
        }
    })

    if (!event) {
        return new NextResponse("Event not found", { status: 404 })
    }

    if (event.totalTickets - event.ticketSold <= 0) {
        return new NextResponse("Event sold out", { status: 400 })
    }

    // for free events
    if (event.price === 0) {

        console.log("free event");

        const ticket = await prismadb.ticket.create({
            data: {
                billingAddress: "for free events does not have billing address",
                eventId: event.id,
                userName: user?.firstName + " " + user?.lastName,
                email: user?.emailAddresses[0].emailAddress || "",
                totalPrice: 0,
                userId: userId,
            }
        })

        await prismadb.event.update({
            where: {
                id: event.id
            },
            data: {
                ticketSold: {
                    increment: 1
                }
            }
        })

        return NextResponse.json({ url: `${process.env.FRONTEND_STORE_URL}/events/${event.id}?success=1` }, {
            headers: corsHeaders
        });
    }




    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    line_items.push({
        quantity: 1,
        price_data: {
            currency: 'INR',
            product_data: {
                name: event.name,
            },
            unit_amount: event.price * 100
        }
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        billing_address_collection: 'required',
        phone_number_collection: {
            enabled: true,
        },
        customer_email: user?.emailAddresses[0].emailAddress,
        success_url: `${process.env.FRONTEND_STORE_URL}/events/${event.id}?success=1`,
        cancel_url: `${process.env.FRONTEND_STORE_URL}/events/${event.id}?canceled=1`,
        metadata: {
            eventId: event.id,
            userId: userId,
            email: user?.emailAddresses[0].emailAddress,
            totalPrice: event.price,
            userName: user?.firstName + " " + user?.lastName
        },
    });

    return NextResponse.json({ url: session.url }, {
        headers: corsHeaders
    });


}