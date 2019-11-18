/**
 * Function that creates a nested Array with events grouped in a way that each
 * row contains events that each start after the previous one ends.
 * Note: The result might not be the best one since I only check for the last element on the
 *       next row to see if event can fit there, if we want to improve this function, check all the row
 *       to see if there is an opening where event would fit.
 *
 * @param {Array.<{id: Number, start: String, end: String, name: String}>} items - array with events
 */
const eventPreProcessing = items => {
  let result = [];
  items.forEach(el => {
    if (result.length === 0) {
      result.push([el]);
    } else {
      let flag = false;
      for (let i = 0; i < result.length; i++) {
        if (result[i][result[i].length - 1].end < el.start) {
          if (result[i].length === 0) {
            result[i] = [el];
          } else {
            result[i].push(el);
          }
          flag = true;
          break;
        }
      }
      if (!flag) {
        result.push([el]);
      }
    }
  });
  return result;
};

export default eventPreProcessing;
