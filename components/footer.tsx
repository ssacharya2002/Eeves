import Image from "next/image";
import Pill from "./pill";
import { Separator } from "./ui/separator";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="mt-10 px-10 mb-10 ">
      <div className="flex w-full justify-center items-center">
        <Pill className="px-20 md:px-32">Create your event</Pill>
      </div>

      <Image src={"/eeves.svg"} alt="" width={200} height={100} />
      <Separator className="" />

      <div className="flex w-full justify-evenly mt-4">
        <div className="">
          <h2 className="text-xl font-semibold text-purple-50">Your Account</h2>
          <div className="text-sm text-muted-foreground flex flex-col ">
            <p>Sign up</p>
            <p>Log in</p>
            <p>Help</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-purple-50">
            Main Navigation
          </h2>
          <div className="text-sm text-muted-foreground flex flex-col ">
            <p>Home</p>
            <p>Explore</p>
            <p>Profile</p>
            <p>Events</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-purple-50">Eeves</h2>
          <div className="text-sm text-muted-foreground flex flex-col ">
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Join us</p>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between bg-primary-foreground p-4 rounded-md mt-5">
        <h2 className="text-xl font-semibold">Follow us on</h2>
        <div className="flex justify-between w-[50%]">
          <Facebook className="h-6 w-6 hover:cursor-pointer" />
          <Instagram className="h-6 w-6 hover:cursor-pointer" />
          <Youtube className="h-6 w-6 hover:cursor-pointer" />
          <Image
            className="text-white h-6 w-6 hover:cursor-pointer"
            src={"/x.svg"}
            alt=""
            color="red"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
