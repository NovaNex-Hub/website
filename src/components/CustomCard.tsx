"use client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import Image, { StaticImageData } from "next/image";
import { ShoppingCart } from "lucide-react";

export const CustomCard = ({
  path,
  index,
}: {
  path?: StaticImageData;
  index?: number;
}) => {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-4xl font-semibold">
          <Image
            src={path ? path : ""}
            alt="nft image"
            width={350}
            height={350}
          />
        </span>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className="flex justify-between w-full">
          <span>Name</span>
          <Button variant="ghost" size="icon"> 
            <ShoppingCart />
          </Button>
        </div>
        <div className="flex justify-between w-full">
          <span>Floor</span>
          <span>Total Volume</span>
        </div>
      </CardFooter>
    </Card>
  );
};
