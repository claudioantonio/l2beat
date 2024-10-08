export function calculateTicks(ticks: number, values: number[]) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  if (min === max) {
    if (min === 0) {
      return [0, 0, 0, 0, 0]
    }
    return [0, min / 2, min, min * 1.5, min * 2]
  }

  const baseRange = max - min
  const newMin = Math.max(0, min - baseRange * 0.05)
  const newMax = max + baseRange * 0.05
  const range = newMax - newMin

  const precision = Math.floor(Math.log10(range)) - 2
  const equalizer = 10 ** precision
  const tick0 = Math.floor(newMin / equalizer) * equalizer

  const tick = Math.ceil(range / (ticks - 1) / equalizer) * equalizer

  return new Array(ticks).fill(0).map((_, i) => round(tick0 + tick * i, 6))
}

function round(value: number, precision = 6) {
  return parseFloat(value.toPrecision(precision))
}
