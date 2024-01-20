"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="border-b">
      <div className="flex h-20 items-center justify-between mx-10">
        <div className="flex items-center h-full">
          <Link className="font-bold text-3xl mr-10" href="/">
            NovaNex
          </Link>
          <Separator orientation="vertical"/>
          <Link
            className="font-bold text-xl mx-4 ml-10 hover:text-primary/70"
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className="font-bold text-xl mx-4 hover:text-primary/70"
            href="/marketplace"
          >
            Marketplace
          </Link>
        </div>
        <div className="flex gap-6 font-medium text-xl">
          <Button variant="secondary" size="lg">
            Cart
          </Button>
          <Button variant="secondary" size="lg">
            Profile
          </Button>
          <Button variant="secondary" size="lg">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
