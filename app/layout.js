import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "./_component/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "codeAYNA",
  description: "codeAYNA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased bg-white dark:bg-[#171717] text-black dark:text-white overflow-x-hidden relative`}
        >
          
        <Analytics/>
        <SpeedInsights />
        <Header />
         <Providers>{children}</Providers>
        <Footer />
        
      </body>
    </html>
  );
}
