import { renderWithProviders, screen } from "@/utils/tests"

import Body from "../"

describe("Body", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(<Body testID="body">Body</Body>)

    expect(screen.getByText("Body")).toBeTruthy()
  })

  describe("size", () => {
    it("xs", () => {
      renderWithProviders(
        <Body testID="body" size="xs">
          Body
        </Body>,
      )

      expect(screen.getByText("Body")).toBeTruthy()

      expect(screen.getByTestId("body")).toHaveStyle({
        fontFamily: "FiraSans_400Regular",
        color: expect.any(String),
        fontSize: 12,
        lineHeight: 18,
      })
    })

    it("md", () => {
      renderWithProviders(
        <Body testID="body" size="md">
          Body
        </Body>,
      )

      expect(screen.getByText("Body")).toBeTruthy()

      expect(screen.getByTestId("body")).toHaveStyle({
        fontFamily: "FiraSans_400Regular",
        color: expect.any(String),
        fontSize: 16,
        lineHeight: 24,
      })
    })
  })
})
