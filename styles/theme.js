import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3466AF",
    },
    secondary: {
      main: "#FFCB05",
    },
  },
  typography: {
    body1: {
      fontSize: "1.125rem",
      lineHeight: 1.875,
    },
  },
});

export default responsiveFontSizes(theme);
