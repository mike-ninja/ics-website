const GuideBox = ({ text, link, textLink }) => {
  return (
    <div className="absolute bottom-0 left-1/2 translate-x-[-50%] w-full flex items-center justify-center text-metal_gray lg:text-lg">
      <div className="h-9 w-3 bg-light_blue mr-3"></div>
      {text}&nbsp;<a href={link} className="text-light_blue transform-all hover:font-semibold">{" "}{textLink}</a>
    </div>
  );
};

export default GuideBox;
