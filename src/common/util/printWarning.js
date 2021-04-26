import { isProduction } from './isProduction';

/**
 * Prints a warning message when in dev mode
 *
 * @param {string} msg: the message to print
 * @param {any[]} args: additional arguments to include in the warning message
 */
export function printWarning(msg, ...args) {
  if (!isProduction()) {
    console.warn(msg, ...args);
  }
}
