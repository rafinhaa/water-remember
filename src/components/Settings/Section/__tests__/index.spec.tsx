import { Text } from "react-native"

import { renderWithProviders, screen } from "@/utils/tests"

import Section, { SectionProps } from "../"

const DATA: SectionProps = {
  title: "section",
}

describe("Section", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(
      <Section {...DATA}>
        <Text>children</Text>
      </Section>,
    )

    expect(screen.getByText(DATA.title)).toBeTruthy()
    expect(screen.getByText("children")).toBeTruthy()
  })
})
