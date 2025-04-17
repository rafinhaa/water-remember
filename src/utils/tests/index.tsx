import { TamaguiProvider } from "@tamagui/core"
import { render, RenderOptions } from "@testing-library/react-native"

import { default as resources } from "@/locales/resources/ptBR/index.json"

import themeConfig from "../../../tamagui.config"

export * from "@testing-library/react-native"

export function renderWithProviders<T>(
  ui: React.ReactElement<T>,
  renderOptions?: RenderOptions,
) {
  return render(ui, {
    ...renderOptions,
    wrapper: ({ children }) => (
      <TamaguiProvider config={themeConfig}>
        {renderOptions?.wrapper ? (
          <renderOptions.wrapper>{children}</renderOptions.wrapper>
        ) : (
          children
        )}
      </TamaguiProvider>
    ),
  })
}

export { resources }
