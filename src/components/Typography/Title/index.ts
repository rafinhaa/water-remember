import { styled, Text } from "@tamagui/core"

const Title = styled(Text, {
  fontFamily: "$firaSans",
  color: "$white",

  variants: {
    size: {
      sm: { fontSize: "$sm", lineHeight: "$sm" },
      md: { fontSize: "$md", lineHeight: "$md" },
      lg: { fontSize: "$lg", lineHeight: "$lg" },
    },
    weight: {
      regular: { fontWeight: 400 },
      semiBold: { fontWeight: 600 },
      bold: { fontWeight: 700 },
    },
  } as const,

  defaultVariants: {
    size: "md",
    weight: "regular",
  },
})

export default Title
