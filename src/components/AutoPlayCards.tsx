"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CustomCard } from "./CustomCard";
// import nft1 from "../../public/nft6.jpeg";
import nft2 from "../../public/nft7.jpeg";
import nft3 from "../../public/nft8.jpeg";
import nft4 from "../../public/nft9.jpeg";
import nft5 from "../../public/nft10.jpeg";
import nft6 from "../../public/nft11.jpeg";

export function AutoPlayCards() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const [images, setImages] = useState<StaticImageData[]>([]);
  useEffect(() => {
    setImages([nft2, nft3, nft4, nft5, nft6]);
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((path, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <CustomCard path={path} /> 
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
