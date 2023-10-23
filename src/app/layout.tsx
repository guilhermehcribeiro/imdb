import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Providers from "../providers/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
