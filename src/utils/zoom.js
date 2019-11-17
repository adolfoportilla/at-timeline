/**
 * Calculate number of extra days based on zoom level.
 * @param {Number} days
 * @param {Number} zoom
 */
const extraDays = (days, zoom) => {
  return days * Math.pow(Math.max(1, zoom), 1.5);
};

/**
 * Calculate the day width based on zoom level.
 *
 * @param {Number} day
 * @param {Number} zoom
 */
const singleDayWidth = (day, zoom) => {
  return day / zoom;
};

/**
 * Calculate day height based on zoom level.
 *
 * @param {Number} height
 * @param {Number} zoom
 */
const eventHeight = (height, zoom) => {
  return height;
};

export default {
  extraDays,
  singleDayWidth,
  eventHeight
};
