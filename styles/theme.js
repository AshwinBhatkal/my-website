import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D6A011",
      // main: "#D4A83A",
    },
    secondary: {
      main: "#19857b",
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
