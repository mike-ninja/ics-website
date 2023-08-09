import Header from "@/components/home/Header";
import Conferences from "@/components/home/Conferences";
import HomeAbout from "@/components/home/HomeAbout";
import HomeContact from "@/components/home/HomeContact";
import HomeCta from "@/components/home/HomeCta";

export default async function Home() {
  return (
    <>
      <Header />
      <Conferences />
      <HomeAbout />
      <HomeCta />
      <HomeContact />
    </>
  );
}
