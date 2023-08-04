// import conferencesService from "@/services/conferences";
// import DividerDots = "@/public/"
import Conference from "./Conference";
import groupFunctionByYear from "@/utils/groupConferenceByYear";
import { conferences } from "@/services/mockConferences";

const Conferences = async () => {
  // const conferences = await conferencesService.getConferences();
  // console.log(
  //   "-----------------------------------------------------------------",
  // );
  // console.log(conferences);
  // console.log(
  //   "-----------------------------------------------------------------",
  // );
  const conferenceByYear = groupFunctionByYear(conferences);

  return (
    <section className="bg-light_beige">
      <div className="container mx-auto">
        {conferenceByYear.map((conferenceYear) => (
          <div>
            <h2 className="text-center text-3xl font-bold py-4">{conferenceYear.year} Conferences</h2>
            {conferenceYear.conferences.map((conference) => (
              <Conference conference={conference} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Conferences;
