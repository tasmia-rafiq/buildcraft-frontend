"use client";

import { alpha, SxProps, Theme } from "@mui/material";

export const leftColumnStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

export const h4Styles: SxProps<Theme> = {
  mb: 1,
  color: "common.black",
  lineHeight: 1.3,
  fontWeight: 700,
  fontSize: "1.5rem",
};

export const descriptionStyles: SxProps<Theme> = {
  color: "text.secondary",
  mb: 4,
};

export const infoWrapperStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const infoCardStyles: SxProps<Theme> = (theme) => ({
  display: "flex",
  gap: 2,
  alignItems: "start",
  p: 2.5,
  borderRadius: 3,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  background: alpha(theme.palette.primary.main, 0.04),
  transition: ".35s",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    borderColor: alpha(theme.palette.primary.main, 0.2),
    background: alpha(theme.palette.primary.main, 0.08),
  },
});

export const iconBoxStyles: SxProps<Theme> = (theme) => ({
  width: 48,
  height: 48,
  borderRadius: 2,
  bgcolor: alpha(theme.palette.primary.main, 0.12),
  color: "primary.main",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexShrink: 0,
});

export const infoTitleStyles: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: "0.85rem",
  mb: 0.5,
  color: "common.black",
};

export const infoValueStyles: SxProps<Theme> = {
  color: "#6b7280",
};

export const formWrapperStyles: SxProps<Theme> = (theme) => ({
  p: {
    xs: 3,
    md: 5,
  },
  borderRadius: 4,
  border: "1px solid rgba(0, 0, 0, 0.04)",
  bgcolor: "#f8f9fa",
});

export const textFieldStyles: SxProps<Theme> = {
  "& .MuiInputLabel-root": {
    color: "rgb(156, 163, 175)",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "rgba(0, 0, 0, 0.02)",
    color: "black",
  },
  "& .MuiOutlinedInput-root fieldset": {
    borderColor: "rgba(0, 0, 0, 0.08)",
  },
};

export const submitButtonStyles: SxProps<Theme> = {
  bgcolor: "primary.main",
  color: "common.black",
  transition: "0.5s",
  mt: 1,
  "&:hover": {
    transform: "translateY(-6px)",
  }
};
