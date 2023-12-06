"use client";
import { Xmark } from "iconoir-react";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navigation = [
    {
      name: "Unsere verfügbaren Zimmer",
      id: "zimmer",
    },
    {
      name: "Kundenbewertungen",
      id: "kundenbewertungen",
    },
    {
      name: "FAQ - Häufig gestellte Fragen",
      id: "faq",
    },
    {
      name: "Kontakt",
      id: "kontakt",
    },
  ];

  function handleMenuItemClick(item: string) {
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  function handleToggle() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <button
        onClick={handleToggle}
        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#11121B] hover:bg-[#1C1E29] flex flex-col gap-1 md:gap-2 items-center justify-center cursor-pointer"
      >
        <div className="h-1 md:h-1.5 w-6 md:w-16 bg-[#BEF6FD]" />
        <div className="h-1 md:h-1.5 w-6 md:w-16 bg-[#BEF6FD]" />
      </button>

      {isMenuOpen && (
        <div className="w-full h-full flex flex-row bg-[#0E101C] fixed inset-0 px-8 md:px-16 lg:px-24 py-8">
          <div className="w-1/2 flex flex-col gap-10 md:gap-20">
            {navigation.map((item, index) => (
              <h3
                onClick={() => handleMenuItemClick(item.id)}
                key={index}
                className="font-cosiUltra text-xl md:text-3xl lg:text-5xl"
              >
                {item.name}
              </h3>
            ))}
          </div>
          <div className="w-1/2 flex justify-end">
            <button
              onClick={handleToggle}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#11121B] hover:bg-[#1C1E29] flex items-center justify-center cursor-pointer"
            >
              <Xmark className="text-[#BEF6FD] w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
