import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezekiel Portfolio Website Login Page",
  description: "Jeremiah Ezekiel's Portfolio Website Login Page",
  verification: { 
    google: "7BwZ3vDqesxdskT4V9ISSrmhE4lTxrLB_NjuyeDUb_g",
  }
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
      
        {children}

      </body>
    </html>
  );
}
