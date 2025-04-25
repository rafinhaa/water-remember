import { View } from "@tamagui/core"
import { useRef } from "react"
import { TouchableOpacity, useWindowDimensions } from "react-native"
import Rive, { RiveRef } from "rive-react-native"

import { StyledSafeAreaView, Typography } from "@/components"
import { useCustomTabBarHeight } from "@/hooks/useCustomTabBarHeight"

export const Today = () => {
  const riveAnimationRef = useRef<RiveRef>(null)
  const { distanceToBottom } = useCustomTabBarHeight()
  const dimensions = useWindowDimensions()

  const availableHeight = dimensions.height - distanceToBottom

  const handleChangeAmount = () => {
    riveAnimationRef.current?.setInputState("default", "input", 30)
  }

  return (
    <StyledSafeAreaView edges={["top"]} flex={1} bg="transparent">
      <View height={availableHeight} bg={"$gray500"}>
        <TouchableOpacity onPress={handleChangeAmount}>
          <Typography.Body>Change amount</Typography.Body>
        </TouchableOpacity>
      </View>

      <Rive
        ref={riveAnimationRef}
        resourceName="water_cup"
        style={{
          flex: 1,
        }}
      />
    </StyledSafeAreaView>
  )
}
