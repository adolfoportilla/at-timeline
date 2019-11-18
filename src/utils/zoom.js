/**
 * Calculate number of extra days based on zoom level.
 * By changing the
 * @param {Number} days
 * @param {Number} zoom
 */
const extraDays = (days, zoom) => {
  // Zoom needs to be at least 1 to avoid returning a number that is less
  // than the days passed in.
  const minZoom = Math.max(1, zoom);

  // The greater the exponent (number in the right), the more extra days will be added.
  return days * Math.pow(minZoom, 1.5);
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
 * Note: currently zoom is not taking into consideration for event height.
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
