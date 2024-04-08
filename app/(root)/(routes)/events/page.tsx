import Events from "@/components/events";
import Filters from "@/components/filter";
import SearchInput from "@/components/search-input";
import { Input } from "@/components/ui/input";
import prismadb from "@/lib/prismadb";
import { Search } from "lucide-react";
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
      name: {
        search: searchParams.name,
      },
      city: {
        search: searchParams.city,
      },
      categoryId: searchParams.categoryId,
    },
  });

  return (
    <div className="px-10">
      <SearchInput />
      <Filters data={categories} />
      <Events data={events} />
    </div>
  );
};

export default EventPage;
