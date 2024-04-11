import prismadb from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST (request: Request) {
    
    try {

        const body = await request.json();
        const user = await currentUser();

        const { name, image, location, city, hostedBy, description, price, dateTime, totalTickets, categoryId } = body

        if (!user || !user.id || !user.firstName) {
            return new NextResponse("Unauthorized", { status: 400 })
        }

        
        // const formSchema = z.object({
        //     name: z.string().min(3, { message: "Name is required" }),
        //     image: z.string().min(1),
        //     location: z.string().min(5, { message: "Location is required" }),
        //     city: z.string().min(1, { message: "city is required" }),
        //     hostedBy: z.string().min(1),
        //     description: z.string().min(3, { message: "Description is required" }),
        //     price: z.number().min(1),
        //     dateTime: z.date().min(new Date(), { message: "Date time is required" }),
        //     totalTickets: z.number().min(1, { message: "Total tickets is required" }),
        //     categoryId: z.string().min(1, { message: "Category is required" }),
        //   });


        if(!name || !image || !location || !city || !hostedBy || !description || !price || !dateTime || !totalTickets || !categoryId) {
            return new NextResponse("Missing required fields", { status: 400 })
        }

        const newEvent = await prismadb.event.create({
            data: {
                name,
                image,
                location,
                city,
                hostedBy,
                description,
                price,
                dateTime,
                totalTickets,
                categoryId,
                organizerId: user.id
            }
        })

        console.log(newEvent);
        

        return NextResponse.json(newEvent)

        
    } catch (error) {
        console.log("[EVENT-POST] ", error);
    }
    
}