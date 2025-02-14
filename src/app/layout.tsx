import type { Metadata } from "next";
import { Manrope} from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <main className="bg-gradient-to-tr font-manrope from-[#e52d27] to-[#a60a0f] min-h-[100svh] flex flex-col">
          <NavBar />
          {children}
        </main>
        {modal}
      </body>
    </html>
  );
}
