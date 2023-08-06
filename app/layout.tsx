import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Toaster } from "react-hot-toast";
import { Inter, Glory } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const glory = Glory({ subsets: ["latin"] });

export const metadata = {
  title: "PlayGround",
  description: "Foty's playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme=""
      className="transition-[background-color] duration-500 scroll-smooth"
    >
      <body
        className={"max-lg:mt-16 max-lg:pt-0 flex flex-col " + glory.className}
      >
        <Toaster />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
