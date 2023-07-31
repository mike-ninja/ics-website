import "@/styles/globals.css";

import Nav from "@/components/Nav";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICS Conferences",
  description: "Indigenous Conference Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
