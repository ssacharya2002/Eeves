"use client";

import { Button } from "@/components/ui/button";
import { FormatDateTime } from "@/lib/utils";
import { Ticket, Event } from "@prisma/client"; // Import the Event model from Prisma
import { CircleCheckBig, IndianRupee } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface TicketsProps {
  tickets: Ticket[]; // Rename Ticket to tickets
  events: Event[]; // Add the events property
}

const Tickets: React.FC<TicketsProps> = ({ tickets, events }) => {
  // Receive events as a prop

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
  function formatDate(date: Date) {
    const day = Day[date.getDay()];
    const month = Month[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `Date: ${day}, ${dayOfMonth} ${month}`;
  }

  const timeString = (hours: number, minutes: number) => {
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

  const router = useRouter();

  return (
    <div>
      <div className="grid gap-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-primary/10 rounded-lg border p-4 shadow gap-3"
          >
            <h3 className="text-lg  dark:text-purple-300 font-semibold">
              {events.find((event) => event.id === ticket.eventId)?.name}
            </h3>{" "}
            {/* Replace ticket. with ticket.name */}
            <h3 className="text-sm text-foreground font-semibold">
              {ticket.userName}
            </h3>{" "}
            {/* Replace ticket. with ticket.name */}
            <p className="text-sm text-foreground font-semibold">
              {formatDate(
                events.find((event) => event.id === ticket.eventId)?.dateTime ||
                  new Date()
              ) +
                " " +
                timeString(
                  events
                    .find((event) => event.id === ticket.eventId)
                    ?.dateTime.getHours() || 0,
                  events
                    .find((event) => event.id === ticket.eventId)
                    ?.dateTime.getMinutes() || 0
                )}
            </p>{" "}
            {/* Use FormatDateTime utility function */}
            <div className="mt-2 flex justify-between items-center">
              <p className="font-semibold text-xl flex items-center justify-center gap-2">
                <IndianRupee className="h-5 w-5 text-blue-500" />
                {ticket.totalPrice}
              </p>{" "}
              {/* Use ticket.price directly */}
              <p className="font-semibold text-xl flex items-center justify-center gap-2">
                <CircleCheckBig className="h-5 w-5 text-blue-500" />
                {"Paid"}
              </p>{" "}
              {/* Use ticket.status directly */}
            </div>
            <Button
              onClick={() => router.push(`/events/${ticket.eventId}`)}
              className="w-full mt-2"
            >
              View Event
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
