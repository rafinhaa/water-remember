import { View } from "@tamagui/core"
import { useRef } from "react"
import { TouchableOpacity } from "react-native"
import Rive, { RiveRef } from "rive-react-native"

import { Typography } from "@/components"

export const Today = () => {
  const riveAnimationRef = useRef<RiveRef>(null)

  const handleChangeAmount = () => {
    riveAnimationRef.current?.setInputState("default", "input", 30)
  }

  return (
    <View flex={1} bg="$sky500">
      <TouchableOpacity onPress={handleChangeAmount}>
        <Typography.Body>Change amount</Typography.Body>
      </TouchableOpacity>
      <Rive
        ref={riveAnimationRef}
        resourceName="water_cup"
        style={{
          flex: 1,
        }}
      />
    </View>
  )
}
