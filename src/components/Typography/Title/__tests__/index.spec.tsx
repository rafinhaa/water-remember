import { renderWithProviders, screen } from "@/utils/tests"

import Title from "../"

describe("Title", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(<Title testID="title">Title</Title>)

    expect(screen.getByText("Title")).toBeTruthy()
  })

  describe("size", () => {
    it("sm", () => {
      renderWithProviders(
        <Title testID="title" size="sm">
          Title
        </Title>,
      )

      expect(screen.getByText("Title")).toBeTruthy()

      expect(screen.getByTestId("title")).toHaveStyle({
        fontFamily: "FiraSans_400Regular",
        color: expect.any(String),
        fontSize: 14,
        lineHeight: 21,
      })
    })

    it("md", () => {
      renderWithProviders(
        <Title testID="title" size="md">
          Title
        </Title>,
      )

      expect(screen.getByText("Title")).toBeTruthy()

      expect(screen.getByTestId("title")).toHaveStyle({
        fontFamily: "FiraSans_400Regular",
        color: expect.any(String),
        fontSize: 16,
        lineHeight: 24,
      })
    })

    it("lg", () => {
      renderWithProviders(
        <Title testID="title" size="lg">
          Title
        </Title>,
      )

      expect(screen.getByText("Title")).toBeTruthy()

      expect(screen.getByTestId("title")).toHaveStyle({
        fontFamily: "FiraSans_400Regular",
        color: expect.any(String),
        fontSize: 24,
        lineHeight: 36,
      })
    })
  })

  describe("weight", () => {
    it("regular", () => {
      renderWithProviders(
        <Title testID="title" weight="regular">
          Title
        </Title>,
      )

      expect(screen.getByText("Title")).toBeTruthy()

      expect(screen.getByTestId("title")).toHaveStyle({
        fontFamily: "FiraSans_400Regular",
        color: expect.any(String),
        fontSize: 16,
        lineHeight: 24,
      })
    })

    it("semiBold", () => {
      renderWithProviders(
        <Title testID="title" weight="semiBold">
          Title
        </Title>,
      )

      expect(screen.getByText("Title")).toBeTruthy()

      expect(screen.getByTestId("title")).toHaveStyle({
        fontFamily: "FiraSans_600SemiBold",
        color: expect.any(String),
        fontSize: 16,
        lineHeight: 24,
      })
    })

    it("bold", () => {
      renderWithProviders(
        <Title testID="title" weight="bold">
          Title
        </Title>,
      )

      expect(screen.getByText("Title")).toBeTruthy()

      expect(screen.getByTestId("title")).toHaveStyle({
        fontFamily: "FiraSans_700Bold",
        color: expect.any(String),
        fontSize: 16,
        lineHeight: 24,
      })
    })
  })
})
