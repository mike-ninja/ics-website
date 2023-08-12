import { HiSpeakerphone } from "react-icons/hi";
import { PiMedalFill } from "react-icons/pi";
import { RiPresentationFill } from "react-icons/ri";

// TODO: Create buttons

const CallToAction = () => {
  return (
    <section className="bg-light_brown">
      <div className="container text-center text-light_brown">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col items-center bg-light_beige">
            <HiSpeakerphone />
            Become a Speaker
            <a href="" className="btn btn_variant">Click Here</a>
          </div>
          <div className="flex flex-col items-center">
            <PiMedalFill />
            Become a Speaker
            <a href="" className="btn btn_variant">Click Here</a>
          </div>
          <div className="flex flex-col items-center">
            <RiPresentationFill />
            Become a Speaker
            <a href="" className="btn btn_variant">Click Here</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
