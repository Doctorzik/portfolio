import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/molecules/navbar";
import Footer from "@/components/molecules/footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezekiel Portfolio Website",
  description: "Jeremiah Ezekiel's Portfolio Website. Highlighting  skills and projects.",
  verification: {
    google: "7BwZ3vDqesxdskT4V9ISSrmhE4lTxrLB_NjuyeDUb_g",
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Navbar />

        {children}


        <Footer />
      </body>
    </html>
  );
}
