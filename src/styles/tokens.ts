export const size = {
  0: 0,
  "0.5": 2,
  1: 4,
  "1.5": 6,
  2: 8,
  "2.5": 10,
  3: 12,
  "3.5": 14,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  28: 112,
  32: 128,
  36: 144,
  40: 160,
  44: 176,
  48: 192,
  52: 208,
  56: 224,
  60: 240,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
} as const

const spaces = Object.entries(size).map(([k, v]) => [k, v] as const)

const spacesNegative = spaces
  .slice(1)
  .map(([k, v]) => [`-${k.slice(1)}`, -v] as const)

export const space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative),
}

export const radius = {
  ...size,
  full: 9999,
}

export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
}

export const tokens = {
  size,
  space,
  radius,
  zIndex,
} as const
