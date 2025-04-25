import React from "react"

import { CustomTabBarHeightContext } from "@/contexts/CustomTabBarHeight"

export const useCustomTabBarHeight = () => {
  const customTabBarHeight = React.useContext(CustomTabBarHeightContext)

  if (!customTabBarHeight) {
    throw new Error(
      "useCustomTabBarHeight must be used within a CustomTabBarHeightProvider",
    )
  }

  return customTabBarHeight
}
