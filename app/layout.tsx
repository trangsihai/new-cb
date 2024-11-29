import type { Metadata } from "next";
import { Luckiest_Guy, Poor_Story, Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const font = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cobalt | Unleash the power of intuitive finance",
  description: `Cobalt is a financial management platform empowering small business owners. Say goodbye to the outdated financial tools and manage your business with ease.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(font.className)}>{children}</body>
    </html>
  );
}
