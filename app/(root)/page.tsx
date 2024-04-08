import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SearchBox from "@/components/search-box";
import LandingPageHero from "@/components/landing-page-hero";
import Pill from "@/components/pill";
import prismadb from "@/lib/prismadb";
import Events from "@/components/events";
import JoinEeves from "@/components/join_eeves";
import PopularCities from "@/components/popular-cities";
import Footer from "@/components/footer";

const Home = async () => {
  const categories = [
    "Fitness & Wellness",
    "Outdoor Adventures",
    "Food & Dining",
    "Arts & Culture",
    "Music & Performing Arts",
    "Career & Business",
    "Socializing & Networking0",
    "Personal Growth & Self-Improvement",
  ];


  const events = await prismadb.event.findMany({
    where: {
      dateTime: {
        gte: new Date(),
      },
    },
    take: 6,
    orderBy: {
      dateTime: "desc",
    },
  });

  return (
    <div className="px-10">
      <SearchBox />
      <div className="pt-11">
        <LandingPageHero />

        {/* top categories */}
        <div className="flex justify-center items-center  flex-col">
          <h2 className="text-2xl font-semibold ">Top categories</h2>
          {/* <div className="flex w-full overflow-x-scroll gap-x-4">
            {categories.map(cat=> (
              <Pill key={cat}>{cat}</Pill>
            ))}
          </div> */}
        </div>

        {/* recent events */}
        <div className="w-full flex justify-center items-center">
          <Events data={events} />
        </div>

        {/* Join eeves */}
       <JoinEeves />

       {/* popular cities */}
        <PopularCities />

        {/* todo:testimonial  */}
        <Footer />

      </div>
    </div>
  );
};

export default Home;
