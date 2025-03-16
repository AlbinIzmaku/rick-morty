import { Inter } from "next/font/google";
import "./globals.css";
import { languages } from "../i18n/settings";
import { dir } from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rick and Morty App",
  description: "Generated characters by RRick and Morty GraphQL API",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
