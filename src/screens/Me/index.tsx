import { getTokens, View } from "@tamagui/core"
import { useTranslation } from "react-i18next"
import { Switch } from "react-native"

import {
  Icon,
  RNStyled,
  Settings,
  StyledSafeAreaView,
  Typography,
} from "@/components"
import { useCustomTabBarHeight } from "@/hooks/useCustomTabBarHeight"

import { InfoTotal } from "./components"

export const Me = () => {
  const { t } = useTranslation()
  const { distanceToBottom } = useCustomTabBarHeight()
  const tokens = getTokens()

  return (
    <StyledSafeAreaView>
      <RNStyled.ScrollView
        contentContainerStyle={{
          grow: 1,
          px: "$4",
          gap: "$8",
          pb: distanceToBottom + tokens.size.$4.val,
        }}
      >
        <View flexDirection="row" gap="$4">
          <InfoTotal
            icon="Drop"
            title="0 ml"
            description={t("me.totalIngested")}
          />

          <InfoTotal
            icon="Trophy"
            title="0 dias"
            description={t("me.totalRealized")}
          />
        </View>

        <Settings.Section title={t("me.reminderSetup")}>
          <Settings.Item
            icon="Bell"
            title={t("me.reminders")}
            description={t("me.enableNotifications")}
          />
          <Settings.Item
            icon="Trophy"
            title={t("me.disableNotifications")}
            rightAction={<Switch />}
          />
        </Settings.Section>

        <Settings.Section title={t("me.toDrink")}>
          <Settings.Item
            icon="Drop"
            title={t("me.dailyGoal")}
            rightAction={
              <View flexDirection="row" items="center" gap="$2">
                <Typography.Title size="sm">0 ml</Typography.Title>
                <Icon name="CaretRight" color="$sky300" />
              </View>
            }
          />
          <Settings.Item icon="User" title={t("me.genderAndWeight")} />
        </Settings.Section>
      </RNStyled.ScrollView>
    </StyledSafeAreaView>
  )
}
