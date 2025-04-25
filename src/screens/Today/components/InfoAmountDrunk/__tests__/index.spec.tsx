import { renderWithProviders, screen } from "@/utils/tests"

import InfoAmountDrunk from "../"

describe("InfoAmountDrunk", () => {
  it("should be able to render correctly", () => {
    renderWithProviders(<InfoAmountDrunk amountDrunk={100} totalAmount={50} />)

    expect(screen.getByText("100", { exact: false })).toBeTruthy()
    expect(screen.getByText("50", { exact: false })).toBeTruthy()
  })
})
