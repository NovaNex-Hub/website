"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { AutoPlayCards } from "@/components/AutoPlayCards";
import Link from "next/link";

export default function Home() {  
  redirect("/marketplace")
  return (
    <MaxWidthWrapper>
      <div className="h-[30px]"></div>
      <AutoPlayCards />
      
      <div className="w-full flex justify-evenly items-center pt-[60px]">
        <Link href="/docs">
        <div className="w-[350px] h-[200px] rounded-lg border border-white text-xl font-semibold grid items-center text-center transition-all cursor-pointer hover:mb-3" style={{transition:".2s"}}>
          Docs
        </div>
        </Link>
        <Link href="/login">
        <div className="w-[350px] h-[200px] rounded-lg border border-white text-xl font-semibold grid items-center text-center transition-all cursor-pointer hover:mb-3" style={{transition:".2s"}}>
          Get Started
        </div>
        </Link>
        <Link href="/marketplace">
        <div className="w-[350px] h-[200px] rounded-lg border border-white text-xl font-semibold grid items-center text-center transition-all cursor-pointer hover:mb-3" style={{transition:".2s"}}>
          Marketplace
        </div>
        </Link>
      </div>

      <div className="w-full">
      <div>
        <div className="md:flex flex-wrap md:flex-row justify-between w-full">
          <div className="md:flex justify-center items-start md:gap-[100px]">
            <div className="flex flex-row gap-[100px]">
              <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                <p className="text-gray-50 text-[25px] md:text-[40px] font-semibold">
                  Product
                </p>
                <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                  Features
                </p>
                <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                  Workload
                </p>
                <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                  Time
                </p>
              </div>

              <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
                <p className="text-gray-50 text-[25px] md:text-[40px] font-semibold">
                  Company
                </p>
                <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                  Real Work
                </p>
                <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                  About & Contact
                </p>
                <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                  Careers
                </p>
              </div>
            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-7">
              <p className="text-gray-50 text-[25px] md:text-[40px] font-semibold">
                Resources
              </p>
              <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                Blog
              </p>
              <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                Help & About
              </p>
              <p className="text-gray-50 text-[10px] md:text-[20px] font-normal">
                Customer
              </p>
            </div>
            <div className="md:w-[519px] pb-[60px] md:h-[88px] my-[40px]  md:mt-[20px]">
              <div className="flex flex-row items-center gap-4">
                <Link className="font-bold text-3xl mr-10" href="/">
                  NovaNex
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </MaxWidthWrapper>
  );
}
