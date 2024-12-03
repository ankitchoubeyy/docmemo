import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight:["400", "500", "600", "700"] });

export const metadata = {
  title: "DocMemo",
  description: "Your go-to blog for coding tips, development tutorials, and tech insights. Explore, learn, and level up your skills with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
