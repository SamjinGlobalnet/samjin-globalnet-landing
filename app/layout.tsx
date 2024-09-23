import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Samjin Globalnet | Leading Korean Food Exporter Worlwide",
  description:
    "Sice 1970, Samjin Globalnet has been exporting high-quality Korean food products to over 65 countries, including the Americas, Europe, and Asia. We provide export logistics, sourcing, private labels, and consultation services.",
  openGraph: {
    title: "Samjin Globalnet | Leading Korean Food Exporter Worlwide",
    description:
      "Sice 1970, Samjin Globalnet has been exporting high-quality Korean food products to over 65 countries, including the Americas, Europe, and Asia. We provide export logistics, sourcing, private labels, and consultation services.",
    images: {
      url: "/images/og_image.jpg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} antialiased text-text`}>
        <Header />
        <main className="pt-[60px] tab:pt-[100px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
