"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {

  const router = useRouter();

  const [value,setValue] = useState("")

  const onKeyDown = ()=>{
  }
  
  return (
    <div className="relative mt-2  left-1/2 -translate-x-1/2  flex items-center justify-center w-[92%] lg:w-6/12 ">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
      onChange={(e)=>setValue(e.target.value)}
      onKeyDown={(e)=>{if (e.key === 'Enter') {
          router.push(`/events/?name=${value}`);
        }}}
        placeholder="Search..."
        className="pl-10 bg-primary/10 focus:outline-none focus:ring-slate-700 rounded-full"
      />
    </div>
  );
};

export default SearchBox;
