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
