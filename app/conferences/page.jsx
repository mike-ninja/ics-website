import ConferenceCard from "@/components/ConferenceCard";
import ConferencesHeader from "@/components/conferences/ConferencesHeader";
import conferencesService from "@/services/conferences";
import groupFunctionByYear from "@/utils/groupConferenceByYear";

const page = async () => {
  const conferences = await conferencesService.getConferences();
  const conferenceByYear = groupFunctionByYear(conferences);

  return (
    <>
      <ConferencesHeader />
      <section>
        <div className="container">
          <h2 className="text-center text-5xl text-dark_beige">
            UPCOMING EVENTS
          </h2>
          <h3 className="text-center mb-8 text-3xl italic font-thin text-dark_brown">
            Building better future together
          </h3>
          <div>
            {conferenceByYear.map((conferenceYear) => (
              <div className="mb-10">
                <h2 className="text-center text-[1.5rem] md:text-[1.7rem] mb-0 font-bold text-light_blue">
                  {conferenceYear.year} Conferences
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {conferenceYear.conferences.map((conference) => (
                    <ConferenceCard conference={conference} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
