import { DesktopNavbar } from "@/components/desktop-main-nav";
import { Separator } from "@/components/ui/separator";
import { MobileNavbar } from "@/components/mobile-main-nav";

const Navbar = () => {
  return (
    <div>
      <DesktopNavbar className="hidden md:flex" />
      <MobileNavbar className="flex md:hidden" />

      <Separator />
    </div>
  );
};

export default Navbar;
