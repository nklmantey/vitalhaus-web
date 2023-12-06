import Image from "next/image";
import SiteLogo from "@/public/logo.svg";

export default function Logo() {
  return (
    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#11121B] hover:bg-[#1C1E29] rounded-full">
      <Image
        src={SiteLogo}
        className="w-12 h-12 md:w-16 md:h-16 rounded-full"
        alt="logo"
      />
    </div>
  );
}
