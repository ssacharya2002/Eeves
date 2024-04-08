"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import qs from "query-string";

const CitySearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const city = searchParams.get("city");

  const [value, setValue] = useState(city || "");

  const debounceValue = useDebounce<string>(value, 500);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      city: debounceValue,
    //   categoryId: categoryId,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [debounceValue, router]);

  return (
    <div className="w-full md:w-64">
    <div className="relative    ">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
      onChange={onChange}
        placeholder="City"
        className="pl-10 bg-primary/10 focus:outline-none focus:ring-slate-700 "
      />
    </div>
  </div>
  );
};

export default CitySearch;
