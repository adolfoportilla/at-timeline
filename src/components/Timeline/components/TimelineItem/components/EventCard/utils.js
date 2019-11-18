const airtableColors = [
  "#ffdb80", // original"#FCB400", // mustard
  "#fb84a2", // original "#F82B60", // pink
  "#80dcff" // original "#18BFFF", //blue
];

/**
 * Return random color based on id
 *
 * @param {Number} id
 */
const getRandomColor = id => {
  return airtableColors[id % airtableColors.length];
};

export default {
  getRandomColor
};
