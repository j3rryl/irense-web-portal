import { PaletteMode } from "@mui/material";
import { amber, deepOrange, grey, teal, red } from "@mui/material/colors";

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
            secondary: "#fff",
          },
          icon: {
            primary: "#000",
            secondary: "#fff"
          },
          selected: {
            primary:"#32887c",
            secondary:"#1c4646"
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
            secondary: "#fff",
          },
          icon: {
            primary: "#fff",
            secondary: "#fff"
          },
          selected: {
            primary:"#32887c",
            secondary:"#1c4646",
          }
        }),
  },
});

export default theme;