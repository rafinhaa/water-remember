import { Text } from "react-native"

import { renderWithProviders, screen } from "@/utils/tests"

import RoundedButton from "../"

describe("RoundedButton", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(
      <RoundedButton testID="RoundedButton">
        <Text>RoundedButton</Text>
      </RoundedButton>,
    )

    expect(screen.getByText("RoundedButton")).toBeTruthy()

    expect(screen.getByTestId("RoundedButton")).toHaveStyle({
      backgroundColor: expect.any(String),
      paddingTop: 20,
      paddingRight: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      borderTopLeftRadius: 9999,
      borderTopRightRadius: 9999,
      borderBottomRightRadius: 9999,
      borderBottomLeftRadius: 9999,
      height: 65,
      width: 65,
      opacity: 1,
    })
  })
})
