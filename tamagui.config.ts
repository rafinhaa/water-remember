import { defaultConfig } from "@tamagui/config/v4"
import { createFont, createTamagui, createTokens } from "@tamagui/core"

import { tokens as sizeTokens } from "@/styles/tokens"

const tokens = createTokens({
  color: {
    primary500: "#1B56FD",
    primary700: "#011B8B",

    gray100: "#F6F6F6",
    gray200: "#E3E3E3",
    gray300: "#B1B2B5",
    gray400: "#7B7D85",
    gray500: "#64666A",
    gray600: "#303236",
    gray700: "#1F1F1F",

    white: "#FFFFFF",
    black: "#000000",

    red300: "#f18e83",
    red500: "#E65244",

    green300: "#a3e9c5",
    green500: "#49D793",

    orange300: "#febb67",
    orange500: "#FC8802",

    purple300: "#d1c9e4",
    purple500: "#A599C6",

    sky300: "#a0d7ef",
    sky500: "#5998E2",

    show: "#FFF8F8",
    perl: "#E9DfC3",
  },

  ...sizeTokens,
})

const themes = {
  dark: {
    background: tokens.color.primary700.val,
    color: tokens.color.white.val,
    primary: tokens.color.primary500.val,
    danger: tokens.color.red500.val,
    success: tokens.color.green500.val,
    warning: tokens.color.orange500.val,
    info: tokens.color.sky500.val,
    complete: tokens.color.purple500.val,
  },
}

const firaSansFont = createFont({
  weight: {
    400: 400,
    600: 600,
    700: 700,
  },
  lineHeight: {
    xs: 18, // 12 * 1.5
    sm: 21, // 14 * 1.5
    md: 24, // 16 * 1.5
    lg: 36, // 24 * 1.5
  },
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 24,
  },
  face: {
    400: { normal: "FiraSans_400Regular" },
    600: { normal: "FiraSans_600SemiBold" },
    700: { normal: "FiraSans_700Bold" },
  },
})

const config = createTamagui({
  shorthands: defaultConfig.shorthands,
  settings: defaultConfig.settings,
  animations: defaultConfig.animations,
  media: defaultConfig.media,
  tokens,
  themes,
  fonts: {
    firaSans: firaSansFont,
  },
})

type Conf = typeof config

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
