import { Text, View } from "@tamagui/core"
import { useWindowDimensions } from "react-native"

import { Typography } from "@/components"

export type InfoAmountDrunkProps = {
  amountDrunk: number
  totalAmount: number
}

const InfoAmountDrunk = ({
  amountDrunk,
  totalAmount,
}: InfoAmountDrunkProps) => {
  const { width } = useWindowDimensions()
  const dynamicTitle = Math.max(32, width * 0.2) // mínimo 32, ou 15% da largura
  const dynamicMeasure = Math.max(20, width * 0.1) // mínimo 32, ou 15% da largura

  return (
    <View items="center">
      <View flexDirection="row" items="baseline">
        <Text
          fontSize={dynamicTitle}
          color="$white"
          fontFamily="$firaSans"
          fontWeight="$600"
        >
          {amountDrunk}
        </Text>
        <Text
          fontSize={dynamicMeasure}
          color="$white"
          fontFamily="$firaSans"
          fontWeight="$400"
        >
          ml
        </Text>
      </View>
      <Typography.Title size="lg">{totalAmount}% finalizado</Typography.Title>
    </View>
  )
}

export default InfoAmountDrunk
