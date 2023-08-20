import dayjs from "dayjs";

const groupFunctionByMonth = (conferences, conference) => {
  const localizedFormat = require("dayjs/plugin/localizedFormat");
  const month = dayjs(conference.date.start).format("MMMM");
  const foundMonth = conferences.find((conferenceMonth) =>
    conferenceMonth.month === month
  );
  dayjs.extend(localizedFormat);

  if (!foundMonth) {
    const newMonth = {
      month: month,

      conferences: [{ ...conference }],
    };
    return conferences.concat(newMonth);
  } else {
    const updatedMonth = {
      ...foundMonth,
      conferences: foundMonth.conferences.concat(conference),
    };
    return conferences.map((conferenceMonth) =>
      conferenceMonth.month === month ? updatedMonth : conferenceMonth
    );
  }
};

export default groupFunctionByMonth;
