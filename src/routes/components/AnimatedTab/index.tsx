import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { getTokens, View } from "@tamagui/core"
import { useState } from "react"
import { LayoutChangeEvent, LayoutRectangle } from "react-native"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { useCustomTabBarHeight } from "@/hooks/useCustomTabBarHeight"
import { BottomTabNavigatorScreenParams } from "@/routes/bottom-tab.routes"

import AnimatedTabButton from "../AnimatedTabButton"

type RouteName = NonNullable<BottomTabNavigatorScreenParams["screen"]>

const AnimatedTab = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const theme = getTokens()
  const insets = useSafeAreaInsets()
  const { setCustomTabBarHeight, setDistanceToBottom } = useCustomTabBarHeight()
  const [dimensions, setDimensions] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })

  const containerSafeSpaceBottom = insets?.bottom || theme.size.$4.val

  const gap = theme.size.$2.val
  const px = theme.size.$2.val
  const py = theme.size.$1.val
  const gapContainer = (state.routes.length - 1) * gap + px * 2

  const buttonWidth = (dimensions.width - gapContainer) / state.routes.length

  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimensions(e.nativeEvent.layout)
  }

  const tabPositionX = useSharedValue(px)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    }
  })

  return (
    <View
      position="absolute"
      b={containerSafeSpaceBottom}
      justify="center"
      items="center"
      width="100%"
      flexDirection="row"
      onLayout={(e) => {
        setCustomTabBarHeight(e.nativeEvent.layout.height)
        setDistanceToBottom(
          e.nativeEvent.layout.height + containerSafeSpaceBottom,
        )
      }}
    >
      <View
        flexDirection="row"
        bg="$color.primary700"
        gap={gap}
        rounded="$full"
        px={px}
        py={py}
        onLayout={onTabBarLayout}
      >
        <Animated.View
          style={[
            animatedStyle,
            {
              position: "absolute",
              backgroundColor: theme.color.primary500.val,
              height: dimensions.height - py * 2,
              width: buttonWidth,
              borderRadius: theme.radius.$full.val,
              top: py,
            },
          ]}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

          const isFocused = state.index === index

          const onPress = () => {
            tabPositionX.value = withSpring(px + (buttonWidth + gap) * index, {
              duration: 1500,
            })

            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            })
          }

          return (
            <AnimatedTabButton
              key={route.name}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              label={label}
              route={route.name as RouteName}
            />
          )
        })}
      </View>
    </View>
  )
}

export default AnimatedTab
