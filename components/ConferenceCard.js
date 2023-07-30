import conferences from "@/services/conferences";

const ConferenceCard = ({ conference }) => {
  return (
    <div>
      <h2>{conference.title}</h2>
      <p>{conference.slug}</p>
    </div>
  );
};

export default ConferenceCard;
