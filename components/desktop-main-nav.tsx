"use client";

import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function DesktopNavbar({
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
  ];

  return (
    <nav
      className={cn(
        "flex items-center w-full justify-between space-x-4 lg:space-x-6  px-10 py-2",
        className
      )}
    >
      <Image alt="" src={"/eeves.svg"} width={100} height={100}  className="hover:cursor-pointer" onClick={()=>router.push("/")}/>

      <div className="flex items-center space-x-4 lg:space-x-6 border px-4 py-2 rounded-full ">
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
      </div>
      {userId ? (
        <div className="flex gap-2 items-center  ">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
          <div></div>
        </div>
      ) : (
        <div className="flex gap-2 ">
          <ThemeToggle />
          <Button onClick={() => router.push("/sign-in")}>LogIn</Button>
          <Button onClick={() => router.push("/sign-up")}>Sign UP</Button>
        </div>
      )}
    </nav>
  );
}
