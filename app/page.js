// import Image from "next/image";
import ConferencesCards from "@/components/ConferencesCards";
import Header from "@/components/Header";
// Landing Page

// <section>
//   <ConferencesCards />
// </section>;

export default async function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <span>Hello, Welcome to my app</span>
      </div>
    </>
  );
}
