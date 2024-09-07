import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTopButton from "./components/utils/backtotop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photography Site Amber",
  description: "Nextjs App created by Sigmund Frost",
  icons: {
    icon: [
      {
        url: "/site-logo.ico",
        sizes: "180x180",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackToTopButton />
        {children}
      </body>
    </html>
  );
}
