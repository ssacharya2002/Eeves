"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { ChevronDown, Cross, Search } from "lucide-react";
import { Category } from "@prisma/client";
import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";
import CitySearch from "./city-seearch";

interface FiltersProps {
  data: Category[];
}

const Filters: React.FC<FiltersProps> = ({ data }) => {
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  const router = useRouter();

  //   const onCategoryChange = () => {
  useEffect(() => {
    const query = {
      categoryId: category,
    };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    console.log(url);
    router.push(url);
  }, [category, categoryId, router]);

  return (
    <div className="pt-2 flex  items-center gap-2">
      {/* category select dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex gap-1">
            <ChevronDown className="h-4 w-4" />
            {categoryName || "Select a Category"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              setCategory("");
              setCategoryName("");
            }}
          >
            Clear
            <DropdownMenuShortcut>
              <Cross className="rotate-45 fill-white h-4 w-4" />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          {data.map((item) => (
            <DropdownMenuItem
              key={item.id}
              onClick={() => {
                setCategory(item.id);
                setCategoryName(item.name);
              }}
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* city search box */}
     <CitySearch />
    </div>
  );
};

export default Filters;
