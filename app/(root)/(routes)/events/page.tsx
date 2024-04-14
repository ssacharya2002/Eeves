import Events from "@/components/events";
import Filters from "@/components/filter";
import Footer from "@/components/footer";
import PopularCities from "@/components/popular-cities";
import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import prismadb from "@/lib/prismadb";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

interface EventPageProps {
  searchParams: {
    categoryId: string;
    name: string;
    city: string;
  };
}

const EventPage = async ({ searchParams }: EventPageProps) => {
  const categories = await prismadb.category.findMany();
  const events = await prismadb.event.findMany({
    where: {
      dateTime: {
        gte: new Date(),
      },
      name: {
        search: searchParams.name,
      },
      city: {
        search: searchParams.city,
      },
      categoryId: searchParams.categoryId,
      isArchived: false,
    },
    orderBy: {
      ticketSold: "desc",
    },
  });

  return (
    <div className="px-10">
      <SearchInput />
      <div className="md:flex md:w-full md:justify-between md:items-center">
        <Filters data={categories} />
        <Link href={"/event/new"}>
          <Button size={"sm"} className="flex items-center gap-2">
            <Plus className="h-4 w-4 " /> New
          </Button>
        </Link>
      </div>
      <Events data={events} />

      {/* popular cities */}
      <PopularCities />

      {/* todo:testimonial  */}
      <Footer />
    </div>
  );
};

export default EventPage;
