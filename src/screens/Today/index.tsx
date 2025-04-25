import { getTokens, View } from "@tamagui/core"
import { LinearGradient } from "expo-linear-gradient"
import { useRef } from "react"
import { TouchableOpacity, useWindowDimensions } from "react-native"
import { RiveRef } from "rive-react-native"

import { StyledSafeAreaView, Typography } from "@/components"
import { useCustomTabBarHeight } from "@/hooks/useCustomTabBarHeight"

export const Today = () => {
  const { distanceToBottom } = useCustomTabBarHeight()
  const dimensions = useWindowDimensions()
  const tokens = getTokens()

  const riveAnimationRef = useRef<RiveRef>(null)

  const availableHeight = dimensions.height - distanceToBottom

  const handleChangeAmount = () => {
    riveAnimationRef.current?.setInputState("default", "input", 30)
  }

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[tokens.color.primary700.val, tokens.color.sky500.val]}
    >
      <StyledSafeAreaView edges={["top"]} flex={1} bg="transparent">
        <View height={availableHeight} bg={"transparent"}>
          <TouchableOpacity onPress={handleChangeAmount}>
            <Typography.Body>Change amount</Typography.Body>
          </TouchableOpacity>
        </View>

        {/* <Rive
        ref={riveAnimationRef}
        resourceName="water_cup"
        style={{
          flex: 1,
        }}
      /> */}
      </StyledSafeAreaView>
    </LinearGradient>
  )
}
