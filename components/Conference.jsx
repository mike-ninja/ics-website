import Link from "next/link";
import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const Conference = ({ conference }) => {
  return (
    <Link
      href={`/conferences/${conference.slug}`}
      className="transition duration-300 hover:scale-105"
    >
      <div className="bg-transparent_brown mb-3">
        <h2>{conference.title}</h2>
        <h4 className="text-xs font-medium text-gray-600">
          {dayjs(conference.date.start).format("MMMM DD")} -{" "}
          {dayjs(conference.date.end).format("DD, YYYY")}
        </h4>
      </div>
    </Link>
  );
};

export default Conference;
