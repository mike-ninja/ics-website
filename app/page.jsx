import Header from "@/components/home/Header";
import Conferences from "@/components/home/Conferences";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";

export default async function Home() {
  return (
    <>
      <Header />
      <Conferences />
      <HomeAbout />
      <HomeContact />
    </>
  );
}
