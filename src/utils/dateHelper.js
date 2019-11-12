const ONE_DAY = 1000 * 60 * 60 * 24;

const firstAndLast = items => {
  let first = items[0];
  let last = items[0];
  items.forEach(item => {
    if (first.start > item.start) {
      first = item;
    }
    if (last.end < item.end) {
      last = item;
    }
  });
  return [first.start, last.end];
};

const substractDates = (first, last) => {
  const beginning = first instanceof Date ? first : new Date(first);
  const end = last instanceof Date ? last : new Date(last);
  const diffTime = Math.abs(end - beginning);
  const totalDays = Math.ceil(diffTime / ONE_DAY);

  return totalDays;
};

const getMonthName = month => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][month];
};

const getNextDay = date => {
  date.setUTCDate(date.getUTCDate() + 1);
  return date;
};

const getNextFirstOfMonth = date => {
  date.setUTCMonth(date.getUTCMonth() + 1);
  date.setUTCDate(1);
  return date;
};

const getFirstOfMonth = date => {
  const result = new Date(date.getTime());
  result.setUTCDate(1);
  return result;
};

const getFirstOfYear = date => {
  const result = new Date(date.getTime());
  result.setUTCDate(1);
  // Months start at index 0
  result.setUTCMonth(0);
  return result;
};

const generateDays = (firstDay, totalDays) => {
  const firstDate = new Date(firstDay);
  let current = new Date(firstDay);
  const lastDay = new Date(firstDay);
  lastDay.setDate(lastDay.getDate() + totalDays);
  let result = [];
  while (current <= lastDay) {
    let daysFromFirst = 0;
    if (firstDate.getTime() !== current.getTime()) {
      // Create a new date with the day set to first of month.
      // This is so the title of the month is at the top of each first of the month.
      daysFromFirst = substractDates(firstDate, current) - 1;
    }
    result.push({ title: current.getUTCDate(), daysFromFirst });
    current = getNextDay(current);
  }
  return result;
};

const generateMonths = (firstDay, totalDays) => {
  const firstDate = new Date(firstDay);
  let current = new Date(firstDay);
  const lastDay = new Date(firstDay);
  lastDay.setDate(lastDay.getDate() + totalDays);

  let result = [];
  while (current <= lastDay) {
    let daysFromFirst = 0;
    if (firstDate.getTime() !== current.getTime()) {
      // Create a new date with the day set to first of month.
      // This is so the title of the month is at the top of each first of the month.
      const firstOfMonth = getFirstOfMonth(current);
      daysFromFirst = substractDates(firstDate, firstOfMonth) - 1;
    }
    result.push({ title: getMonthName(current.getUTCMonth()), daysFromFirst });
    current = getNextFirstOfMonth(current);
  }
  return result;
};

const generateYears = (firstDay, totalDays) => {
  const firstDate = new Date(firstDay);
  const lastDay = new Date(firstDay);
  lastDay.setDate(lastDay.getDate() + totalDays);

  let current = new Date(firstDay);
  let result = [];
  while (current <= lastDay) {
    let daysFromFirst = 0;
    if (firstDate.getTime() !== current.getTime()) {
      // Create a new date with the day set to first of month.
      // This is so the title of the month is at the top of each first of the month.
      const firstOfYear = getFirstOfYear(current);
      daysFromFirst = substractDates(firstDate, firstOfYear) - 1;
    }
    result.push({ title: current.getUTCFullYear(), daysFromFirst });
    current.setFullYear(current.getFullYear() + 1);
  }
  return result;
};

const findNextDate = ({ item, items, lastDay }) => {
  let result;
  if (items) {
    result = substractDates(item.end, items.start);
  } else {
    result = substractDates(item.end, lastDay);
  }

  return result;
};

const formatDate = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const addDays = (date, days) => {
  let result;
  if (!(date instanceof Date)) {
    result = new Date(date);
    result.setDate(result.getDate() + days);
    result = formatDate(result);
  } else {
    result = date;
    result.setDate(result.getDate() + days);
  }
  return result;
};

export default {
  firstAndLast,
  substractDates,
  getMonthName,
  generateDays,
  generateMonths,
  generateYears,
  getNextFirstOfMonth,
  findNextDate,
  formatDate,
  addDays,
  ONE_DAY
};
