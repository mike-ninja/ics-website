import conferences from "@/services/conferences";

const ConferenceCard = ({ conference }) => {
  return (
    <div>
      <span>{conference.title}</span>
      <span>{conference.slug}</span>
    </div>
  );
};

export default ConferenceCard;
