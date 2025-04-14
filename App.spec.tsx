import { render, resources, screen } from "@/utils/tests"

import App from "./App"

describe("App", () => {
  it("should be to able to render correctly", () => {
    render(<App />)

    expect(screen.getByText(resources.startingMessage)).toBeTruthy()
  })
})
