import { HiSpeakerphone } from "react-icons/hi";
import { PiMedalFill } from "react-icons/pi";
import { RiPresentationFill } from "react-icons/ri";

// TODO: Create buttons

const CallToAction = () => {
  return (
    <section className="bg-light_beige">
      <div className="container text-center text-light_blue">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <div className="flex flex-col items-center bg-off_white py-10 rounded-xl transition-all hover:scale-[1.02]">
              <HiSpeakerphone className="text-4xl text-metal_gray mb-3" />
              <strong className="text-2xl">
                Become a Speaker
              </strong>
              <p className="italic text-metal_gray">
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
            <div className="flex flex-col items-center bg-off_white py-10 rounded-xl transition-all hover:scale-[1.02]">
              <PiMedalFill className="text-4xl text-metal_gray mb-3" />
              <strong className="text-2xl">
                Become a Sponsor
              </strong>
              <p className="italic text-metal_gray">
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
          <div>
            <div className="flex flex-col items-center bg-off_white py-10 rounded-xl transition-all hover:scale-[1.02]">
              <RiPresentationFill className="text-4xl text-metal_gray mb-3" />
              <strong className="text-2xl">
                Become a Exhibitor
              </strong>
              <p className="italic text-metal_gray">
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
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
