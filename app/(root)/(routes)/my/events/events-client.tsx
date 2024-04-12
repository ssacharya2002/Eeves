"use client";

import Events from "@/components/events";
import { Button } from "@/components/ui/button";
import { Event } from "@prisma/client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface EventsClientProps {
  events: Event[];
}

const EventsClient: React.FC<EventsClientProps> = ({ events }) => {
  const router = useRouter();

  return (
    <div className=" px-5 md:px-10 mt-2">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-xl font-semibold  mt-2 mb-2">My Events</h1>
        <Button
          onClick={() => router.push("/event/new")}
          size={"sm"}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4 " /> new
        </Button>
      </div>
      {events.length === 0 ? (
        <div className="px-5 md:px-10 w-full h-[80vh] flex items-center justify-center">
          <h2 className="text-xl text-slate-400">No Events found</h2>
        </div>
      ) : (
        <Events data={events} />
      )}
    </div>
  );
};

export default EventsClient;
