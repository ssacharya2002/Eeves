"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { auth, currentUser, redirectToSignIn, useUser } from "@clerk/nextjs";
import { Event } from "@prisma/client";
import axios from "axios";
import {
  Calendar,
  CircleCheck,
  CircleCheckBig,
  IndianRupee,
  Loader2,
  MapPin,
  Ticket,
} from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface EventDetailsProps {
  event: Event;
  ticketBought: boolean;
  isHost: boolean;
}

const Day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const EventDetails: React.FC<EventDetailsProps> = ({
  event,
  ticketBought,
  isHost,
}) => {
  const hours = event.dateTime.getHours();
  const minutes = event.dateTime.getMinutes();

  const timeString = () => {
    let AmOrPm = "AM";
    if (hours > 12) {
      AmOrPm = "PM";
    }
    let hr = 0;
    if (hours > 13) {
      hr = hours - 12;
    }
    return `${hr}:${minutes} ${AmOrPm}, IST`;
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful");
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams]);

  function formatDate(date: Date) {
    const day = Day[date.getDay()];
    const month = Month[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `Date: ${day}, ${dayOfMonth} ${month}`;
  }

  const router = useRouter();

  const { user } = useUser();

  const [buttonLoader, setButtonLoader] = useState(false);

  const checkSold = () => {
    const Sold = event.totalTickets - event.ticketSold <= 0;
    if (ticketBought === false && Sold) {
      return true;
    } else {
      return false;
    }
  };

  const isSold = checkSold();

  const handleButtonDisabled = () => {
    if (isSold && !ticketBought && !isHost) {
      return true;
    } else {
      return false;
    }
  };

  const handleButtonVariant = () => {
    if (isSold && !ticketBought && !isHost) {
      return true;
    } else {
      return false;
    }
  };

  const handleButtonClick = async () => {
    if (!ticketBought && !isHost) {
      setButtonLoader(true);
    }
    if (!user) {
      return router.push("/sign-in");
    }

    if (isHost) {
      return router.push(`/event/${event.id}`);
    } else if (ticketBought) {
      return router.push("/my/tickets");
    } else {
      console.log("handleButtonClick", event.id);

      const response = await axios.post(`/api/checkout`, {
        eventId: event.id,
      });
      window.location = await response.data.url;
    }
    if (!ticketBought && !isHost) {
      setButtonLoader(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full justify-center  gap-3 md:gap-10 p-5 items-center">
        <div className=" h-full flex items-start">
          <Image
            src={event.image}
            alt=""
            width={300}
            height={300}
            className=" w-96 h-64  md:w-96 md:h-64  p-2 rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex  flex-col gap-5 w-full md:w-1/2">
          <h1 className="text-2xl font-semibold text-center md:text-start">
            {event.name}
          </h1>
          <p className="text-sm text-slate-400 text-center md:text-start">
            Hosted by: {event.hostedBy}
          </p>
          <p className="flex gap-2 items-center  text-sm">
            <MapPin className="w-4 h-4 text-blue-600 " />
            Location: {event.location}, {event.city}
          </p>
          <div className="text-sm flex gap-2 items-center w-full md:w-6/12 justify-between">
            <p className="flex gap-2 items-center">
              <Calendar className="w-4 h-4 text-blue-600 " />
              {formatDate(event.dateTime)}
            </p>
            <p>{timeString()}</p>
          </div>

          <p className="flex gap-2 items-center  text-sm">
            <Ticket className="w-4 h-4 text-blue-600 " />
            Available tickets {event.totalTickets - event.ticketSold}
          </p>
          <div className=" w-full md:w-6/12 flex justify-between">
            <p className="flex gap-2 items-center">
              <CircleCheckBig className="w-4 h-4 text-blue-600 " />
              {event.ticketSold} going
            </p>
            <p className="flex gap-2 items-center   text-xl font-semibold">
              <IndianRupee className="w-4 h-4 text-blue-600 " />
              {event.price === 0 ? "Free" : event.price}
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              // disabled={buttonLoader || isSold }
              disabled={handleButtonDisabled()}
              onClick={handleButtonClick}
              className="w-full flex items-center justify-center gap-3 "
              variant={handleButtonVariant() ? "destructive" : "default"}
            >
              {isHost
                ? "Edit Event"
                : ticketBought
                ? "View Ticket"
                : isSold
                ? "Sold Out"
                : "Buy Ticket"}
              {buttonLoader ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <></>
              )}
            </Button>
              <Button
                onClick={()=>router.push(`/my/events/${event.id}`)}
                className={cn("w-full flex items-center justify-center gap-3 ", `${isHost ? "" : "hidden"}`)}
              >
               {isHost ? "See Participants" : " "}
              </Button>
          </div>
        </div>
      </div>
      <div className="p-2 text-sm flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-semibold ">Description: </h2>
        <p className="text-slate-300">{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
