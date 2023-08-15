import HeaderBox from "../HeaderBox";
import ToGetStarted from "../ToGetStarted";

const ContactHeader = () => {
  return (
    <header className="bg-contact_header_bg relative bg-cover bg-fixed h-[60vh] min-h-[600px] lg:h-[80vh] flex flex-col justify-center items-center">
      <HeaderBox />
      <ToGetStarted text="Reach out by contacting us below" goto="#contact" />
    </header>
  );
};

export default ContactHeader;
