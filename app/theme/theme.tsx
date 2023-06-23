import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, teal, yellow } from "@mui/material/colors";

const theme = {
  palette: {
    primary: teal,
  },
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: teal,
          background: {
            default: "#fff",
            paper: "#fff",
          },
          text: {
            primary: "#000",
            secondary: grey[300],
            tertiary: "#fff",
          },
          icon: {
            primary: "#000",
            secondary: "#fff"
          },
          selected: {
            primary:"#32887c",
            secondary:"#1c4646"
          },
          card: {
            primary: "#fff"
          }
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: teal[100],
          background: {
            default: "#000",
            paper: "#000",
          },
          text: {
            primary: "#fff",
            secondary: grey[300],
            tertiary: "#fff",
          },
          icon: {
            primary: "#fff",
            secondary: "#fff"
          },
          selected: {
            primary:"#32887c",
            secondary:"#1c4646",
          },
          card: {
            primary: "#fff"
          }
        }),
  },
});

export default theme;