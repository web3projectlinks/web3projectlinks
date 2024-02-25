/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Provider from "./provider";
import { cn } from "@/lib/utils";
import Head from "next/head";

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
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/logo.png" /> */}
        <link rel="icon" href="/assets/favicon.ico" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>

      <body
        className={cn(inter.className, {
          "debug-screens": process.env.NODE_ENV == "development",
        })}
      >
        <Provider>
          {/* <main className="min-h-screen  w-full  bg-zinc-900 text-white  "> */}
          <main className="min-h-screen  w-full  bg-black text-white  ">
            {/* <Navbar style={{ height: navbarHeight }} /> */}
            <Navbar />
            {/*  style={{
                minHeight: `calc(100vh - ${navbarHeight} - ${footerHeight})`,
              }} */}
            <div className="  min-h-full  w-full ">{children}</div>
            {/* <Footer style={{ height: footerHeight }} /> */}
            <Footer />
          </main>
        </Provider>
        <GoogleAnalytics gaId="G-VQJV22LQH8" />
      </body>
    </html>
  );
}