import { HiSpeakerphone } from "react-icons/hi";
import { PiMedalFill } from "react-icons/pi";
import { RiPresentationFill } from "react-icons/ri";

// TODO: Create buttons

const CallToAction = () => {
  return (
    <section className="bg-light_beige">
      <div className="container text-center text-light_brown text-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <div className="flex flex-col items-center bg-light_beige py-10 rounded-xl transition-all hover:scale-[1.02]">
              <HiSpeakerphone className="text-4xl" />
              Become a Speaker
              <small className="italic text-dark_brown">
                Share your passion through ICS
              </small>
            </div>
            <a
              href=""
              className="btn btn_variant bg-light_beige"
            >
              <span className="text-light_brown">Click Here</span>
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center bg-light_beige py-10 rounded-xl transition-all hover:scale-[1.02]">
              <PiMedalFill className="text-4xl" />
              Become a Sponsor
              <small className="italic text-dark_brown">
                Partner with us at ICS
              </small>
            </div>
            <a
              href=""
              className="btn btn_variant bg-light_beige"
            >
              <span className="text-light_brown">Click Here</span>
            </a>
          </div>
          <div>
            <div className="flex flex-col items-center bg-light_beige py-10 rounded-xl transition-all hover:scale-[1.02]">
              <RiPresentationFill className="text-4xl" />
              Become a Exhibitor
              <small className="italic text-dark_brown">
                Connect, Engage, & Exhibit at ICS
              </small>
            </div>
            <a
              href=""
              className="btn btn_variant bg-light_beige"
            >
              <span className="text-light_brown">Click Here</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
