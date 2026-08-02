"use client";

import { SxProps, Theme } from "@mui/material";

export const chipsWrapperStyles: SxProps<Theme> = {
  justifyContent: "center",
  flexWrap: "wrap",
  mb: 6,
};

export const chipItemsStyles = (
  category: string,
  item: string,
): SxProps<Theme> => ({
  px: 2,
  py: 1,
  fontWeight: 700,
  borderRadius: 50,
  transition: "0.3s",
  border: 2,
  borderColor: category === item ? "primary.main" : "#0000001a",
  bgcolor: category === item ? "primary.main" : "transparent",
  color: category === item ? "common.black" : "#6b7280",
  "&:hover": {
    color: category === item ? "common.black" : "primary.main",
    borderColor: "primary.main",
    bgcolor: category === item ? "#d4891a" : "transparent",
  },
});

export const projectsGridStyles: SxProps<Theme> = {
  mb: 6,
};

export const viewAllButtonWrapperStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
};

export const cardStyles: SxProps<Theme> = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 3,
  cursor: "pointer",
  height: 420,
  "&:hover img": {
    transform: "scale(1.08)",
  },
  "&:hover .project_overlay": {
    opacity: 1,
  },
  "&:hover .overlay_content": {
    opacity: 1,
    transform: "translateY(0)",
  },
};

export const imageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
};

export const imageStyles: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform .6s ease",
};

export const categoryChipStyles: SxProps<Theme> = {
  position: "absolute",
  top: 16,
  left: 16,
  bgcolor: "primary.main",
  color: "common.black",
  fontWeight: 700,
  zIndex: 3,
};

export const overlayStyles: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  background: "linear-gradient(transparent 30%, rgba(10, 10, 10, 0.95) 100%)",
  opacity: 0,
  transition: "opacity .5s ease",
  p: 3.5,
};

export const overlayContentStyles: SxProps<Theme> = {
  opacity: 0,
  transform: "translateY(20px)",
  transition: "0.5s",
};

export const primaryBtnStyles: SxProps<Theme> = {
  border: 2,
  borderColor: "black",
  letterSpacing: "0.04em",
  fontWeight: 600,
  color: "black",
  "&:hover": {
    color: "primary.main",
    borderColor: "primary.main",
  }
};
