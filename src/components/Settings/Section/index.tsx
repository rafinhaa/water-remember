import { View } from "@tamagui/core"
import { PropsWithChildren } from "react"

import Box from "../../Box"
import Typography from "../../Typography"

export type SectionProps = PropsWithChildren & {
  title: string
}

const Section = ({ children, title }: SectionProps) => {
  return (
    <View gap="$2">
      <Typography.Title size="sm" weight="semiBold">
        {title}
      </Typography.Title>
      <Box gap="$4">{children}</Box>
    </View>
  )
}

export default Section
