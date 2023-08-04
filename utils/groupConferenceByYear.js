const groupFunctionByYear = (conferences) => {
  let conferencesByYear = [];

  conferences.forEach((conference) => {
    const startYear = conference.date.start.split("-")[0]; // Extract the year from the start date
    const foundYear = conferencesByYear.find((conferenceYear) =>
      conferenceYear.year === startYear
    );

    if (!foundYear) {
      const newYear = {
        year: startYear,
        conferences: [{ ...conference }],
      };
      conferencesByYear = conferencesByYear.concat(newYear);
    } else {
      const updatedYear = {
        ...foundYear,
        conferences: foundYear.conferences.concat(conference),
      };
      conferencesByYear = conferencesByYear.map((conferenceYear) =>
        conferenceYear.year === startYear ? updatedYear : conferenceYear
      );
    }
  });

  return conferencesByYear.sort((a, b) => a.year - b.year);
};

export default groupFunctionByYear;
