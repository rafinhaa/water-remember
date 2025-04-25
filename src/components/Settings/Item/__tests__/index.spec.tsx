import { Text } from "react-native"

import { renderWithProviders, screen } from "@/utils/tests"

import Item, { ItemProps } from "../"

const DATA: ItemProps = {
  icon: "Bell",
  title: "title",
  description: "description",
}

describe("Item", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(<Item {...DATA} />)

    expect(screen.getByTestId("icon-Bell")).toBeTruthy()
    expect(screen.getByText(DATA.title)).toBeTruthy()
    expect(screen.getByText(DATA.description!)).toBeTruthy()
    expect(screen.getByTestId("icon-CaretRight")).toBeTruthy()
  })

  it("should be able to render correctly without description", () => {
    const newData = { ...DATA, description: undefined }

    renderWithProviders(<Item {...newData} />)

    expect(screen.getByTestId("icon-Bell")).toBeTruthy()
    expect(screen.getByText(DATA.title)).toBeTruthy()
    expect(screen.queryByText(DATA.description!)).not.toBeTruthy()
    expect(screen.getByTestId("icon-CaretRight")).toBeTruthy()
  })

  describe("rightAction", () => {
    it("should be able to render rightAction", () => {
      renderWithProviders(
        <Item {...DATA} rightAction={<Text>rightAction</Text>} />,
      )

      expect(screen.getByTestId("icon-Bell")).toBeTruthy()
      expect(screen.getByText(DATA.title)).toBeTruthy()
      expect(screen.getByText(DATA.description!)).toBeTruthy()

      expect(screen.getByText("rightAction")).toBeTruthy()

      expect(screen.queryByTestId("icon-CaretRight")).not.toBeTruthy()
    })
  })
})
