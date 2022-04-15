import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#7866BE",
      light: "#f5f4fc",
    },
    secondary: {
      main: "#494949",
      light: "#8f8f92",
    },

  

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});
