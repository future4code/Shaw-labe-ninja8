import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7866BE",
    },
    secondary: {
      main: "#494949",
    },

    success: {
      main: "#0dee2b",
    },

    error: {
      main: "#ff0000",
    },

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});
