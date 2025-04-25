import { Box, Icon, IconProps, Typography } from "@/components"

export type InfoTotalProps = {
  title: string
  description: string
  icon: IconProps["name"]
}

const InfoTotal = ({ description, icon, title }: InfoTotalProps) => {
  return (
    <Box flex={1}>
      <Icon name={icon} />
      <Typography.Title size="lg">{title}</Typography.Title>
      <Typography.Body size="xs" color="$perl">
        {description}
      </Typography.Body>
    </Box>
  )
}

export default InfoTotal
