import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoaderProvider } from "@/context/LoaderContext";

const font = Inter({ subsets: ["latin"], weight: "400" });
// const font = Poppins({ weight: "400" });

export const metadata: Metadata = {
  title: "Github User search",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>
        <LoaderProvider>{children}</LoaderProvider>
      </body>
    </html>
  );
}
