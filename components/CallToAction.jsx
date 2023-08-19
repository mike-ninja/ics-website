import { HiSpeakerphone } from "react-icons/hi";
import { PiMedalFill } from "react-icons/pi";
import { RiPresentationFill } from "react-icons/ri";

// TODO: Create buttons

const CallToAction = () => {
  return (
    <section className="bg-light_beige">
      <div className="container text-center text-light_blue">
        <h3 className="text-center mb-8 text-3xl italic font-thin text-metal_gray">
          Building better future together
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <div className="advantage_card">
              <HiSpeakerphone className="text-4xl text-metal_gray mb-3" />
              <strong className="text-2xl">
                Become a Speaker
              </strong>
              <p className="italic text-metal_gray text-center">
                Share your passion through ICS
              </p>
            </div>
            <a
              href=""
              className="border-b-[1px] border-metal_gray inline-block mt-4 transition-all hover:scale-105 text-2xl"
            >
              <span className="text-metal_gray">Click Here</span>
            </a>
          </div>
          <div>
            <div className="advantage_card">
              <RiPresentationFill className="text-4xl text-metal_gray mb-3" />
              <strong className="text-2xl">
                Become an&nbsp;Exhibitor
              </strong>
              <p className="italic text-metal_gray text-center">
                Connect, Engage, & Exhibit at ICS
              </p>
            </div>
            <a
              href=""
              className="border-b-[1px] border-metal_gray inline-block mt-4 transition-all hover:scale-105 text-2xl"
            >
              <span className="text-metal_gray">Click Here</span>
            </a>
          </div>
          <div>
            <div className="advantage_card">
              <PiMedalFill className="text-4xl text-metal_gray mb-3" />
              <strong className="text-2xl">
                Become a Sponsor
              </strong>
              <p className="italic text-metal_gray text-center">
                Partner with us at ICS
              </p>
            </div>
            <a
              href=""
              className="border-b-[1px] border-metal_gray inline-block mt-4 transition-all hover:scale-105 text-2xl"
            >
              <span className="text-metal_gray">Click Here</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
