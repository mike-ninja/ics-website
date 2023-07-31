import conferencesService from "@/services/conferences";
import ConferenceCard from "./ConferenceCard";

const ConferencesCards = async () => {
  const conferences = await conferencesService.getConferences();

  return (
    <section>
      <div>
        {conferences.map((conference) => (
          <ConferenceCard key={conference.id} conference={conference} />
        ))}
      </div>
    </section>
  );
};

export default ConferencesCards;
