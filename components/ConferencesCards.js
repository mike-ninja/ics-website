import conferencesService from "@/services/conferences";
import ConferenceCard from "./ConferenceCard";

const ConferencesCards = async () => {
  const conferences = await conferencesService.getConferences();

  return (
    <section className="py-6">
      <h1>Conferences</h1>
      <div className="h-full pt-4 pb-16 mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold text-4xl text-black">
            Our Conferences
          </h1>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          {conferences.map((conference) => (
            <ConferenceCard key={conference.id} conference={conference} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferencesCards;
