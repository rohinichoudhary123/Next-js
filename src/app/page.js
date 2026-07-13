import Image from "next/image";
import BannerSection from "./components/home-components/BannerSection";
import LatestProduct from "./components/home-components/LatestProduct";

export default function Home({Data}) {
  
  return (
   <div className="  bg-white text-black">
    <BannerSection/>
    
    <LatestProduct Product={Data}/>
   </div>
  );
}
