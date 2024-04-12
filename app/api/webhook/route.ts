

import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers"
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = headers().get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session;
    const address = session?.customer_details?.address;

    const addressComponents = [
        address?.line1,
        address?.line2,
        address?.city,
        address?.state,
        address?.postal_code,
        address?.country
    ];

    const addressString = addressComponents.filter((c) => c !== null).join(', ');

    if (event.type === "checkout.session.completed") {

        const totalPrice = typeof session?.metadata?.totalPrice === 'number' ? session?.metadata?.totalPrice : 0;
        const adjustedPrice = totalPrice / 100;

        await prismadb.ticket.create({
            data: {
                eventId: session?.metadata?.eventId || '',
                userId: session?.metadata?.userId || '',
                email: session?.customer_details?.email || '',
                totalPrice: adjustedPrice,
                userName: session?.metadata?.userName || "",
                billingAddress: addressString
            }
        });

        await prismadb.event.update({
            where: {
                id: session?.metadata?.eventId || ''
            },
            data: {
                ticketSold: {
                    decrement: 1
                }
            }
        })
    }

    return new NextResponse(null, { status: 200 });


}