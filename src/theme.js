import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, pink, red } from "@mui/material/colors";

// create a theme instance
const theme = extendTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
    boardContentHeight: "calc(100vh - 48px - 58px)",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: cyan[500],
        },
        secondary: {
          main: deepOrange[500],
        },
        error: {
          main: red.A400,
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: pink[400],
        },
        secondary: {
          main: orange[500],
        },
        error: {
          main: red.A400,
        },
      },
    },
  },
});
export default theme;
