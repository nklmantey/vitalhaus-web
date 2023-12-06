import Image1 from "@/public/img-1.jpg";
import Image2 from "@/public/img-2.jpg";
import Image3 from "@/public/img-3.jpg";
import Image4 from "@/public/img-4.jpg";
import Image5 from "@/public/img-5.jpg";
import Image6 from "@/public/img-6.jpg";
import Image7 from "@/public/img-7.jpg";
import Image from "next/image";

type Props = {
  header: string;
  subtext: string;
};

export default function Rooms({ header, subtext }: Props) {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  return (
    <div
      id="zimmer"
      className="bg-[#141727] w-full h-fit px-8 md:px-16 lg:px-24 py-8"
    >
      {/* header and subtext */}
      <div className="w-full flex flex-col items-center gap-8 justify-center">
        <h1 className="font-cosiUltra text-3xl md:text-6xl text-center tracking-normal lg:tracking-widest">
          {header}
        </h1>
        <h1 className="font-cosiBold text-sm md:text-xl text-center tracking-normal lg:tracking-widest">
          {subtext}
        </h1>
      </div>

      {/* image map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 md:my-20 gap-4 lg:gap-8 px-2 lg:px-8 items-center justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className="border-2 border-white flex items-center p-1 rounded w-full hover:scale-105 cursor-pointer transition-all duration-500"
          >
            <div className="w-full h-auto md:h-80 lg:h-96">
              <Image
                src={img}
                alt="rooms"
                className="w-full h-auto md:h-80 lg:h-96"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
