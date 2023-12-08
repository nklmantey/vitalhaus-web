"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";
import ImageContact from "@/public/img-contact.jpg";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin } from "iconoir-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successState, setSuccessState] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contacts = [
    {
      type: "E-Mail",
      contact: "ralfstockresidences@outlook.com",
      icon: Mail,
      actionText: "E-Mail senden",
      action: handleOpenMail,
    },
    {
      type: "Telefon",
      contact: "ralfstockresidences@outlook.com",
      icon: Phone,
      actionText: "Nummer kopieren",
      action: handleCopyNumber,
    },
    {
      type: "Addresse",
      contact: "Große Gallusstraße 16-18, Frankfurt am Main, Deutschland",
      icon: MapPin,
      actionText: "Öffnen in Karten",
      action: handleOpenMaps,
    },
  ];

  function handleOpenMail() {
    const email = "ralfstockresidences@outlook.com";
    const subject = "Anfragen";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  }

  function handleCopyNumber() {
    const phoneNumber = "1234567890";

    try {
      const tempInput = document.createElement("input");
      tempInput.value = phoneNumber;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      toast({
        title: "Telefonnummer erfolgreich kopiert",
        style: { fontFamily: "var(--font-cs-bold)" },
      });
    } catch (e) {
      console.log("error on copy", e);
    }
  }

  function handleOpenMaps() {
    const encodedLocation = encodeURIComponent(
      "Spaces - Frankfurt, Spaces Omniturm, Große Gallusstraße, Innenstadt I, Germany"
    );

    // Create the Google Maps URL
    const mapsUrl = `https://www.google.com/maps?q=${encodedLocation}`;

    // Open the URL in a new tab
    window.open(mapsUrl, "_blank");
  }

  function handleSubmit() {
    setIsLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setSuccessState("Formular erfolgreich übermittelt");
        setIsLoading(false);
        setEmail("");
        setMessage("");
      }, 5000);
    }
  }, [isLoading]);

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
      <div className="my-8 md:my-16 lg:my-20 flex flex-col md:flex-row items-start md:items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={ImageContact}
            alt="old man contacting"
            className="w-full h-auto rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Label className="font-csBold" htmlFor="email">
              E-Mail-Adresse
            </Label>
            <Input
              className="font-csBold"
              type="email"
              id="email"
              placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="font-csBold" htmlFor="message">
              Nachricht
            </Label>
            <Textarea
              className="font-csBold"
              id="message"
              placeholder="Bitte geben Sie Ihre Nachricht ein"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button
            onClick={() => handleSubmit()}
            variant="outline"
            className="font-csBold"
          >
            {isLoading ? "Wird übermittelt..." : "Absenden"}
          </Button>
          <h2 className="font-csBold text-center -mt-4">{successState}</h2>
        </div>
      </div>

      {/* cards */}
      <div
        data-aos="fade-left"
        className="flex flex-wrap my-8 md:my-16 lg:my-20 pb-8 gap-4 md:gap-8 items-start justify-between"
      >
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-[#1C1E29] xl:w-[30%] w-full p-4 md:p-8 rounded"
          >
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#11121B] hover:bg-[#1C1E29]">
                <contact.icon className="text-[#BEF6FD] w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="font-cosiBold text-base md:text-xl">
                {contact.type}
              </h3>
            </div>
            <h3 className="font-csMedium text-xs md:text-base mt-2 md:mt-8">
              {contact.contact}
            </h3>
            <button
              onClick={contact.action}
              className="mt-4 bg-white rounded-full text-black px-8 py-2 font-csBold"
            >
              {contact.actionText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
