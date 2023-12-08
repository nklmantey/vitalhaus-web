"use client";
import { Navbar } from "@/components/global";
import Image from "next/image";
import Hero from "@/public/hero.jpg";
import Rooms from "@/components/rooms";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import ChatbotScript from "@/components/script";
import Head from "next/head";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function IndexPage() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
      duration: 1000,
      easing: "ease-in-out",
    });
  });

  return (
    <div>
      <Head>
        <title>VitalHaus</title>
      </Head>
      <ChatbotScript />

      {/* hero and nav */}
      <div className="w-full h-full overflow-hidden px-8 md:px-16 lg:px-24 py-8">
        <Navbar />

        <div className="w-full flex flex-col items-center gap-4 md:gap-8 justify-center my-8 md:my-20 overflow-hidden">
          <h1
            data-aos="fade-left"
            className="font-cosiUltra text-3xl md:text-6xl text-center tracking-normal lg:tracking-widest"
          >
            Willkommen im VitalHaus
          </h1>
          <h1
            data-aos="fade-right"
            className="font-csBold text-sm md:text-xl text-center"
          >
            Entdecken sie ihr traum-altersheim
          </h1>

          <div data-aos="fade-up" className="w-full h-auto lg:h-[600px]">
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

      {/* faq section */}
      <FAQ />

      {/* contact section */}
      <Contact />
    </div>
  );
}
