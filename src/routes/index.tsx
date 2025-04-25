import { NavigationContainer } from "@react-navigation/native"

import { CustomTabBarHeightProvider } from "@/contexts/CustomTabBarHeight"

import { BottomTab } from "./bottom-tab.routes"

export * from "./bottom-tab.routes"

export const Routes = () => {
  return (
    <NavigationContainer>
      <CustomTabBarHeightProvider>
        <BottomTab />
      </CustomTabBarHeightProvider>
    </NavigationContainer>
  )
}
