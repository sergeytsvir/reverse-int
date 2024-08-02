module.exports = function reverse (n) {
    let arr = String(Math.abs(n));
  return +arr.split('').reverse().join('')
}
