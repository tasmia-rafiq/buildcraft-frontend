import { SxProps, Theme } from "@mui/material";

export const navHeaderStyles = (scrolled: boolean): SxProps<Theme> => ({
  backgroundColor: scrolled ? "rgba(10,10,10,.95)" : "transparent",
  backdropFilter: scrolled ? "blur(20px)" : "none",
  WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
  transition: "background-color .35s ease, backdrop-filter .35s ease",
  boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,.15)" : "none",
});

export const NavButtonStyles = (active: boolean): SxProps<Theme> => ({
  position: "relative",
  color: active ? "primary.main" : "text.primary",
  fontSize: "0.9rem",
  fontWeight: 500,
  letterSpacing: "0.04em",
  px: 2,
  py: 1,
  minWidth: "auto",
  backgroundColor: "transparent",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: 4,
    transform: "translateX(-50%)",
    width: active ? 20 : 0,
    height: 2,
    bgcolor: "primary.main",
    transition: ".3s",
  },
  "&:hover": {
    color: "primary.main",
    bgcolor: "transparent",
    "&::after": {
      width: 20,
    },
  },
});

export const quoteButtonStyles: SxProps<Theme> = {
  px: 3,
  py: 1.2,
  fontWeight: 600,
  fontSize: "0.95rem",
  bgcolor: "primary.main",
  color: "#111111",
  "&:hover": {
    bgcolor: "rgb(212, 137, 26)",
    boxShadow: "rgba(245, 166, 35, 0.5) 0px 6px 20px",
    transform: "translateY(-2px)",
  },
  boxShadow: "rgba(245, 166, 35, 0.35) 0px 4px 14px",
};
