"use client";

import { useParams, usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function MobileNavbar({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const { userId } = useAuth();
  const router = useRouter();
  const routes = [
    {
      href: `/`,
      label: "Home",
      active: `${pathname}` === `/`,
    },
    {
      href: `/events`,
      label: "Events",
      active: `${pathname}` === `/events`,
    },
    {
      href: `/event/new`,
      label: "Create Event",
      active: `${pathname}` === `/event/new`,
    },
    {
      href: `/my/events`,
      label: "My events",
      active: `${pathname}` === `/my/events`,
    },
    {
      href: `/my/tickets`,
      label: "Tickets",
      active: `${pathname}` === `/my/tickets`,
    },
    {
      href: `/help`,
      label: "Help",
      active: `${pathname}` === `/help`,
    },
  ];

  return (
    <nav
      className={cn(
        "flex items-center w-full justify-between space-x-4 lg:space-x-6  px-4 py-2",
        className
      )}
    >
      <div className="flex gap-2 px-1 items-center justify-between">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-black  hover:cursor-pointer dark:text-white" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="p-0 bg-slate-950 dark:bg-primarye/5 pt-10 w-64  backdrop-blur-sm"
          >
            <SheetHeader className="px-4">
              <SheetTitle>
                <Image
                  alt=""
                  src={"/eeves.svg"}
                  width={80}
                  height={50}
                  className="hover:cursor-pointer"
                  onClick={() => router.push("/")}
                />
              </SheetTitle>
              <div className="flex flex-col gap-2 text-start">
                {routes.map((route) => (
                  <Link
                    href={route.href}
                    key={route.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary p-2 hover:bg-primary/5 rounded-md",
                      route.active
                        ? "text-purple-500 dark:text-purple-400 bg-gray-700 "
                        : "text-white dark:text-white hover:text-purple-400"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Image
          alt=""
          src={"/eeves.svg"}
          width={80}
          height={50}
          className="hover:cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* <div className="flex items-center space-x-4 lg:space-x-6 border px-4 py-2 rounded-full ">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              route.active
                ? "text-purple-500 dark:text-purple-400 "
                : "text-black dark:text-white hover:text-purple-400"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div> */}
      {userId ? (
        <div className="flex gap-2 items-center  ">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
          <div></div>
        </div>
      ) : (
        <div className="flex gap-2 ">
          <ThemeToggle />
          <Button size={"sm"} onClick={() => router.push("/sign-in")}>
            LogIn
          </Button>
          <Button size={"sm"} onClick={() => router.push("/sign-up")}>
            Sign UP
          </Button>
        </div>
      )}
    </nav>
  );
}
