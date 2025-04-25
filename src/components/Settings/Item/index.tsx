import { View } from "@tamagui/core"
import React from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

import Typography from "@/components/Typography"

import Icon, { IconProps } from "../../Icon"

export type ItemProps = Omit<TouchableOpacityProps, "children"> & {
  icon: IconProps["name"]
  title: string
  description?: string
  rightAction?: React.ReactNode | React.JSX.Element
}

const Item = ({
  icon,
  title,
  description,
  rightAction,
  ...rest
}: ItemProps) => {
  return (
    <TouchableOpacity {...rest}>
      <View flexDirection="row" items="center" gap="$2">
        <Icon name={icon} />
        <View flex={1}>
          <Typography.Title size="sm" weight="semiBold">
            {title}
          </Typography.Title>
          {description && (
            <Typography.Body size="xs" color="$show">
              {description}
            </Typography.Body>
          )}
        </View>
        {rightAction ? rightAction : <Icon name="CaretRight" color="$sky300" />}
      </View>
    </TouchableOpacity>
  )
}

export default Item
