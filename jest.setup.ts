import { resources as mockResources } from "./src/utils/tests/index"

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (path: string) =>
      path
        .split(".")
        .reduce((acc: any, key: any) => acc && acc[key], mockResources),
  }),
}))

jest.mock("i18next", () => ({
  use: jest.fn().mockReturnValue({
    init: jest.fn(),
  }),
}))
