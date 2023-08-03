import Header from "@/components/Header";
import Conferences from "@/components/Conferences";

export default async function Home() {
  return (
    <>
      <Header />
      <Conferences />
      <div className="relative h-[20px] md:h-[40px]">
        <div className="bg-light_beige h-1/2"></div>
        <div className="bg-divider_dots bg-contain bg-center h-full absolute inset-0"></div>
        <div className="bg-dark_beige h-1/2"></div>
      </div>
    </>
  );
}
