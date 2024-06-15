import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craft 9 Studios",
  description: "Craft 9 Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white mb-20`}>
        <div className="overflow-x-hidden">
          <div id="content" className="hidden">
            <Navbar />
            {children}
            <Footer />
          </div>
          <Loader/>
      </div>
      </body>
    </html>
  );
}
