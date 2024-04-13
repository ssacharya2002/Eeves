import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import Tickets from "./components/tickets";
import prismadb from "@/lib/prismadb";
import PopularCities from "@/components/popular-cities";
import Footer from "@/components/footer";

const MyTickets = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const tickets = await prismadb.ticket.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      event: true,
    },
  });

  if (!tickets) {
    return (
      <div className="px-5 md:px-10 w-full h-[90vh] flex items-center justify-center">
        <h2 className="text-xl ">No ticket found</h2>
      </div>
    );
  }

  console.log("tickets", tickets);

  return (
    <div className=" px-5 md:px-10 ">
      <h1 className="text-xl font-semibold text-center mt-2 mb-2">
        My Tickets
      </h1>
      {tickets.length === 0 ? (
        <div className="px-5 md:px-10 w-full h-[80vh] flex items-center justify-center">
          <h2 className="text-xl text-slate-400">No Tickets found</h2>
        </div>
      ) : (
        <Tickets
          tickets={tickets}
          events={tickets.map((ticket) => ticket.event)}
        />
      )}

      {/* popular cities */}
      <PopularCities />

      {/* todo:testimonial  */}
      <Footer />
    </div>
  );
};

export default MyTickets;
