import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { orbitron } from "@/assets/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | Gerson Pineda",
  description: "Portafolio de Gerson Pineda, desarrollado en NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white" style={{scrollBehavior:'smooth'}}>
      <body className={`${orbitron.className} dark`}>{children}</body>
    </html>
  );
}
