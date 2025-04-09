import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import Providers from "@/redux/provider";

// Load fonts via next/font/google for better performance
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Define weights you need
});

// Metadata (Next.js handles <head> automatically)
export const metadata: Metadata = {
  title: "AISP - Achiever International School Pratappur",
  description: "A leading CBSE school providing quality education from Nursery to 12th grade.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${playfairDisplay.variable} antialiased`}>
        <Providers>
        {/* Header Section (Top bar + Social Links) */}
        <MainHeader/>
        {/* Main Content */}
        <main>{children}</main>

        {/* Additional Sections */}
        <LocationMap />
        <Footer />
        </Providers>
      </body>
    </html>
  );
}
