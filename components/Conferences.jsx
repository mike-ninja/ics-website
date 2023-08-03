import conferencesService from "@/services/conferences";
// import DividerDots = "@/public/"
import Conference from "./Conference";
import groupFunctionByYear from "@/utils/groupConferenceByYear";

const Conferences = async () => {
  const conferences = await conferencesService.getConferences();
  const conferenceSeparatedByYear = groupFunctionByYear(conferences);

  console.log(
    "-----------------------------------------------------------------",
  );
  console.log(conferences);
  console.log(
    "-----------------------------------------------------------------",
  );
  console.log(conferenceSeparatedByYear);
  console.log(
    "-----------------------------------------------------------------",
  );
  return (
    <section className="bg-light_beige">
      <div className="container mx-auto">
        <div>
          <h2>Upcoming Conferences</h2>
        </div>
        {conferences.map((conference) => (
          <Conference key={conference.id} conference={conference} />
        ))}
      </div>
    </section>
  );
};

export default Conferences;
