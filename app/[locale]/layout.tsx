import "../globals.css";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/config";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: {
    default: "VitalHaus",
    template: "VitalHaus",
  },
  description: "German housing",
  icons: {
    shortcut: "/favicon.ico",
  },
};

const cosiBold = LocalFont({
  src: "../../public/fonts/CosiAzure-Bold.ttf",
  variable: "--font-cosi-bold",
});

const cosiUltra = LocalFont({
  src: "../../public/fonts/CosiAzure-Ultra.ttf",
  variable: "--font-cosi-ultra",
});

const circularStdBold = LocalFont({
  src: "../../public/fonts/CircularStd-Bold.ttf",
  variable: "--font-cs-bold",
});

const circularStdMedium = LocalFont({
  src: "../../public/fonts/CircularStd-Medium.ttf",
  variable: "--font-cs-medium",
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={[
        cosiBold.variable,
        cosiUltra.variable,
        circularStdBold.variable,
        circularStdMedium.variable,
      ].join(" ")}
    >
      <body>{children}</body>
    </html>
  );
}
