"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { UserRound } from "lucide-react";
import { Switch } from "./ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CartDetails } from "./CartDetails";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="border-b sticky top-0 bg-black">
      <div className="flex h-20 items-center justify-between mx-10">
        <div className="flex items-center h-full">
          <Link className="font-bold text-3xl mr-10" href="/">
            NovaNex
          </Link>
          <div className="h-14">
            <Separator orientation="vertical" />
          </div>
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

        <div className="flex font-bold text-xl items-center">
          <span>OWN</span>
          <Switch className="mx-3" id="ownershipType" />
          <span>RENT</span>
        </div>

        <div className="flex gap-6 font-medium text-xl">
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

          <Button variant="secondary" size="lg">
            <ConnectButton />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
