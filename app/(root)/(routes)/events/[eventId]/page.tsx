import prismadb from "@/lib/prismadb";
import Image from "next/image";
import EventDetails from "./event-details-page";
import { auth } from "@clerk/nextjs";


interface EventProps{
    params:{
        eventId:string
    }
}


const EventIdPage = async ({params}:EventProps) => {

    const event = await prismadb.event.findUnique({
        where:{
            id:params.eventId
        }
    })

    if(!event){
        return(
            <div className="flex flex-col w-full h-[90vh]  items-center justify-center grayscale">
                <Image 
                  src={"/empty.png"}
                  alt=""
                  width={300}
                  height={300}
                  />
                  <h2 className="text-2xl font-semibold text-slate-400">NOT FOUND</h2>
            </div>
        )
    }


    return ( 
    
        <div className="px-5 md:px-10 ">
            <div className="max-w-7xl">
           <EventDetails event={event}  />

            </div>
        </div>
     );
}

export default EventIdPage;