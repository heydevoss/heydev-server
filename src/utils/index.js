/**
 * Compare dates and get the oldest one.
 * It assumes that all strings on the array are valid.
 * 
 * @param {string[]} dates array of date strings
 * @return oldest date of the parameters. Format: YYYY-MM-DD
 * 
 * @example
 *  getOldestDate(['2019-05-01', '2019-05-20'])
 */
export const getOldestDate = (dates) => {
  const orderedDates = dates.sort(function(a,b){
    return Date.parse(a) > Date.parse(b);
  });

  const result = new Date(orderedDates[0]);
  return new Date(result.getFullYear(), result.getMonth(), result.getDate());
}

/**
 * @class A variant of Set, which the difference is on the equality condition of objects (prop: login)
 */
export class GeneralSet {
  constructor() {
      this.map = new Map();
      this[Symbol.iterator] = this.values;
  }

  add(item) {
    this.map.set(item.login, item);
  }

  values() {
      return this.map.values();
  }

  delete(item) {
      return this.map.delete(item.login);
  }
}