import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Highlights = ({ text }) => {
  return (
    <div className="flex items-center justify-center text-metal_gray text-lg">
      <IoMdCheckmarkCircleOutline className="mr-2 text-xl" />
      <span>{text}</span>
    </div>
  );
};

export default Highlights;
