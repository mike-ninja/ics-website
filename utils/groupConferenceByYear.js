import groupFunctionByMonth from "./groupConferenceByMonth";

const groupFunctionByYear = (conferences) => {
  let conferencesByYear = [];

  conferences.forEach((conference) => {
    const startYear = conference.date.start.split("-")[0]; // Extract the year from the start date
    const foundYear = conferencesByYear.find((conferenceYear) =>
      conferenceYear.year === startYear
    );

    if (!foundYear) {
      groupFunctionByMonth([], conference);
      const newYear = {
        year: startYear,
        conferences: groupFunctionByMonth([], conference),
      };
      conferencesByYear = conferencesByYear.concat(newYear);
    } else {
      const updatedYear = {
        ...foundYear,
        conferences: groupFunctionByMonth(foundYear.conferences, conference),
      };
      conferencesByYear = conferencesByYear.map((conferenceYear) =>
        conferenceYear.year === startYear ? updatedYear : conferenceYear
      );
    }
  });

  return conferencesByYear.sort((a, b) => a.year - b.year);
};

export default groupFunctionByYear;
