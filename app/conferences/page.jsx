import ConferenceCard from "@/components/ConferenceCard";
import conferencesService from "@/services/conferences";
import groupFunctionByYear from "@/utils/groupConferenceByYear";
import SecondaryHeader from "@/components/SecondaryHeader";
import FooterContact from "@/components/FooterContact";

const ConferenceByMonth = (conferenceMonth) => {
  const month = conferenceMonth.conferenceMonth;
  return (
    <div>
      <h2 className="text-center italic font-thin capitalize text-2xl md:text-3xl">
        {month.month}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {month.conferences.map((conference) => (
          <ConferenceCard key={conference.title} conference={conference} />
        ))}
      </div>
    </div>
  );
};

const page = async () => {
  const conferences = await conferencesService.getConferences();
  const conferenceByYear = groupFunctionByYear(conferences);

  return (
    <>
      <SecondaryHeader
        text="Check more information below"
        goto="#conferences"
      />
      <section id="conferences">
        <div className="container">
          <h2 className="text-center text-5xl text-dark_beige">
            UPCOMING EVENTS
          </h2>
          <h3 className="text-center mb-8 text-3xl italic font-thin text-dark_brown">
            Building better future together
          </h3>
          <div>
            {conferenceByYear.map((conferenceYear) => (
              <div key={conferenceYear.year} className="mb-10">
                <h2 className="text-center text-[1.5rem] md:text-[2rem] mb-0 font-bold text-light_blue">
                  {conferenceYear.year} Conferences
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  {conferenceYear.conferences.map((conferenceMonth) => (
                    <ConferenceByMonth key={conferenceMonth.month} conferenceMonth={conferenceMonth} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterContact />
    </>
  );
};

export default page;
