import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  trello: {
    appBarHeight: "58px",
    boardBarHeight: "60px",
    boardContentHeight: "calc(100vh - 48px - 58px)",
  },
  // colorSchemes: {
  // light: {
  //   palette: {
  //     primary: {
  //       main: cyan[500],
  //     },
  //     secondary: {
  //       main: deepOrange[500],
  //     },
  //     error: {
  //       main: red.A400,
  //     },
  //   },
  // },
  // dark: {
  //   palette: {
  //     primary: {
  //       main: pink[400],
  //     },
  //     secondary: {
  //       main: orange[500],
  //     },
  //     error: {
  //       main: red.A400,
  //     },
  //   },
  // },
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            with: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#dcdde1",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
            borderRadius: "8px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "0.5px",
          "&:hover": {
            borderWidth: "0.5px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // color: theme.palette.primary.main,
          fontSize: "0.875rem",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          // bo cai khi ma nhan vao to dam len
          "& fieldset": {
            borderWith: "0.5px !important",
          },
          "&:hover fieldset": {
            borderWith: "1px !important",
          },
          "&.Mui-focused fieldset": {
            borderWith: "1px !important",
          },
        },
      },
    },
  },
});
export default theme;
