import MaxWidthWrapper from "@/components/MaxWidthWrapper";
<<<<<<< HEAD
import pageConstruction from "../../../public/underConstruction.jpg"

export default function Docs() {

  const srcConstruction: string = pageConstruction.src as string;

  return (
    <MaxWidthWrapper>
      <img src={srcConstruction} alt="" className="w-[50%] block m-auto" />
=======
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
>>>>>>> 0ef32b3a5dfbbd92574204ac126f619eed8d9222
    </MaxWidthWrapper>
  );
}