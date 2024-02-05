import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from 'next/image'


export default function Docs() {

  

  return (
    <MaxWidthWrapper>
      <Image
      src="../../../public/underConstruction.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
      className="w-[50%] block m-auto"
      >
     </Image>
    </MaxWidthWrapper>
  );
}