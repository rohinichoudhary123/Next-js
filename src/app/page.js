import Image from "next/image";
import BannerSection from "./components/home-components/BannerSection";
import LatestProduct from "./components/home-components/LatestProduct";

export default function Home() {
  return (
   <div className="  bg-white text-black">
    <BannerSection/>
    <LatestProduct/>
   </div>
  );
}
