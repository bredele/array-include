
/**
 * Return true if string or array index of array.
 *
 * @param {Array} arr
 * @param {String|Array} arg
 * @return {Boolean}
 * @api public
 */

module.exports = (arr, arg) => {
  return typeof arg === 'string'
    ? arr.indexOf(arg) > -1
    : contains(arg, arr)
}



/**
 * Return true if all items of arr1 are index of arr2.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 * @api private
 */

function contains (arr1, arr2) {
  let result = true
  let l = arr1.length
  while (l--) {
    result = result && arr2.indexOf(arr1[l]) > -1
  }
  return result
}
