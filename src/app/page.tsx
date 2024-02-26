"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AutoPlayCards } from "@/components/AutoPlayCards";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="h-[30px]"></div>
      <AutoPlayCards />

      {/* <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-center pt-[60px] gap-4">
        <Link href="/docs">
          <div
            className="w-[350px] h-[200px] rounded-lg border border-white text-xl font-semibold grid items-center text-center transition-all cursor-pointer hover:mb-3"
            style={{ transition: ".2s" }}
          >
            Docs
          </div>
        </Link>
        <Link href="/login">
          <div
            className="w-[350px] h-[200px] rounded-lg border border-white text-xl font-semibold grid items-center text-center transition-all cursor-pointer hover:mb-3"
            style={{ transition: ".2s" }}
          >
            Get Started
          </div>
        </Link>
        <Link href="/marketplace">
          <div
            className="w-[350px] h-[200px] rounded-lg border border-white text-xl font-semibold grid items-center text-center transition-all cursor-pointer hover:mb-3"
            style={{ transition: ".2s" }}
          >
            Marketplace
          </div>
        </Link>
      </div> */}
    </MaxWidthWrapper>
  );
}
