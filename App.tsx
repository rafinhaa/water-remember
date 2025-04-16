import {
  FiraSans_400Regular,
  FiraSans_600SemiBold,
  FiraSans_700Bold,
} from "@expo-google-fonts/fira-sans"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"
import { useTranslation } from "react-i18next"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

import "@/locales"

export default function App() {
  const { t } = useTranslation()

  const [fontsLoaded] = useFonts({
    FiraSans_400Regular,
    FiraSans_700Bold,
    FiraSans_600SemiBold,
  })

  if (!fontsLoaded) return <ActivityIndicator />

  return (
    <View style={styles.container}>
      <Text>{t("startingMessage")}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
