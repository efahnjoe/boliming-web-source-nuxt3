// uno.config.ts
import {
  defineConfig,
  presetUno,
  transformerVariantGroup,
  presetIcons,
} from "unocss";
import presetLegacyCompat from "@unocss/preset-legacy-compat";

export default defineConfig({
  presets: [
    presetUno(),
    presetLegacyCompat({
      commaStyleColorFunction: true,
    }),
    // presetIcons({
    //   collections: {
    //     solar: () =>
    //       import("@iconify-json/solar/icons.json").then((i) => i.default),
    //   },
    // }),
  ],
  transformers: [transformerVariantGroup()],
});
