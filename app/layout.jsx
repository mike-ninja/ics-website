import "@/styles/globals.css";

import Nav from "@/components/Nav";

export const metadata = {
  title: "ICS Conferences",
  description: "Indigenous Conference Services",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth scrollbar-hide" lang="en">
      <body>
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
