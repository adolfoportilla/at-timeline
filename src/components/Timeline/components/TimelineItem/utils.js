import dateHelper from "../../../../utils/dateHelper";

/**
 * Generates tooltip info to be displayed.
 *
 * @param {String} name - event name
 * @param {String} start - event start date
 * @param {String} end - event end date
 */
const getTooltipInfo = (name, start, end) => {
  const startDay = start.substr(-2);
  const endDay = end.substr(-2);
  const startMonth = parseInt(start.slice(-5, -3)) - 1;
  const startMonthName = dateHelper.getMonthName(startMonth).substr(0, 3);
  const endMonth = parseInt(end.slice(-5, -3)) - 1;
  const endMonthName = dateHelper.getMonthName(endMonth).substr(0, 3);
  return `${name}
    <br>${startMonthName} ${startDay} - ${endMonthName} ${endDay}
  `;
};

export default {
  getTooltipInfo
};
