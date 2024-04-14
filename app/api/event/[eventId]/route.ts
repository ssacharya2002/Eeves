import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: { params: { eventId: string } }) {
    try {

        const body = await request.json();
        const user = await currentUser();

        const { name, image, location, city, hostedBy, description, price, dateTime, totalTickets, categoryId,isArchived } = body


        if (!params.eventId) {
            return new NextResponse("Missing Event Id", { status: 400 })
        }

        if (!user || !user.id || !user.firstName) {
            return new NextResponse("Unauthorized", { status: 400 })
        }

        if (!name || !image || !location || !city || !hostedBy || !description  || !dateTime || !totalTickets || !categoryId) {
            return new NextResponse("Missing required fields", { status: 400 })
        }

        const updatedEvent = await prismadb.event.update({
            where: {
                id: params.eventId,
                organizerId: user.id
            },
            data: {
                name,
                image,
                location,
                city,
                hostedBy,
                description,
                price,
                dateTime,
                isArchived,
                totalTickets,
                categoryId
            }
        })

        return NextResponse.json({id:updatedEvent.id})


    } catch (error) {
        console.log("[EVENT-PATCH] ", error);
    }
}