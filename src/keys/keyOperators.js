const {filter} = require('rxjs/operators');

const isKey = (k) => ({name}) => name === k;
const isSequence = (s) => ({sequence}) => sequence === s;

/**
 * Filter operator for specific key events
 * @param k The key event of `{name,[sequence]}`
 * @returns {OperatorFunction<any, any> | MonoTypeOperatorFunction<any>}
 */
const key = (k) => filter(isKey(k));

/**
 * Filter operator for specific key sequence events
 * @param s The key event of `{[name],sequence}`
 * @returns {OperatorFunction<any, any> | MonoTypeOperatorFunction<any>}
 */
const sequence = (s) => filter(isSequence(s));

/**
 * Simple operator to filter Exit Key events, i.e. ESC and Ctrl-C
 *
 * @example
 *
 * 	key$.pipe(exitKey).subscribe(fn);
 *
 * @type {OperatorFunction<any, any> | MonoTypeOperatorFunction<any>}
 */
const exitKey = filter((e) => isKey('escape')(e) || isSequence('\u0003')(e));

/**
 * High Order Function that allows (transparent) executions for specific keys.
 * @example
 *
 * key$
 * .do(forKey('c')(printConfiguration))
 * .do(forKey('h')(() => printHelp(keyMap)))
 *
 * @param k A key event of type `{name,sequence}`
 * @returns {function(*, *=): function({name: *, sequence: *}): (boolean|*)} A function
 */
const forKey = k => (fn, ctx = null) => ({name, sequence}) => (name === k || sequence === k) && fn.call(ctx);

module.exports = {
	forKey,
	exitKey,
	key,
	sequence,
};
