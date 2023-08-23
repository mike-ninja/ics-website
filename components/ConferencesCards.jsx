import ConferenceCard from "./ConferenceCard";
import conferencesService from "@/services/conferences";

const ConferencesCards = async () => {
  const conferences = await conferencesService.getConferences();
  return (
    <div className="grid grid-cols-2 gap-10">
      {conferences.map((conference) => (
        <ConferenceCard key={conference.id} conference={conference} />
      ))}
    </div>
  );
};

export default ConferencesCards;
