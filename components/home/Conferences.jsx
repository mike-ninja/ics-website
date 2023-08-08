import conferencesService from "@/services/conferences";
import Conference from "./Conference";
import groupFunctionByYear from "@/utils/groupConferenceByYear";
import DividerDots from "../DividerDots";

const Conferences = async () => {
  const conferences = await conferencesService.getConferences();
  const conferenceByYear = groupFunctionByYear(conferences);

  return (
    <section id="conferences" className="relative">
      <h1 className="text-center text-[1.6rem] md:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-12 uppercase text-light_brown font-semibold">
        Upcoming&nbsp;ICS&nbsp;Conferences
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        {conferenceByYear.map((conferenceYear) => (
          <div className="mb-10">
            <h2 className="text-center text-[1.5rem] md:text-[1.7rem] mb-0 font-bold text-light_blue">
              {conferenceYear.year} Conferences
            </h2>
            {conferenceYear.conferences.map((conference) => (
              <Conference conference={conference} />
            ))}
          </div>
        ))}
      </div>
      <DividerDots />
    </section>
  );
};

export default Conferences;
