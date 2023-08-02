import ConferencesCards from "@/components/ConferencesCards";
import Header from "@/components/Header";
import AboutCards from "@/components/AboutCards";

export default async function Home() {
  return (
    <section>
      <Header />
      <AboutCards />
      <ConferencesCards />
    </section>
  );
}
