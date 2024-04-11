import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/header";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lazy Options: Live Account Trading Log for Strategies",
  description:
    "Lazy Options provides a live account trading log for various trading strategies, " +
    "offering insights into the performance of different options trading approaches.",
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "subpixel-antialiased")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
