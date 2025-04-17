import { Text } from "react-native"

import { renderWithProviders, screen } from "@/utils/tests"

import Box from "../"

describe("Box", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(<Box testID="Box" />)

    expect(screen.getByTestId("Box")).toBeTruthy()

    expect(screen.getByTestId("Box")).toHaveStyle({
      paddingRight: 16,
      paddingLeft: 16,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: expect.any(String),
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
    })
  })

  it("should be able to render correctly with children", () => {
    renderWithProviders(
      <Box testID="Box">
        <Text>Box</Text>
      </Box>,
    )

    expect(screen.getByTestId("Box")).toBeTruthy()
    expect(screen.getByText("Box")).toBeTruthy()
  })
})
