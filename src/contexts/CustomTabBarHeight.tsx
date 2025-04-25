import { createContext, PropsWithChildren, useState } from "react"

export interface CustomTabBarHeightContextProps {
  customTabBarHeight: number
  distanceToBottom: number

  setCustomTabBarHeight: (height: number) => void
  setDistanceToBottom: (height: number) => void
}

export const CustomTabBarHeightContext =
  createContext<CustomTabBarHeightContextProps>(
    {} as CustomTabBarHeightContextProps,
  )

export const CustomTabBarHeightProvider = ({ children }: PropsWithChildren) => {
  const [customTabBarHeight, setCustomTabBarHeight] = useState(0)
  const [distanceToBottom, setDistanceToBottom] = useState(0)

  return (
    <CustomTabBarHeightContext.Provider
      value={{
        customTabBarHeight,
        distanceToBottom,
        setDistanceToBottom,
        setCustomTabBarHeight,
      }}
    >
      {children}
    </CustomTabBarHeightContext.Provider>
  )
}
