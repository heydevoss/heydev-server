/**
 * Compare dates and get the oldest one.
 * It assumes that all dates on the array are valid.
 *
 * @param {Date[]} dates array of dates
 * @return oldest date of the parameters. Format: YYYY-MM-DD
 * @example
 *  getOldestDate([new Date('2019-05-01'), new Date('2019-05-20')])
 */
const getOldestDate = dates => {
  const orderedDates = dates.sort();
  const [result, ..._] = orderedDates;
  return new Date(result.getFullYear(), result.getMonth(), result.getDate());
};

export default getOldestDate;
