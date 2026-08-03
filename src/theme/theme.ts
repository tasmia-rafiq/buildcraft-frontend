import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f5a623",
    },
    background: {
      default: "#ffffff",
    },
    common: {
      black: "#111111",
      white: "#ffffff",
    },
    text: {
      primary: "#ffffffa6",
      secondary: "#9ca3af",
    },
    action: {
      hover: "#f5a6231f"
    }
  },

  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "4.5rem",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      fontFamily: "var(--font-playfair-display), Georgia, serif",
      color: "white",
      "@media (max-width: 600px)": {
        fontSize: "3.15rem",
      },
    },
    h2: {
      fontSize: "3.25rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.15,
      color: "black",
      fontFamily: "var(--font-playfair-display), Georgia, serif",
      "@media (max-width: 600px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.2rem",
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 500,
      lineHeight: 1.8,
      fontSize: "1.15rem",
      letterSpacing: "0.01em",
    },
    body1: {
      marginBottom: 3,
      fontWeight: 400,
      fontSize: "1.05rem",
      color: "#6b7280",
      lineHeight: 1.9,
      "@media (max-width: 600px)": {
        fontSize: "0.95rem",
        lineHeight: 1.7,
      },
    },
    body2: {
      fontWeight: 500,
      fontSize: "0.95rem",
      color: "#374151",
      lineHeight: 1.7,
    },
    caption: {
      fontWeight: 400,
      lineHeight: 1.66,
      color: "#ffffff66",
      fontSize: "0.7rem",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          transition: ".3s",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          px: { xs: 2, sm: 3 },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
