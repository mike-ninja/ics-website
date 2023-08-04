import conferencesService from "@/services/conferences";
import ConferenceCard from "./ConferenceCard";
import speakers from "@/services/speakers";

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
