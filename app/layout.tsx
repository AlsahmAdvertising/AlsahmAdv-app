import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import "dotenv/config";
import SlideList from "@/components/SlideList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alsahm Advertising",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SlideList OldCategories={children} />
      </body>
    </html>
  );
}
