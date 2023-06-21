import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

import { Inter, Glory } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ThemeLoader from "@/providers/ThemeLoader";

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
    >
      <body className={glory.className}>
        <ThemeLoader>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </ThemeLoader>
      </body>
    </html>
  );
}
