/** @format */

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Provider from "./provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "web3projectlinks",
  description:
    "Trustworthy cryptocurrency links for secure navigation. Verified exchanges, wallets, news. Protecting enthusiasts worldwide. Join us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbarHeight = "56px";
  const footerHeight = "80px";

  return (
    <html lang="en" className="h-full">
      <body className={`flex flex-col h-full ${inter.className}`}>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <Footer />
        </footer>
        <GoogleAnalytics gaId="G-VQJV22LQH8" />
      </body>
    </html>
  );
}
