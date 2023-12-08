import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      q: "Welche Arten von Pflegeleistungen bietet das Ralf's StockHaven an?",
      a: "Das Ralf's StockHaven bietet eine breite Palette von Pflegeleistungen, darunter Betreuung, medizinische Unterstützung und spezielle Programme, die auf die individuellen Bedürfnisse unserer Bewohner zugeschnitten sind",
    },
    {
      q: "Gibt es Freizeitaktivitäten und soziale Veranstaltungen für die Bewohner?",
      a: "Ja, im Ralf's StockHaven legen wir großen Wert auf ein aktives Gemeinschaftsleben. Es gibt regelmäßige soziale Aktivitäten, Veranstaltungen und Ausflüge, um die Lebensqualität unserer Bewohner zu fördern",
    },
    {
      q: "Wie kann ich einen Platz im Ralf's StockHaven reservieren?",
      a: "Die Reservierung eines Platzes im Ralf's StockHaven ist einfach. Sie können sich mit unserem Team in Verbindung setzen, um weitere Informationen zu erhalten und den Prozess der Platzreservierung zu beginnen",
    },
    {
      q: "Welche Art von Unterkünften und Einrichtungen bietet das Ralf's StockHaven?",
      a: "Das Ralf's StockHaven verfügt über moderne und komfortable Unterkünfte mit gut ausgestatteten Einrichtungen. Von geräumigen Wohnräumen bis zu erstklassigen Annehmlichkeiten – wir bieten eine Umgebung, die Sicherheit, Komfort und Bequemlichkeit prioritär behandelt.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      id="faq"
      className="bg-[#141727] w-full h-fit px-8 md:px-16 lg:px-24 py-8 overflow-hidden"
    >
      {/* header */}
      <div className="w-full flex flex-col items-center gap-8 justify-center">
        <h1 className="font-cosiUltra text-3xl md:text-6xl text-center tracking-normal lg:tracking-widest">
          FAQ - Häufig gestellte Fragen
        </h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className="my-8 md:my-20 gap-4 lg:gap-8 flex flex-col w-full font-csBold"
      >
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
