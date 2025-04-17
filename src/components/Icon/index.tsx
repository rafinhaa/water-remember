import { getTokens, styled } from "@tamagui/core"
import { IconProps as IconPropsBase } from "phosphor-react-native"
import Bell from "phosphor-react-native/src/icons/Bell"
import CalendarBlank from "phosphor-react-native/src/icons/CalendarBlank"
import CaretRight from "phosphor-react-native/src/icons/CaretRight"
import Check from "phosphor-react-native/src/icons/Check"
import Drop from "phosphor-react-native/src/icons/Drop"
import PencilSimple from "phosphor-react-native/src/icons/PencilSimple"
import Plus from "phosphor-react-native/src/icons/Plus"
import Scroll from "phosphor-react-native/src/icons/Scroll"
import Trash from "phosphor-react-native/src/icons/Trash"
import Trophy from "phosphor-react-native/src/icons/Trophy"
import User from "phosphor-react-native/src/icons/User"
import X from "phosphor-react-native/src/icons/X"
import React from "react"

const icons = {
  Bell,
  CalendarBlank,
  CaretRight,
  Check,
  Drop,
  PencilSimple,
  Plus,
  Scroll,
  Trash,
  Trophy,
  User,
  X,
}

const styledIcons = Object.fromEntries(
  Object.entries(icons).map(([name, IconComponent]) => {
    const IconWithRef = React.forwardRef<unknown, IconPropsBase>(
      (props, _ref) => <IconComponent {...props} />,
    )

    IconWithRef.displayName = `${name}WithRef`

    return [
      name,
      styled(
        IconWithRef,
        {
          color: "$white",
        },
        {
          accept: {
            color: "color",
          },
        },
      ),
    ]
  }),
)

export type IconName = keyof typeof icons
type IconComponentProps = Omit<
  React.ComponentProps<(typeof styledIcons)["Bell"]>,
  "size"
>

export type IconProps = {
  name: IconName
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number
} & IconComponentProps

const Icon = ({ name, size, ...props }: IconProps) => {
  const tokens = getTokens()
  const sizes = {
    xs: tokens.size[4],
    sm: tokens.size[5],
    md: tokens.size[6],
    lg: tokens.size[7],
    xl: tokens.size[8],
  }

  const sizeMap = typeof size === "number" ? size : sizes[size || "md"].val

  const IconComponent = styledIcons[name]

  return <IconComponent testID={`icon-${name}`} size={sizeMap} {...props} />
}

Icon.displayName = "Icon"

export default Icon
