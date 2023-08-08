"use client";

import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";
import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

const Speakers = ({ speakers }) => {
  const [showSpeakers, setShowSpeakers] = useState(false);
  return (
    <div className="text-dark_brown">
      <div
        onClick={() => setShowSpeakers((prev) => !prev)}
        className="inline-flex items-center"
      >
        <div className="mb-1 mr-1">
          <BiSolidRightArrow
            className="overflow-hidden transition-all ease-in duration-400"
            style={{
              height: showSpeakers ? "0" : "auto",
              opacity: showSpeakers ? "0" : "1",
            }}
          />
          <BiSolidDownArrow
            className="overflow-hidden transition-all ease-in duration-400"
            style={{
              height: showSpeakers ? "auto" : "0",
              opacity: showSpeakers ? "1" : "0",
            }}
          />
        </div>
        <div className="align-middle">Speakers</div>
      </div>
      <div
        className="overflow-hidden transition-all ease-linear duration-400"
        style={{
          height: showSpeakers ? "auto" : "0",
          opacity: showSpeakers ? "1" : "0",
        }}
      >
        {speakers.map((speaker) => (
          <div className="capitalize">{speaker.title}</div>
        ))}
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
    <div className="flex py-3 uppercase">
      <div className="relative flex-none date_wrapper w-10 uppercase text-blood_red">
        <span className="text-[1.7rem] font-mono font-semibold tracking-tighter absolute transform rotate-[270deg] top-1/2 translate-y-[-50%] translate-x-[-0.8rem]">
          {dayjs(conference.date.start).format("DD")}
          &nbsp;
          {dayjs(conference.date.start).format("MMM")}
        </span>
      </div>
      <div className="flex-1 flex-col text-right border-dark_brown border-2 rounded-lg py-2 pr-3">
        <div className="text-light_brown font-semibold text-[1.2rem]">
          {conference.title}
        </div>
        <div className="text-dark_brown">{conference.hotel}</div>
        <Speakers speakers={conferenceSpeakers} />
      </div>
    </div>
  );
};

export default Conference;
