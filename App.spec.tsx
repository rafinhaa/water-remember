import { render, screen } from "@/utils/tests"

import App from "./App"

describe("App", () => {
  it("should be to able to render correctly", () => {
    render(<App />)

    expect(
      screen.getByText("Open up App.tsx to start working on your app!"),
    ).toBeTruthy()
  })
})
