const Header = () => {
  return (
    <header className="bg-teal-400 text-black w-full h-screen flex justify-center items-center rounded-lg">
      <div className="bg-black bg-opacity-70 p-12 rounded-lg text-center">
        <h1>INDIGENOUS CONFERENCE SERVICES</h1>
        <h1>(ICS-MEES PTY LTD)</h1>
        <h2>THE IMPOSSIBLE IS JUST THE NEXT STEP FOR US IN OUR JOURNEY</h2>
        <div className="flex justify-between mt-10">
          <a
            className="black_btn"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Register
          </a>
          <a
            className="black_btn"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Submit a paper
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
