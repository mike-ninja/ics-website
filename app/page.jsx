import Header from "@/components/home/Header";
import Conferences from "@/components/home/Conferences";
import HomeAbout from "@/components/home/HomeAbout";
import Advantages from "@/components/home/Advantages";
import CallToAction from "@/components/home/CallToAction";
import HomeContact from "@/components/home/HomeContact";

export default async function Home() {
  return (
    <>
      <Header />
      <Conferences />
      <HomeAbout />
      <Advantages />
      <CallToAction />
      <HomeContact />
    </>
  );
}
