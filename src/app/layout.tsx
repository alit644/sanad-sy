import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "سَنَد - sanad",
  description: "دليل مجتمعي لخدمات الخير والمساعدة في سوريا",
  openGraph: {
    title: "سَنَد - sanad",
    description: "دليل مجتمعي لخدمات الخير والمساعدة في سوريا",
    url: "https://sanad-sy.vercel.app",
    siteName: "Sanad",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sanad - سَنَد",
      },
    ],
    locale: "ar_SY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={` ${cairo.variable} antialiased bg-background`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
