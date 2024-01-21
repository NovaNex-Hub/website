import { AutoPlayCards } from "@/components/AutoPlayCards";
import { CustomCard } from "@/components/CustomCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Marketplace() {
  return (
    <MaxWidthWrapper>
      <div className="font-semibold m-6 text-2xl">Marketplace</div>
      <div className="font-semibold m-6 text-xl">Top Trending</div>
      <AutoPlayCards />
      <div className="font-semibold m-6 text-xl">All NFTs</div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="p-1">
            <CustomCard index={index + 1} />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
