import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { NavigatorScreenParams } from "@react-navigation/native"

import { History } from "@/screens/History"
import { Home } from "@/screens/Home"
import { My } from "@/screens/My"

type BottomTabParamList = {
  Home: undefined
  History: undefined
  My: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>()

type Props = BottomTabScreenProps<BottomTabParamList>

type BottomTabScreenNavigationProp = Props["navigation"]

type BottomTabScreenRouteProp<RouteName extends keyof BottomTabParamList> =
  BottomTabScreenProps<BottomTabParamList, RouteName>["route"]

type BottomTabNavigatorScreenParams = NavigatorScreenParams<BottomTabParamList>

export const BottomTab = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />

      <Screen name="History" component={History} />

      <Screen name="My" component={My} />
    </Navigator>
  )
}

export type {
  BottomTabParamList,
  BottomTabScreenNavigationProp,
  BottomTabScreenRouteProp,
  BottomTabNavigatorScreenParams,
}
