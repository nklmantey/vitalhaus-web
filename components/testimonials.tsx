import { useTranslations } from "next-intl";
import { BrightStar, Community, Healthcare, ModernTv } from "iconoir-react";
import Image from "next/image";
import HealthImage from "@/public/img-health.jpg";
import HappyImage from "@/public/img-happy.jpg";
import ModernImage from "@/public/img-modern.jpg";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      name: "Gisela Müller",
      quote:
        "Das Vitalhaus hat mein Leben bereichert. Die Betreuung ist hervorragend, und die Gemeinschaft ist herzlich",
    },
    {
      name: "Karl Schmidt",
      quote:
        "In meinem Alter schätze ich die Annehmlichkeiten und Fürsorge im Vitalhaus. Hier fühle ich mich wirklich zuhause",
    },
    {
      name: "Ursula Wagner",
      quote:
        "Das Vitalhaus bietet eine sichere und liebevolle Umgebung. Es war die beste Entscheidung für meinen Ruhestand",
    },
    {
      name: "Dieter Becker",
      quote:
        "Die Vielfalt der Aktivitäten im Vitalhaus macht den Alltag aufregend. Hier kann man seinen Lebensabend in vollen Zügen genießen",
    },
    {
      name: "Hannelore Schulz",
      quote:
        "Die freundlichen Mitarbeiter im Vitalhaus kümmern sich rührend um uns. Es ist ein Ort des Vertrauens und der Geborgenheit",
    },
    {
      name: "Friedrich Mayer",
      quote:
        "Im Vitalhaus habe ich nicht nur ein Zimmer gefunden, sondern eine Gemeinschaft, die wie eine Familie ist. Hier fühlt man sich wirklich geborgen",
    },
  ];

  const features = [
    {
      title: "Individuelle Pflegepläne",
      quote:
        "Maßgeschneiderte Pflegepläne, die darauf abzielen, die einzigartigen Bedürfnisse jedes Bewohners zu erfüllen, um ein komfortables und unterstützendes Lebenserlebnis zu gewährleisten. Unser engagiertes Team von Fachleuten setzt sich dafür ein, individuelle Aufmerksamkeit zu bieten und die höchsten Pflegestandards aufrechtzuerhalten",
    },
    {
      title: "Lebendiges Gemeinschaftsleben",
      quote:
        "Fördern Sie ein Gefühl der Zugehörigkeit und Engagement durch ein lebendiges Gemeinschaftsleben. Bewohner können an einer Vielzahl von sozialen Aktivitäten, Veranstaltungen und Ausflügen teilnehmen, um soziale Verbindungen und einen erfüllten Lebensstil zu fördern. Erleben Sie die Freude geteilter Momente und dauerhafter Freundschaften",
    },
    {
      title: "Moderne und komfortable Einrichtungen",
      quote:
        "Genießen Sie moderne und gut ausgestattete Einrichtungen, die darauf abzielen, die Lebensqualität zu verbessern. Von geräumigen und gemütlichen Wohnräumen bis zu hochmodernen Annehmlichkeiten – unsere Seniorenwohnumgebung legt Wert auf Komfort, Sicherheit und Bequemlichkeit. Erleben Sie das Beste im Seniorenleben mit unseren durchdachten Einrichtungen",
    },
  ];

  return (
    <div
      id="kundenbewertungen"
      className="bg-[#0E101C] w-full h-fit px-8 md:px-16 lg:px-24 py-8"
    >
      {/* header and subtext */}
      <div className="w-full flex flex-col items-center gap-8 justify-center">
        <h1 className="font-cosiUltra text-3xl md:text-6xl text-center tracking-normal lg:tracking-widest">
          {t("header")}
        </h1>
        <h1 className="font-cosiBold text-sm md:text-xl text-center tracking-normal lg:tracking-widest">
          {t("subtext")}
        </h1>
      </div>

      {/* features map */}
      <div className="my-8 md:my-16 lg:my-20 flex flex-col gap-20 lg:gap-28 xl:gap-36">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 lg:gap-20">
          <div className="p-2 md:p-4 w-full md:w-1/2">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#11121B] hover:bg-[#1C1E29]">
                <Healthcare className="text-[#BEF6FD] w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="font-cosiBold text-sm md:text-xl lg:text-xl">
                {features[0].title}
              </h3>
            </div>
            <h3 className="font-csMedium text-sm mt-4">{features[0].quote}</h3>
          </div>
          <div className="w-full md:w-1/2 rounded">
            <Image
              src={HealthImage}
              className="w-full rounded"
              alt="healthy old man"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-4 md:gap-8 lg:gap-20">
          <div className="p-2 md:p-4 w-full md:w-1/2">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#11121B] hover:bg-[#1C1E29]">
                <Community className="text-[#BEF6FD] w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="font-cosiBold text-sm md:text-xl lg:text-xl">
                {features[1].title}
              </h3>
            </div>
            <h3 className="font-csMedium text-sm mt-4">{features[1].quote}</h3>
          </div>
          <div className="w-full md:w-1/2 rounded">
            <Image
              src={HappyImage}
              className="w-full rounded"
              alt="healthy old man"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 lg:gap-20">
          <div className="p-2 md:p-4 w-full md:w-1/2">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#11121B] hover:bg-[#1C1E29]">
                <ModernTv className="text-[#BEF6FD] w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="font-cosiBold text-sm md:text-xl lg:text-xl">
                {features[2].title}
              </h3>
            </div>
            <h3 className="font-csMedium text-sm mt-4">{features[2].quote}</h3>
          </div>
          <div className="w-full md:w-1/2 rounded">
            <Image
              src={ModernImage}
              className="w-full rounded"
              alt="healthy old man"
            />
          </div>
        </div>
      </div>

      {/* header and subtext */}
      <div className="w-full flex flex-col items-center gap-8 justify-center">
        <h1 className="font-cosiUltra text-xl md:text-4xl lg:text-6xl text-center tracking-normal lg:tracking-widest">
          {t("testimonialsHeader")}
        </h1>
        <h1 className="font-cosiBold text-sm md:text-xl text-center tracking-normal lg:tracking-widest">
          {t("testimonialsSubtext")}
        </h1>
      </div>

      {/* testimonials map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 md:my-16 lg:my-20 gap-4 md:gap-8 items-start justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#1C1E29] p-4 rounded">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[#11121B] hover:bg-[#1C1E29]">
                <BrightStar className="text-[#BEF6FD] w-4 h-4 md:w-6 md:h-6" />
              </div>
              <h3 className="font-cosiBold text-base md:text-xl">
                {testimonial.name}
              </h3>
            </div>
            <h3 className="font-csMedium text-xs md:text-base mt-2 md:4">
              {testimonial.quote}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
