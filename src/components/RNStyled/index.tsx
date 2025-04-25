import { styled } from "@tamagui/core"
import {
  ScrollView as RNScrollView,
  TouchableOpacity as RNTouchableOpacity,
} from "react-native"

const TouchableOpacity = styled(RNTouchableOpacity)

const ScrollView = styled(
  RNScrollView,
  {},
  {
    accept: {
      contentContainerStyle: "style",
    },
  },
)

export default { TouchableOpacity, ScrollView }
