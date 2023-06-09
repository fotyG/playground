import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

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
    >
      <body className={inter.className + " flex flex-col min-h-screen"}>
        <Toaster />
        <Navbar>
          {children}
        </Navbar>
        <Footer />
      </body>
    </html>
  );
}
