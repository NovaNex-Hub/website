// import { CustomCard } from "./CustomCard";
import nft6 from "../../public/nft6.jpeg"

export const ProfilePage = () => {

  const srcValue: string = nft6.src as string;

  return (
    <>
      <div className="w-full mt-[90px] flex justify-center">
         <div className="flex w-1/2 h-1/2"> 
              <img src={srcValue} className="round-1/2 w-[300px] h-[250px]" />
              <div className="grid w-[500px] ml-[15px] items-center">
                <input type="text" placeholder="Jordan Henderson" className="w-full border border-[2px]-black h-[80%] px-2 rounded" readOnly/>
                <input type="text" placeholder="+22731422314" className="w-full border border-[2px]-black h-[80%] px-2 rounded"/>
                <input type="text" placeholder="Canada" className="w-full border border-[2px]-black h-[80%] px-2 rounded"/>
                <input type="text" placeholder="novanex.vercel.app" className="w-full border border-[2px]-black h-[80%] px-2 rounded"/>
                <input type="text" placeholder="github.com/novanex-hub" className="w-full border border-[2px]-black h-[80%] px-2 rounded"/>
              </div>
          </div>
      </div>

    </>
  );
};
