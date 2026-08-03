import { SxProps, Theme } from "@mui/material";

export const cardWrapperStyles: SxProps<Theme> = {
  maxWidth: 800,
  mx: "auto",
  px: { xs: 3, md: 5 },
  py: { xs: 4, md: 6 },
  borderRadius: 4,
  textAlign: "center",
  boxShadow: "rgba(0, 0, 0, 0.06) 0px 8px 40px",
  border: "1px solid rgba(0, 0, 0, 0.04)",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const quoteIconStyles: SxProps<Theme> = {
  display: "inline-block",
  fontSize: 56,
  color: "primary.main",
  opacity: 0.3,
  mb: 2,
};

export const reviewTextStyles: SxProps<Theme> = {
  mb: 4,
  fontStyle: "italic",
  fontSize: {
    xs: "1.05rem",
    md: "1.25rem",
  },
  lineHeight: 1.8,
  fontFamily: "var(--font-playfair-display), Georgia, serif",
  fontWeight: 400,
  color: "rgb(55, 65, 81)",
};

export const avatarStyles: SxProps<Theme> = {
  width: 64,
  height: 64,
  border: "3px solid rgb(245, 166, 35)",
};

export const navigationBtnWrapperStyles: SxProps<Theme> = {
  mt: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 3,
};

export const iconBtnStyles: SxProps<Theme> = {
  border: "2px solid rgba(0, 0, 0, 0.1)",
  width: 52,
  height: 52,
  color: "rgb(55, 65, 81)",
  p: 1,
  bgcolor: "transparent",
};
