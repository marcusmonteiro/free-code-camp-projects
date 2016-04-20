export function randomInt (min, max) {
  if (!(min) || !(max)) {
    throw new TypeError('Both min and max arguments should be filled')
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError('Both min and max arguments should be integers')
  }
  return Math.floor(Math.random() * (max - min)) + min
}
