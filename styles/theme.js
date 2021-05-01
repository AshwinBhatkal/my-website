import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
  typography: {
    body1: {
      fontSize: "1.25rem",
      lineHeight: 2,
    },
  },
});

export default responsiveFontSizes(theme);
