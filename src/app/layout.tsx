import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import { PT_Mono } from "next/font/google";

import { ReactLenis } from "@/app/utils/lenis";


const pt_Mono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OPS Quzet",
  description: "Охранное предприятие Кузет",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${pt_Mono.className} bg-black antialiased`}
        >
          <main>
            {children}
          </main>
        </body>
      </ReactLenis>
    </html>
    );
}
