// src/theme.js
import { createTheme } from "@mui/material/styles";

const colors = {
  cream: "#rgb(255,240,240)",
  sage: "#c9d6c1",
  sageDark: "#9fb3a3",
  ink: "#2a2a2a",
  inkSoft: "#4a4a4a",
  border: "rgba(0,0,0,0.12)",
};

const theme = createTheme({
  typography: {
    // Default font for body text, buttons, etc.
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),
    body1: {
      lineHeight: 1.6,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  palette: {
    mode: "light",

    background: {
      default: "#000000",
      paper: colors.inkSoft,
    },

    primary: {
      main: colors.cream,
      contrastText: colors.ink,
    },

    secondary: {
      main: colors.ink,
    },

    text: {
      primary: colors.cream,
      secondary: colors.cream,
    },

    divider: colors.cream,
},
components: {
    MuiButton: {
        styleOverrides: {
            root: {
                color: colors.cream,
                borderColor: colors.cream
            }
        }
    },
    MuiCard: {
        styleOverrides: {
            root: {

            }
        }
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.cream,
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.cream,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.cream,
                    },
            }
        }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.cream,
          textDecorationColor: colors.cream,
          textUnderlineOffset: "3px",
          textDecorationThickness: "1.5px",

          "&:hover": {
            color: colors.ink,
            textDecorationColor: colors.ink,
          },
        },
      },
    },
  },
});

export default theme;
