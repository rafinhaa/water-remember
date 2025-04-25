import { getTokens, View } from "@tamagui/core"
import { LinearGradient } from "expo-linear-gradient"
import { useRef } from "react"
import { useWindowDimensions } from "react-native"
import Rive, { RiveRef } from "rive-react-native"

import { RNStyled, StyledSafeAreaView, Typography } from "@/components"
import { useCustomTabBarHeight } from "@/hooks/useCustomTabBarHeight"

import { InfoAmountDrunk } from "./components"

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
        <View height={availableHeight} items="center" pb="$6" gap="$4">
          <InfoAmountDrunk amountDrunk={100} totalAmount={50} />

          <Rive
            ref={riveAnimationRef}
            resourceName="water_cup"
            style={{
              flex: 1,
              width: "100%",
            }}
          />
          <RNStyled.TouchableOpacity
            bg="$show"
            px="$3"
            py="$2"
            rounded="$full"
            minW="30%"
            items="center"
            onPress={handleChangeAmount}
          >
            <Typography.Title color="$black">BEBER</Typography.Title>
          </RNStyled.TouchableOpacity>
        </View>
      </StyledSafeAreaView>
    </LinearGradient>
  )
}
