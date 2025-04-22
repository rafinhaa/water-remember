import { NavigationContainer } from "@react-navigation/native"

import { BottomTab } from "./bottom-tab.routes"

export * from "./bottom-tab.routes"

export const Routes = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
}
