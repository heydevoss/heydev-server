/**
 * Compare dates and get the oldest one.
 * It assumes that all dates on the array are valid.
 * 
 * @param {Date[]} dates array of dates
 * @return oldest date of the parameters. Format: YYYY-MM-DD
 * 
 * @example
 *  getOldestDate([new Date('2019-05-01'), new Date('2019-05-20')])
 */
export const getOldestDate = (dates) => {
   const orderedDates = dates.sort();
    return a > b;
  });

  const result = orderedDates[0];
  return new Date(result.getFullYear(), result.getMonth(), result.getDate());
}
