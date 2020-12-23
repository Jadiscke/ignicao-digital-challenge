import { colors, createMuiTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[700],
    },
    secondary: {
      main: "#333333",
    },
    text: {
      primary: "#ffffff",
      secondary: orange[300],
    },
  },
});

export default theme;
