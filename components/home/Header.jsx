import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-header_bg bg-cover bg-center h-[60vh] lg:h-[80vh] flex flex-col justify-center items-center border-t-4 border-solid border-dark_brown">
      <div className="w-fit p-4">
        <div className="text-center bg-white rounded-md p-2 md:p-5 lg:p-7">
          <h1 className="header_head">
            INDIGENOUS&nbsp;CONFERENCE&nbsp;SERVICES
          </h1>
          <h2 className="header_description">THE IMPOSSIBLE IS JUST THE NEXT STEP FOR US IN OUR JOURNEY</h2>
        </div>
        <div className="flex text-white justify-center">
          <Link
            className="btn btn_primary md:mr-2 lg:mr-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Register
          </Link>
          <Link
            className="btn btn_variant md:ml-2 lg:ml-5"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Submit&nbsp;A&nbsp;Paper
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
