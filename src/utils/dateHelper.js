const one_day = 1000 * 60 * 60 * 24;

const findRange = items => {
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

const findRangeDays = (first, last) => {
  const beginning = new Date(first);
  const end = new Date(last);
  const totalDays = Math.round(end.getTime() - beginning.getTime()) / one_day;

  return Math.abs(totalDays);
};

export default { findRange, findRangeDays };
