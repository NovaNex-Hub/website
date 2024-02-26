"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { UserRound } from "lucide-react";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CartDetails } from "./CartDetails";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="sticky top-0 border-b bg-black">
      <div className="mx-10 flex h-20 items-center justify-between">
        <div className="flex h-full items-center">
          <Link className="mr-10 text-3xl font-bold" href="/">
            NovaNex
          </Link>
          <div className="h-14">
            <Separator orientation="vertical" />
          </div>
          <Link
            className="invisible mx-4 ml-10 text-xl font-bold hover:text-primary/70 lg:visible"
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className="invisible mx-4 text-xl font-bold hover:text-primary/70 lg:visible"
            href="/marketplace"
          >
            Marketplace
          </Link>
        </div>

        <div className="invisible flex gap-6 text-xl font-medium lg:visible">
          <div className="flex items-center text-xl font-bold">
            <span>OWN</span>
            <Switch className="mx-3" id="ownershipType" />
            <span>RENT</span>
          </div>
          <CartDetails />
          <Button
            onClick={() => {
              router.push("/profile");
            }}
            variant="ghost"
            size="icon"
          >
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>
                <UserRound />
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
