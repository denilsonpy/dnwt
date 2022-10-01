import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

//  Extend the theme to include custom colors, fonts, etc
const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("#C7C7C7", "#000000")(props),
    },
  }),
};

const colors = {
  background: "#000000",
  primary: {
    900: "#bb0018",
    800: "#ca0024",
    700: "#d7002c",
    600: "#e90032",
    500: "#f80033",
    400: "#f2294e",
    300: "#e75e70",
    200: "#f08d98",
    100: "#ffc6d2",
    50: "#ffe8ee",
  },
  secondary: {
    900: "#153f75",
    800: "#225a94",
    700: "#2a6aa6",
    600: "#337bb7",
    500: "#3c88c4",
    400: "#5298cb",
    300: "#6ca9d3",
    200: "#92c1e0",
    100: "#bad9ec",
    50: "#e3f0f7",
  },
};

const fonts = {
  heading: "'Prompt'",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({ config, fonts, colors, styles });
