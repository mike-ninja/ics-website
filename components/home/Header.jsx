import Link from "next/link";
import HeaderBox from "../HeaderBox";
import ToGetStarted from "../ToGetStarted";

const Header = () => {
  return (
    <header className="bg-home_header_bg relative bg-cover bg-center h-[60vh] min-h-[600px] lg:h-[80vh] flex flex-col justify-center items-center">
      <div className="w-fit p-4">
        <HeaderBox />
        <div className="flex text-white justify-center">
          <Link
            className="btn btn_primary md:mr-2 lg:mr-5"
            href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__ZvvzOdUOFJaVzVPRTUxRjhPT0dVV0lJTlNaRzg5Uy4u"
            target="_blank"
            rel="noreferrer"
          >
            Register
          </Link>
          <Link
            className="btn btn_variant md:ml-2 lg:ml-5"
            href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__ZvvzOdURDA4VDFPTlgzVU01OUtBM0pCSkRBWFU0OS4u"
            target="_blank"
            rel="noreferrer"
          >
            Submit&nbsp;A&nbsp;Paper
          </Link>
        </div>
      </div>
      <ToGetStarted
        text="To get started, check information below"
        goto="#conferences"
      />
    </header>
  );
};

export default Header;
