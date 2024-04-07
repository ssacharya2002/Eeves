"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const JoinEeves = () => {
  const router = useRouter();

  return (
    <div className="flex  items-center justify-center  ">
      <div className="flex flex-col md:flex-row  items-center justify-between w-[90%] bg-primary/10 rounded-xl p-5">
        <div className="flex flex-col  gap-y-12 justify-between ">
          <div className="flex flex-col gap-y-3 ">
            <h1 className="text-xl md:text-2xl font-semibold ">Join Eeves</h1>
            <p className="text-base m-muted-foreground dark:text-purple-200 text-left ">
              &ldquo;Eeves: Where You Make Friends, Learn, and Grow. Find new
              friends, learn new things, and support each other. It&apos;s free
              to join. Come join us and do what you love with others!&rdquo;
            </p>
          </div>
          <div className="flex items-center ">
            <Button
              size={"lg"}
              variant={"outline"}
              onClick={() => router.push("/sign-up")}
              className="w-full md:w-32"
            >
              SignUp
            </Button>
          </div>
        </div>

        <Image
          alt="hero image"
          src={"/join_eeves.svg"}
          height={200}
          width={200}
          className="w-3/12 hidden md:block"
        />
      </div>
    </div>
  );
};

export default JoinEeves;
