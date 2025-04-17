import { renderWithProviders, screen } from "@/utils/tests"

import Icon from "../"

describe("Icon", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(<Icon name="Bell" />)

    expect(screen.getByTestId("icon-Bell")).toBeTruthy()

    expect(screen.getByTestId("icon-Bell")).toHaveProp(
      "color",
      expect.any(String),
    )

    expect(screen.getByTestId("icon-Bell")).toHaveProp(
      "size",
      expect.any(Number),
    )
  })

  describe("size", () => {
    it("xs", () => {
      renderWithProviders(<Icon name="Bell" size="xs" />)

      expect(screen.getByTestId("icon-Bell")).toHaveProp("size", 16)
    })

    it("sm", () => {
      renderWithProviders(<Icon name="Bell" size="sm" />)

      expect(screen.getByTestId("icon-Bell")).toHaveProp("size", 20)
    })

    it("md", () => {
      renderWithProviders(<Icon name="Bell" size="md" />)

      expect(screen.getByTestId("icon-Bell")).toHaveProp("size", 24)
    })

    it("lg", () => {
      renderWithProviders(<Icon name="Bell" size="lg" />)

      expect(screen.getByTestId("icon-Bell")).toHaveProp("size", 28)
    })

    it("xl", () => {
      renderWithProviders(<Icon name="Bell" size="xl" />)

      expect(screen.getByTestId("icon-Bell")).toHaveProp("size", 32)
    })
  })
})
