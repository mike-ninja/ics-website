import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Highlights = ({ text }) => {
    // <div className="flex items-center justify-center text-metal_gray text-sm">
  return (
    <div className="text-metal_gray text-sm md:text-lg lg:text-2xl flex md:justify-center md:items-center">
      <IoMdCheckmarkCircleOutline className="mr-2 text-xl lg:text-3xl" />
      <span>{text}</span>
    </div>
  );
};

export default Highlights;
