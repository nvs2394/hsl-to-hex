const toRgb = require('hsl-to-rgb-for-reals')

const { min, max, cycle } = require('./utils')

const hsl = (hue, saturation, luminosity) => {
  hue = cycle(hue)
  // enforce constraints
  saturation = min(max(saturation, 100), 0)
  luminosity = min(max(luminosity, 100), 0)
  // convert to 0 to 1 range used by hsl-to-rgb-for-reals
  saturation /= 100
  luminosity /= 100
  // let hsl-to-rgb-for-reals do the hard work
  const rgb = toRgb(hue, saturation, luminosity)
  // convert each value in the returned RGB array
  // to a 2 character hex value, join the array into
  // a string, prefixed with a hash
  return '#' + rgb
  .map((n) => {
    return (256 + n).toString(16).substr(-2)
  })
  .join('')
}

module.exports = hsl
