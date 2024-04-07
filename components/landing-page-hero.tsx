"use client";

import Image from "next/image";
import Pill from "./pill";
import { useRouter } from "next/navigation";

const LandingPageHero = () => {
  const router = useRouter();

  return (
    <div className="flex px-10 items-center justify-between flex-col lg:flex-row">
      <div className="flex flex-col  gap-y-12 justify-start ">
        <div className="flex flex-col gap-y-3 ">
          <h1 className="text-2xl md:text-5xl font-semibold ">
            <span className="text-nowrap">Building Connections—</span> <br />
            Where Hobbies Spark Friendships
          </h1>
          <p className="text-xs md:text-base text-muted-foreground dark:text-purple-200 text-center md:text-left">
            Discover a diverse hub where tech conferences and outdoor adventures
            converge. Explore, connect, and embark on new adventures together.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Pill onClick={() => router.push("/sign-in")} className="px-20">
            Join Eeves
          </Pill>
        </div>
      </div>

      <Image
        alt="hero image"
        src={"/collaboration.svg"}
        height={200}
        width={200}
        className="w-full lg:w-[40%]"
      />
    </div>
  );
};

export default LandingPageHero;
