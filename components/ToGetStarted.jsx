import { BiSolidDownArrow } from "react-icons/bi";

const ToGetStarted = ({ text, goto }) => {
  return (
    <a
      href={goto}
      className="text-white text-sm lg:text-[22px] absolute bottom-0 mb-3 transition-all hover:scale-105"
    >
      <span>{text}</span>
      <BiSolidDownArrow className="mx-auto" />
    </a>
  );
};

export default ToGetStarted;
