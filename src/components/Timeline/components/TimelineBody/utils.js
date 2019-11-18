import dateHelper from "../../../../utils/dateHelper";

/**
 * Calculates event item properties
 *
 * @param {Object} param
 * @param {Object} param.item - event
 * @param {Number} param.col - column of event in rowItems
 * @param {Array} param.rowItems - contains events in same row.
 * @param {Number} param.singleDayWidth
 * @param {String} param.firstDay
 * @param {String} param.lastDay
 *
 */
const getItemProperties = ({
  item,
  col,
  rowItems,
  singleDayWidth,
  firstDay,
  lastDay
}) => {
  const itemWidth = getItemWidth(item, singleDayWidth);
  const marginFromBeginning = getMarginFromStart(
    firstDay,
    item,
    singleDayWidth
  );
  const maxWidth = getMaxWidth({
    item,
    rowItems,
    col,
    lastDay,
    singleDayWidth,
    itemWidth
  });

  return {
    itemWidth,
    marginFromBeginning,
    maxWidth
  };
};

/**
 * Calculates item width
 *
 * @param {Object} item
 * @param {Number} singleDayWidth
 */
const getItemWidth = (item, singleDayWidth) => {
  return dateHelper.substractDates(item.start, item.end) * singleDayWidth;
};

/**
 * Calculates marging of item to firstDay
 *
 * @param {String} firstDay
 * @param {Object} item
 * @param {Number} singleDayWidth
 */
const getMarginFromStart = (firstDay, item, singleDayWidth) => {
  return dateHelper.substractDates(firstDay, item.start) * singleDayWidth;
};

/**
 *
 * @param {Object} param
 * @param {Object} param.item
 * @param {Array} param.rowItems - Array of items at same row
 * @param {Number} param.col - position of item in rowItems.
 * @param {String} param.lastDay
 * @param {Number} param.singleDayWidth
 * @param {Number} param.itemWidth
 */
const getMaxWidth = ({
  item,
  rowItems,
  col,
  lastDay,
  singleDayWidth,
  itemWidth
}) => {
  return (
    dateHelper.findNextDate({
      item,
      items: rowItems[col + 1],
      lastDay
    }) *
      singleDayWidth +
    itemWidth
  );
};

// Constant that sets the margin top of each event.
// Adjusting this will change the layout of the timeline body.
const MARGIN_TOP = 15;
/**
 * Calculates timeline body height.
 *
 * @param {Array} events - contains all events
 * @param {Number} eventHeight
 */
const calculateBodyHeight = (events, eventHeight) => {
  return (eventHeight + MARGIN_TOP) * events.length;
};

/**
 * Calculates item's top margin.
 *
 * @param {Number} row
 * @param {Number} eventHeight
 */
const calculateItemTopMargin = (row, eventHeight) => {
  return row * (eventHeight + MARGIN_TOP);
};

export default {
  getItemProperties,
  getMarginFromStart,
  getMaxWidth,
  getItemWidth,
  calculateBodyHeight,
  calculateItemTopMargin
};
