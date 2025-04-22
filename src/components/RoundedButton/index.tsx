import { styled } from "@tamagui/core"
import { TouchableOpacity } from "react-native"

const RoundedButton = styled(TouchableOpacity, {
  bg: "$primary",
  p: "$5",
  rounded: "$full",
  height: 65,
  width: 65,
})

export default RoundedButton
