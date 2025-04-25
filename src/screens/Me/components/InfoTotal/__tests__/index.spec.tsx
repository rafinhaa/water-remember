import { renderWithProviders, screen } from "@/utils/tests"

import InfoTotal, { InfoTotalProps } from "../"

const DATA: InfoTotalProps = {
  icon: "Bell",
  title: "title",
  description: "description",
}

describe("InfoTotal", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(<InfoTotal {...DATA} />)

    expect(screen.getByTestId("icon-Bell")).toBeTruthy()
    expect(screen.getByText(DATA.title)).toBeTruthy()
    expect(screen.getByText(DATA.description)).toBeTruthy()
  })
})
