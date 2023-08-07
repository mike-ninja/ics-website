"use client";

import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const Speakers = ({ speakers }) => {
  const [showSpeakers, setShowSpeakers] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setShowSpeakers((prev) => !prev)}>
          Speakers
        </button>
      </div>
      <div style={{ display: showSpeakers ? "" : "none" }}>
        {speakers.map((speaker) => <h3>{speaker.title}</h3>)}
      </div>
    </div>
  );
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
    <Link
      href={`/conferences/${conference.slug}`}
    >
      <div className="my-5 md:my-7 flex px-[7%] md:px-[10%] transition-all duration-300 hover:scale-105">
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
    </Link>
  );
};

export default Conference;
