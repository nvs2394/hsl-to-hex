const max = (val, n) => {
  return val > n ? n : val
}

const min = (val, n) => {
  return val < n ? n : val
}

const cycle = (val) => {
  val = max(val, 1e7)
  val = min(val, -1e7)
  while (val < 0) { val += 360 }
  while (val > 359) { val -= 360 }
  return val
}

module.exports = {
  max,
  min,
  cycle
}
