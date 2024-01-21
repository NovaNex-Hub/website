import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export const CustomCard = ({ index }: { index: number }) => {
  return (
    <Card>
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <span className="text-4xl font-semibold">{index + 1}</span>
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
