import "./globals.css";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: {
    default: "Ralf's StockHaven",
    template: "Ralf's StockHaven",
  },
  description: "Senioren Luxuswohnungen",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const cosiBold = LocalFont({
  src: "../public/fonts/CosiAzure-Bold.ttf",
  variable: "--font-cosi-bold",
});

const cosiUltra = LocalFont({
  src: "../public/fonts/CosiAzure-Ultra.ttf",
  variable: "--font-cosi-ultra",
});

const circularStdBold = LocalFont({
  src: "../public/fonts/CircularStd-Bold.ttf",
  variable: "--font-cs-bold",
});

const circularStdMedium = LocalFont({
  src: "../public/fonts/CircularStd-Medium.ttf",
  variable: "--font-cs-medium",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        cosiBold.variable,
        cosiUltra.variable,
        circularStdBold.variable,
        circularStdMedium.variable,
      ].join(" ")}
    >
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
