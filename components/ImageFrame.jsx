import Image from "next/image";

const ImageFrame = ({ img, alt }) => {
  return (
    <div className="m-6 rounded">
      <div className="h-[400px] flex bg-dark_beige rounded relative translate-x-[10px] translate-y-[10px]">
        <Image
          src={img}
          alt={alt}
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            transform: "translateX(-20px) translateY(-20px)",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default ImageFrame;
