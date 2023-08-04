import Link from "next/link";
import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

// <Link
//   href={`/conferences/${conference.slug}`}
//   className="transition duration-300 hover:scale-105"
// >
//   <div className="bg-transparent_brown mb-3">
//     <h2>{conference.title}</h2>
//     <h4 className="text-xs font-medium text-gray-600">
//       {dayjs(conference.date.start).format("MMMM DD")} -{" "}
//       {dayjs(conference.date.end).format("DD, YYYY")}
//     </h4>
//   </div>
// </Link>
const Speakers = ({ speakers }) => {
  return (
   <div>
      {speakers.map(speaker =>
        <h3>{speaker.title}</h3>
      )}
    </div>
  )
};

const Conference = ({ conference, speakers }) => {
  const conferenceSpeakers = speakers.filter((speaker) => {
    if (
      conference.speakers.some(
        (conferenceSpeakerTags) => conferenceSpeakerTags.name === speaker.title,
      )
    ) {
      return speaker;
    }
  });

  return (
    <div className="my-5 md:my-7 flex px-[7%] md:px-[10%]">
      <div className="date_wrapper">
        <h2 className="date_flipped">
          {dayjs(conference.date.start).format("DDMMM")}
          {" "}
        </h2>
      </div>
      <div className="w-full rounded-lg border-2 border-dark_brown text-right pr-2 pt-3">
        <h3>{conference.title}</h3>
        <h4>{conference.hotel}</h4>
        <Speakers speakers={conferenceSpeakers} />
      </div>
    </div>
  );
};

export default Conference;
