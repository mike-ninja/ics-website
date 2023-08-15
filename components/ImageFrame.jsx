import Image from "next/image";

const ImageFrame = ({ img }) => {
  // <div className="m-6 rounded">
  //   <div className="h-[400px] flex bg-dark_beige rounded translate-x-[0.5rem] translate-y-[0.5rem]">
  //     <div className="bg-[url('/assets/images/about-img.jpg')] bg-cover bg-center rounded w-full h-full translate-x-[-1rem] translate-y-[-1rem]">
  //     </div>
  //   </div>
  // </div>
  return (
    <div className="m-6 rounded">
      <div className="h-[400px] flex bg-dark_beige rounded relative translate-x-[10px] translate-y-[10px]">
        <Image src={img} style={{ objectFit: "cover", objectPosition: "50% 50%", transform: "translateX(-20px) translateY(-20px)" }} />
      </div>
    </div>
  );
};

export default ImageFrame;
