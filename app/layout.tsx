import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import { Inter, Glory } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
      className="duration-500"
    >
      <body
        className={"max-lg:mt-16 min-h-screen flex flex-col " + glory.className}
      >
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
