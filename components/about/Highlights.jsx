import { GiCheckMark } from "react-icons/gi";

const Highlights = ({ text }) => {
  return (
    <div className="flex items-center">
      <GiCheckMark className="mr-2"/>
      <span>{text}</span>
    </div>
  );
};

export default Highlights;
