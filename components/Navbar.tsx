import Link from "next/link";
import { ModeToggle } from "./DarkMode";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Left Side: Site Name */}
        <div className="text-2xl font-bold">
          <Link href={"/"}>Bhagavad Gita</Link>
        </div>

        {/* Right Side: Button */}
        <div className="flex px-2">
          <ModeToggle />
          <Link href={"/all-chapters"}>
            <Button className="mx-2">All Chapters</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
