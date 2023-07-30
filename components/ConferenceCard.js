import conferences from "@/services/conferences";

const ConferenceCard = ({ conference }) => {
  return (
    <div>
      {conference.title}
    </div>
  );
};

export default ConferenceCard;
