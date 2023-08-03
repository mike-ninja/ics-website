const groupFunctionByYear = (conferences) => {
  const conferencesByYear = {};

  conferences.forEach((conference) => {
    const startYear = conference.date.start.split("-")[0]; // Extract the year from the start date

    if (!conferencesByYear[startYear]) {
      conferencesByYear[startYear] = [];
    }

    conferencesByYear[startYear].push(conference);
  });

  return conferencesByYear;
};

export default groupFunctionByYear;
