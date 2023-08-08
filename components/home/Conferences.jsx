import conferencesService from "@/services/conferences";
import speakersService from "@/services/speakers";
import Conference from "./Conference";
import groupFunctionByYear from "@/utils/groupConferenceByYear";
import DividerDots from "../DividerDots";

const Conferences = async () => {
  const conferences = await conferencesService.getConferences();
  const speakers = await speakersService.getSpeakers();
  const conferenceByYear = groupFunctionByYear(conferences);

  return (
    <section className="bg-light_beige relative">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        {conferenceByYear.map((conferenceYear) => (
          <div className="mb-10">
            <h2 className="text-center text-3xl font-bold">
              {conferenceYear.year} Conferences
            </h2>
            {conferenceYear.conferences.map((conference) => (
              <Conference conference={conference} speakers={speakers} />
            ))}
          </div>
        ))}
      </div>
      <DividerDots />
    </section>
  );
};

export default Conferences;
