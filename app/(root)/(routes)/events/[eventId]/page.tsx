import prismadb from "@/lib/prismadb";
import Image from "next/image";
import EventDetails from "./event-details-page";
import { auth } from "@clerk/nextjs";
import { log } from "console";
import Events from "@/components/events";
import SimilarEvents from "./components/similar-events";
import PopularCities from "@/components/popular-cities";
import Footer from "@/components/footer";
import SearchBox from "@/components/search-box"

interface EventProps {
  params: {
    eventId: string;
  };
}

const EventIdPage = async ({ params }: EventProps) => {
  const event = await prismadb.event.findUnique({
    where: {
      id: params.eventId,
    },
  });

  const { userId } = auth();

  let ticketBought = false;

  if (userId) {
    const tickets = await prismadb.ticket.findMany({
      where: {
        eventId: params.eventId,
        userId: userId,
      },
    });

    if (tickets.length > 0) {
      ticketBought = true;
    }
  }

  const similar = await prismadb.event.findMany({
    where: {
      categoryId: event?.categoryId,
      id: {
        not: event?.id,
      },
    },
  });

  if (!event) {
    return (
      <div className="flex flex-col w-full h-[90vh]  items-center justify-center grayscale">
        <Image src={"/empty.png"} alt="" width={300} height={300} />
        <h2 className="text-2xl font-semibold text-slate-400">NOT FOUND</h2>
      </div>
    );
  }

  const isHost = userId === event.organizerId;
  console.log("isHost", isHost);
  log("ticketBought", ticketBought);

  return (
    <div className="px-5 md:px-10 ">
      <SearchBox />
      <div className="">
        <EventDetails
          event={event}
          ticketBought={ticketBought}
          isHost={isHost}
        />
        <SimilarEvents data={similar} />

        {/* popular cities */}
        <PopularCities />

        {/* todo:testimonial  */}
        <Footer />
      </div>
    </div>
  );
};

export default EventIdPage;
