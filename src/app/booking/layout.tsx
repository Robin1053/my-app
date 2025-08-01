import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "../globals.css";
import dynamic from 'next/dynamic';

const ConfettiWrapper = dynamic(() => import('../components/ConfettiWrapper'));

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stepper",
  description: "Date-Stepper",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConfettiWrapper />
        {children}
      </body>
    </html>
  );
}
