import Link from "next/link";
import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const ConferenceCard = ({ conference }) => {
  return (
    <Link
      href={`/conferences/${conference.slug}`}
      className="transition duration-300 hover:scale-105"
    >
      <div
        key={conference.title}
        className="flex flex-col rounded-xl shadow-lg overflow-hidden"
      >
        <div className="flex-shrink-0">
          <img
            className="h-64 w-full object-fit"
            src={conference.cover}
            alt={conference.title}
          />
        </div>
        <div className="flex-1 bg-gray-50 pt-2 pb-6 px-4 flex flex-col justify-between">
          <div className="flex-1">
            <span className="block mt-2">
              <h4 className="text-xs font-medium text-gray-600">
                {dayjs(conference.date.start).format("MMMM DD")} -{" "}
                {dayjs(conference.date.end).format("DD, YYYY")}
              </h4>
            </span>
            <span className="block mt-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {conference.title}
              </h3>
            </span>
            <span className="block mt-2 space-x-2 overflow-x-auto scrollbar-hide">
              {conference.tags.map((tag) => (
                <span
                  key={tag.id}
                  style={{
                    backgroundColor: tag.color !== "default"
                      ? tag.color
                      : "gray",
                  }}
                  className="px-2 py-1 text-xs rounded-lg text-white whitespace-nowrap"
                >
                  #{tag.name}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ConferenceCard;
