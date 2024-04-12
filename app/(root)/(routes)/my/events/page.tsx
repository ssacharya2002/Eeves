import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import Events from "@/components/events";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EventsClient from "./events-client";

const MyEvents = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const events = await prismadb.event.findMany({
    where: {
      organizerId: user?.id,
    },
  });

//   if (events.length === 0) {
//     return (
//       <div className="px-5 md:px-10 w-full h-[90vh] flex items-center justify-center">
//         <h2 className="text-xl text-slate-400">No Events found</h2>
//       </div>
//     );
//   }

  return <EventsClient events={events} />;
};

export default MyEvents;
