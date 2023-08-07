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
        <div className="flex justify-between mt-10 text-white">
          <a
            className="btn"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Register
          </a>
          <a
            className="btn"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Submit A Paper
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
