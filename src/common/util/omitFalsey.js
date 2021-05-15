import _ from 'lodash';

/** ============================ Method ==================================== */;
/**
 * Takes an object or array of values and returns all of the key-value pairs in that object
 * that aren't falsey
 *
 * @param {object} obj: the object to filter falsey values from
 */

export function omitFalsey(arrayOrObject) {
  return Array.isArray(arrayOrObject)
    ? arrayOrObject.filter(isTruthy)
    : _.pickBy(arrayOrObject, isTruthy);
}

/** ============================ Helpers  ============================= */
export function isTruthy(x) {
    return Boolean(x);
}
