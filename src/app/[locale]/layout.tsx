import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { orbitron } from "@/assets/fonts";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | Gerson Pineda",
  description: "Portafolio de Gerson Pineda, desarrollado en NextJS",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className="bg-white"
      style={{ scrollBehavior: "smooth" }}
    >
      <NextIntlClientProvider messages={messages}>
        <body className={`${orbitron.className} dark`}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
