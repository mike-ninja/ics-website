import DividerDots from "../DividerDots";
import HeaderBox from "../HeaderBox";
import ToGetStarted from "../ToGetStarted";

const AboutHeader = () => {
  return (
    <header className="bg-about_header_bg relative bg-cover bg-fixed h-[60vh] min-h-[600px] lg:h-[80vh] flex flex-col justify-center items-center">
      <HeaderBox />
      <ToGetStarted text="Check more information below" goto="#about" />
    </header>
  );
};

export default AboutHeader;
