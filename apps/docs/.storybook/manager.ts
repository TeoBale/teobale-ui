import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: "monospace",

    brandTitle: "TeoBale IU",
    brandUrl: "https://teobale.dev/ui",
    brandImage:
      "https://raw.githubusercontent.com/TeoBale/teobale-ui/main/assets/teobaleui.png",
    brandTarget: "_self",

    //
    colorPrimary: "#3A10E5",
    colorSecondary: "#2F2F31",

    // UI
    appBg: "#ffffff",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#DFE5EA",
    appBorderRadius: 8,

    // Text colors
    textColor: "#10162F",
    textInverseColor: "#ffffff",

    // Toolbar default and active colors
    barTextColor: "#9E9E9E",
    barSelectedColor: "#2F2F31",
    barHoverColor: "#2F2F31",
    barBg: "#ffffff",

    // Form colors
    inputBg: "#ffffff",
    inputBorder: "#10162F",
    inputTextColor: "#10162F",
    inputBorderRadius: 8,
  }),
});
