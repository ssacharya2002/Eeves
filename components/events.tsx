import { Event } from "@prisma/client";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Calendar, CheckSquare, MapPin, Ticket } from "lucide-react";

interface EventsProps {
  data: Event[];
}

const Events: React.FC<EventsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 pb-10 pt-8">
      {data.map((item) => (
        <Card
          key={item.id}
          className="bg-primary/10 rounded-sm cursor-pointer hover:opacity-75 transition border-0 "
        >
          <Link href={`/events/${item.id}`}>
            <CardHeader className="flex items-center justify-center text-muted-foreground  ">
              <div className="relative w-full h-44">
                <Image
                  src={item.image}
                  fill
                  className="rounded-md object-cover"
                  alt="Companion"
                  loading="lazy"
                />
              </div>
              <div className="font-bold">{item.name}</div>
              <p className="text-xs ">Hosted by: {item.hostedBy}</p>
            </CardHeader>

            <div className="flex flex-col items-center  text-xs text-muted-foreground p-1 gap-y-3 pb-4">
              <p className="lowercase w-full flex gap-2 ">
                <MapPin className="w-4 h-4 text-blue-600 " />
                {item.location},{item.city}
              </p>

              <div className="flex w-full items-start gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                {item.dateTime
                  .toString()
                  .replace("(India Standard Time)", "(IST)")}
              </div>
              <div className="flex w-full justify-between ">
                <div className="flex items-center gap-1">
                  <CheckSquare className="w-4 h-4 text-blue-600" />
                  {item.ticketSold} going
                </div>
                <div className="flex items-center gap-1">
                  <Ticket  className="w-4 h-4 text-blue-600" />
                  ₹ {item.price}
                </div>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default Events;
