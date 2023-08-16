import HeaderBox from "./HeaderBox";
import ToGetStarted from "./ToGetStarted";

const SecondaryHeader = ({ text, goto }) => {
  return (
    <header className="bg-secondary_header_bg relative bg-cover bg-fixed bg-bottom md:bg-center h-[40vh] md:h-[60vh] min-h-[500px] lg:h-[80vh] flex flex-col justify-center items-center">
      <HeaderBox />
      <ToGetStarted text={text} goto={goto} />
    </header>
  );
};

export default SecondaryHeader;
