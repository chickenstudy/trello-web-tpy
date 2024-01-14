import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { cyan, deepOrange, orange, pink, red } from "@mui/material/colors";

// create a theme instance
const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            with: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#7f8c8d",
            borderRadius: "8px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.875rem",
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover ": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
            // bo cai khi ma nhan vao to dam len
            "& fieldset": {
              borderWith: "1px !important",
            },
          };
        },
      },
    },
  },
});
export default theme;
