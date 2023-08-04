import conferencesService from "@/services/conferences";
// import DividerDots = "@/public/"
import Conference from "./Conference";
import groupFunctionByYear from "@/utils/groupConferenceByYear";

const Conferences = async () => {
  const conferences = await conferencesService.getConferences();
  const conferenceByYear = groupFunctionByYear(conferences);

  console.log(
    "-----------------------------------------------------------------",
  );
  console.log(conferenceByYear[0].conferences)
  console.log(
    "-----------------------------------------------------------------",
  );
  return (
    <section className="bg-light_beige">
      <div className="container mx-auto">
        {conferenceByYear.map(conferenceYear => 
          <div>
            <h2>{conferenceYear.year} Conferences</h2>
            {conferenceYear.conferences.map(conference => 
              <Conference conference={conference}/>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Conferences;
