"use client";
import { AutoPlayCards } from "@/components/AutoPlayCards";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/CustomCard";
import { StaticImageData } from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import nft1 from "../../../public/nft1.jpeg";
import nft2 from "../../../public/nft2.jpeg";
import nft3 from "../../../public/nft3.jpeg";
import nft4 from "../../../public/nft4.jpeg";
import nft5 from "../../../public/nft5.jpeg";
import nft6 from "../../../public/nft6.jpeg";
import nft7 from "../../../public/nft7.jpeg";
import nft8 from "../../../public/nft8.jpeg";
import nft9 from "../../../public/nft9.jpeg";
import nft10 from "../../../public/nft10.jpeg";
import nft11 from "../../../public/nft11.jpeg";

export default function Marketplace() {
  const [images, setImages] = useState<StaticImageData[]>([]);
  useEffect(() => {
    setImages([
      nft1,
      nft2,
      nft3,
      nft4,
      nft5,
      nft6,
      nft7,
      nft8,
      nft9,
      nft10,
      nft11,
    ]);
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="font-semibold m-6 text-xl">Top Trending</div>
      <AutoPlayCards />
      <div className="font-semibold m-6 text-xl">All NFTs</div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((path, index) => (
          <div key={index} className="p-1">
            <CustomCard path={path} />
          </div>
        ))}
      </div>
      {/* <div className="font-semibold m-6 text-xl">Top Sales</div> */}
      <div className="font-semibold m-6 text-xl">Best Offers</div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((path, index) => (
          <div key={index} className="p-1">
            <CustomCard path={path} />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
