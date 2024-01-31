"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { redirect } from "next/navigation";

export default function Home() {  
  redirect("/marketplace")
  return (
    <MaxWidthWrapper>
      <div className="font-semibold m-6 text-2xl">
        Rentable NFT Market place
      </div>
    </MaxWidthWrapper>
  );
}
