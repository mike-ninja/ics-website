import Header from "@/components/home/Header";
import Conferences from "@/components/home/Conferences";
import HomeAbout from "@/components/home/HomeAbout";
import Advantages from "@/components/home/Advantages";
import CallToAction from "@/components/home/CallToAction";

export default async function Home() {
  return (
    <>
      <Header />
      <HomeAbout />
      <Conferences />
      <Advantages />
      <CallToAction />
    </>
  );
}
