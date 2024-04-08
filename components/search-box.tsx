import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBox = () => {
  return (
    <div className="relative mt-2  left-1/2 -translate-x-1/2  flex items-center justify-center w-[92%] lg:w-6/12 ">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        className="pl-10 bg-primary/10 focus:outline-none focus:ring-slate-700 rounded-full"
      />
    </div>
  );
};

export default SearchBox;
