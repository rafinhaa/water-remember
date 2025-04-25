import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { NavigatorScreenParams } from "@react-navigation/native"
import { useTranslation } from "react-i18next"

import { History } from "@/screens/History"
import { Me } from "@/screens/Me"
import { Today } from "@/screens/Today"

import { AnimatedTab } from "./components"

type BottomTabParamList = {
  Today: undefined
  History: undefined
  Me: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>()

type Props = BottomTabScreenProps<BottomTabParamList>

type BottomTabScreenNavigationProp = Props["navigation"]

type BottomTabScreenRouteProp<RouteName extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, RouteName>["route"]

type BottomTabNavigatorScreenParams = NavigatorScreenParams<BottomTabParamList>

export const BottomTab = () => {
  const { t } = useTranslation()

  return (
    <Navigator tabBar={(props) => <AnimatedTab {...props} />}>
      <Screen
        name="Today"
        component={Today}
        options={{
          title: t("common.today"),
          headerShown: false,
        }}
      />

      <Screen
        name="History"
        component={History}
        options={{ title: t("common.history") }}
      />

      <Screen name="Me" component={Me} options={{ title: t("common.me") }} />
    </Navigator>
  )
}

export type {
  BottomTabParamList,
  BottomTabScreenNavigationProp,
  BottomTabScreenRouteProp,
  BottomTabNavigatorScreenParams,
}
