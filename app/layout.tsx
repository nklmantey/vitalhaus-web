import "./globals.css";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "Ralf's StockHaven",
    template: "%s | Senioren Luxuswohnungen",
    absolute: "Ralf's StockHaven",
  },
  keywords: [
    "Ralf's StockHaven",
    "Ralf's Stockhaven",
    "Ralfs Stockhaven",
    "ralfs stockhaven",
    "ralfsstockhaven",
    "ralf's stockhaven",
    "ralfs stockhaven",
    "ralfs stock haven",
  ],
  description: "Senioren Luxuswohnungen",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
  generator: "Ralf's StockHaven",
  applicationName: "Ralf's StockHaven",
  authors: [{ name: "Muller" }],
  creator: "Sebastian Muller",
  publisher: "Sebastian Muller",
  openGraph: {
    title: "Ralf's StockHaven",
    description: "Senioren Luxuswohnungen",
    url: "https://www.ralfsstockhaven.de/",
    siteName: "Ralf's StockHaven",
    images: "/logo.svg",
    locale: "de",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ralf's StockHaven",
    description: "Senioren Luxuswohnungen",
    siteId: "muller5000stockhaven",
    creator: "@muller",
    creatorId: "muller5000stockhaven",
    images: "/logo.svg",
  },
  assets: [
    "/hero.jpg",
    "/img-1.jpg",
    "/img-2.jpg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
    "/img-6.jpg",
    "/img-7.jpg",
    "/img-contact.jpg",
    "/img-happy.jpg",
    "/img-health.jpg",
    "/img-modern.jpg",
    "/logo.svg",
  ],
  category: "housing",
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
      <Head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </Head>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
