import { LabelPosition } from "@react-navigation/bottom-tabs/lib/typescript/src/types"
import { getTokens, styled } from "@tamagui/core"
import { useEffect } from "react"
import { Pressable, PressableProps } from "react-native"
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"

import { Icon, IconProps, Typography } from "@/components"
import { BottomTabNavigatorScreenParams } from "@/routes/bottom-tab.routes"

type RouteName = NonNullable<BottomTabNavigatorScreenParams["screen"]>

const iconMap: Record<RouteName, IconProps["name"]> = {
  Today: "Drop",
  History: "Scroll",
  Me: "User",
}

type PlatformPressableProps = PressableProps & {
  isFocused: boolean
  label:
    | string
    | ((props: {
        focused: boolean
        color: string
        position: LabelPosition
        children: string
      }) => React.ReactNode)
  route: RouteName
}

export const AnimatedText = styled(
  Animated.createAnimatedComponent(Typography.Title),
  {},
)

const AnimatedTabButton = ({ ...rest }: PlatformPressableProps) => {
  const theme = getTokens()

  const scale = useSharedValue(0)

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0])

    return {
      opacity,
    }
  })

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.5])
    const top = interpolate(scale.value, [0, 1], [0, 9])

    return {
      transform: [{ scale: scaleValue }],
      top,
    }
  })

  useEffect(() => {
    scale.value = withSpring(
      typeof rest?.isFocused === "boolean"
        ? rest?.isFocused
          ? 1
          : 0
        : rest?.isFocused,
      {
        duration: 200,
      },
    )
  }, [scale, rest?.isFocused])

  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: theme.size.$2.val,
        padding: theme.size.$2.val,
        width: 80,
        height: 70,
      }}
      {...rest}
    >
      <Animated.View style={animatedIconStyle}>
        <Icon name={iconMap[rest?.route as RouteName]} />
      </Animated.View>

      <AnimatedText size="sm" style={animatedTextStyle} numberOfLines={1}>
        {rest?.label}
      </AnimatedText>
    </Pressable>
  )
}

export default AnimatedTabButton
