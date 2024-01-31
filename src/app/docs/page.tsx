import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import pageConstruction from "../../../public/underConstruction.jpg"

export default function Docs() {

  const srcConstruction: string = pageConstruction.src as string;

  return (
    <MaxWidthWrapper>
      <img src={srcConstruction} alt="" className="w-[50%] block m-auto" />
    </MaxWidthWrapper>
  );
}
