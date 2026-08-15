import type { Metadata } from "next";
import { Archivo, Barlow } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Itamar Leão 4551 — Deputado Federal",
  description: "Candidato a Deputado Federal para representar Goiás em Brasília, defender os municípios e transformar experiência em resultados para quem mais precisa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${barlow.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-[#F5F6F8] text-[#0B1B33]">
        {children}
      </body>
    </html>
  );
}
