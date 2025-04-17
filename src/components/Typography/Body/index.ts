import { styled, Text } from "@tamagui/core"

const Body = styled(Text, {
  fontFamily: "$firaSans",
  fontWeight: "$400",
  color: "$white",

  variants: {
    size: {
      xs: { fontSize: "$xs", lineHeight: "$xs" },
      md: { fontSize: "$md", lineHeight: "$md" },
    },
  } as const,

  defaultVariants: {
    size: "md",
  },
})

export default Body
