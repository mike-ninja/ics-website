import HeaderBox from "../HeaderBox";
import ToGetStarted from "../ToGetStarted";

const ConferencesHeader = () => {
  return (
    <header className="bg-conferences_header_bg relative bg-cover bg-center bg-fixed h-[60vh] min-h-[600px] lg:h-[80vh] flex flex-col justify-center items-center">
      <HeaderBox />
      <ToGetStarted text="Check more information below" goto="#about" />
    </header>
  );
};

export default ConferencesHeader;
