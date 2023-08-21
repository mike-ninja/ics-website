import dayjs from "dayjs";
import Link from "next/link";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const Conference = ({ conference }) => {
  return (
    <div className="flex py-3 pl-2 capitalize transition-all transform hover:scale-105">
      <div className="relative flex-none date_wrapper w-10 text-blood_red">
        <span className="text-[1.6rem] text-light_blue font-mono font-semibold tracking-tighter absolute transform rotate-[270deg] top-1/2 translate-y-[-50%] translate-x-[-0.8rem]">
          {dayjs(conference.date.start).format("DD")}
          &nbsp;
          {dayjs(conference.date.start).format("MMM")}
        </span>
      </div>
      <div className="flex-1 flex-col shadow-lg text-right rounded-lg py-2 pr-3 bg-light_beige">
        <Link href={`/conferences/${conference.slug}`}>
          <div className="text-light_brown font-semibold text-[1.2rem]">
            {conference.title}
          </div>
          <div className="text-metal_gray">{conference.hotel}</div>
          <div className="text-metal_gray mt-2">Read&nbsp;More</div>
        </Link>
      </div>
    </div>
  );
};

export default Conference;
