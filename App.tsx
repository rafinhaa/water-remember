import {
  FiraSans_400Regular,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans"
import { TamaguiProvider } from "@tamagui/core"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"
import { useTranslation } from "react-i18next"
import { ActivityIndicator, Text } from "react-native"

import "@/locales"

import config from "./tamagui.config"

export default function App() {
  const { t } = useTranslation()

  const [fontsLoaded] = useFonts({
    FiraSans_400Regular,
    FiraSans_700Bold,
    FiraSans_600SemiBold,
  })

  if (!fontsLoaded) return <ActivityIndicator />

  return (
    <TamaguiProvider config={config}>
      <StatusBar style="auto" />
      <Text>{t("startingMessage")}</Text>
    </TamaguiProvider>
  )
}
