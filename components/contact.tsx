import React from "react";

export default function Contact() {
  return (
    <div
      id="kontakt"
      className="bg-[#0E101C] w-full h-fit px-8 md:px-16 lg:px-24 py-8 overflow-hidden"
    >
      {/* header and subtext */}
      <div
        data-aos="fade-up"
        className="w-full flex flex-col items-center gap-8 justify-center"
      >
        <h1 className="font-cosiUltra text-3xl md:text-6xl text-center tracking-normal lg:tracking-widest">
          Kontakt
        </h1>
        <h1 className="font-csBold text-sm md:text-xl text-center">
          Hinterlassen Sie uns eine Nachricht, und wir werden Ihnen auf Deutsch
          antworten
        </h1>
      </div>

      {/* form */}
    </div>
  );
}
