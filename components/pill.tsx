import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

interface PillProps {
  className?: ClassNameValue;
  children?: React.ReactNode;
  onClick?:()=>void;
}

const Pill: React.FC<PillProps> = ({ children, className,onClick }) => {
  return (
    <div onClick={onClick} className="bg-gradient-to-r from-[#0560E8] to-[#7000FF] rounded-full p-[2px] inline-flex hover:cursor-pointer  ">
      <div
        className={cn(
          "bg-[#030014]  py-2 px-8 rounded-full text-white w-full items-center justify-center text-center ",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Pill;
