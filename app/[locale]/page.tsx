import { Navbar } from "@/components/global";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Hero from "@/public/hero.jpg";
import Rooms from "@/components/rooms";
import Testimonials from "@/components/testimonials";

export default function IndexPage() {
  const t = useTranslations("Index");

  return (
    <div>
      <div className="w-full h-full px-8 md:px-16 lg:px-24 py-8">
        <Navbar />

        {/* hero section */}
        <div className="w-full flex flex-col items-center gap-4 md:gap-8 justify-center my-8 md:my-20">
          <h1 className="font-cosiUltra text-3xl md:text-6xl text-center tracking-normal lg:tracking-widest">
            {t("welcome")}
          </h1>
          <h1 className="font-cosiBold text-sm md:text-xl text-center tracking-normal lg:tracking-widest">
            {t("welcomeSubtext")}
          </h1>

          <div className="w-full h-auto lg:h-[600px]">
            <Image
              src={Hero}
              alt="old woman being helped by caretaker"
              className="w-full h-full rounded object-cover"
            />
          </div>
        </div>
      </div>

      {/* rooms section */}
      <Rooms />

      {/* testimonials section */}
      <Testimonials />
    </div>
  );
}
