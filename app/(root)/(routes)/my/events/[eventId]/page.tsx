import prismadb from "@/lib/prismadb";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import React from "react";
import { OrderColumn } from "./column";
import { format } from "date-fns";
import EventTable from "./event-table-client";

interface EventParticipantDataParams {
  params: {
    eventId: string;
  };
}

const EventParticipantData: React.FC<EventParticipantDataParams> = async ({
  params,
}) => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const event = await prismadb.event.findUnique({
    where: {
      id: params.eventId,
    },
    include: {
      Ticket: true,
    },
  });

  if (!event) {
    return <div>Event not found</div>;
  }

  //ticket
  const ticket = event.Ticket;

  const formattedOrders: OrderColumn[] = ticket.map((item) => ({
    id: item.id,
    userName: item.userName,
    email: item.email,
    totalPrice: item.totalPrice,
    billingAddress: item.billingAddress,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="overflow-x-auto">
      <div className="md:px-10 px-5 min-w-max">
        <EventTable data={formattedOrders} />
      </div>
    </div>
  );
};

export default EventParticipantData;
