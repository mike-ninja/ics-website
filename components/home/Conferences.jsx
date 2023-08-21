import conferencesService from "@/services/conferences";
import Conference from "./Conference";
import groupFunctionByYear from "@/utils/groupConferenceByYear";
import DividerDots from "../DividerDots";

const ConferenceByMonth = (conferenceMonth) => {
  const month = conferenceMonth.conferenceMonth;
  return (
    <div>
      <h2 className="text-center italic font-thin capitalize text-2xl">{month.month}</h2>
      {month.conferences.map((conference) => (
        <Conference key={conference.title} conference={conference} />
      ))}
    </div>
  );
};

const Conferences = async () => {
  const conferences = await conferencesService.getConferences();
  const conferenceByYear = groupFunctionByYear(conferences);

  return (
    <section id="conferences" className="relative">
      <h2 className="text-center text-light_brown mb-4">
        Upcoming Events
      </h2>
      <div className="container grid grid-cols-1 lg:gap-8">
        {conferenceByYear.map((conferenceYear) => (
          <div key={conferenceYear.year} className="mb-10">
            <h2 className="text-center text-[1.5rem] md:text-[1.7rem] mb-3 font-bold text-light_blue">
              {conferenceYear.year} Conferences
            </h2>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {conferenceYear.conferences.map((conferenceMonth) => (
                <ConferenceByMonth key={conferenceMonth.month} conferenceMonth={conferenceMonth} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a href="/conferences" className="btn btn_primary">
          More&nbsp;Conferences
        </a>
      </div>
      <DividerDots />
    </section>
  );
};

export default Conferences;
