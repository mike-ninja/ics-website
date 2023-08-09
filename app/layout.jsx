import "@/styles/globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICS Conferences",
  description: "Indigenous Conference Services",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
