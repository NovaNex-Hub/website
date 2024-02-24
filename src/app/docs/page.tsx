import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import UC from "../../../public/underConstruction.jpg";

export default function Docs() {
  return (
    <MaxWidthWrapper>
      <Image
        src={UC}
        width={500}
        height={500}
        alt="Picture of the author"
        className="m-auto"
      ></Image>
    </MaxWidthWrapper>
  );
}
