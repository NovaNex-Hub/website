import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="font-semibold m-6 text-2xl">
        Rentable NFT Market place
      </div>
      <div className="bg-black grid-cols-4 gap-4 md:flex md:flex-row mt-20 mx-8">
        <Image src="/nft7.jpg" width={500} height={400} alt="nft7" />

        <Image src="/nft8.jpg" width={500} height={400} alt="nft8" />

        <Image src="/nft9.jpg" width={500} height={400} alt="nft9" />

       

      </div>
      <div className="bg-black grid-cols-4 gap-4 md:flex md:flex-row mt-20 mx-8">
        <Image src="/nft10.jpg" width={500} height={400} alt="nft10" />

        <Image src="/nft11.jpg" width={500} height={400} alt="nft11" />

        <Image src="/nft12.jpg" width={500} height={400} alt="nft12" />

       
      </div>
      <div
        className="px-[30px] md:px-[100px] py-[60px]
    bg-black grid grid-cols-1 md:flex md:flex-row gap-4"
      >
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
    </MaxWidthWrapper>
  );
}
