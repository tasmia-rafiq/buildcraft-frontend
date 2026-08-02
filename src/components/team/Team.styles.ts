import { SxProps, Theme } from "@mui/material";

export const cardStyles: SxProps<Theme> = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 3,
  bgcolor: "background.paper",
  cursor: "pointer",

  "&:hover img": {
    transform: "scale(1.08)",
  },
  "&:hover .team_overlay": {
    opacity: 1,
  },
  "&:hover .team_social": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "&:hover .team_description": {
    opacity: 1,
  },
};

export const imageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: 420,
  overflow: "hidden",
  borderRadius: 2,
};

export const imageStyles: SxProps<Theme> = {
  objectFit: "cover",
  transition: "transform .6s ease",
};

export const overlayStyles: SxProps<Theme> = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  background: "linear-gradient(transparent 40%, rgba(10, 10, 10, 0.9) 100%)",
  p: 3,
  borderRadius: 2,
  opacity: 0,
  transition: "opacity .4s ease",
};

export const socialWrapperStyles: SxProps<Theme> = {
  transform: "translateY(20px)",
  opacity: 0,
  transition: "0.4s 0.1s",
  mb: 2,
};

export const socialButtonStyles: SxProps<Theme> = {
  width: 40,
  height: 40,

  bgcolor: "rgba(255,255,255,.12)",
  color: "common.white",

  "&:hover": {
    bgcolor: "primary.main",
    color: "common.black",
  },
};

export const descriptionStyles: SxProps<Theme> = {
  color: "rgba(255,255,255,.6)",
  opacity: 0,
  transition: "opacity .35s ease .1s",
  lineHeight: 1.7,
  fontSize: "0.85rem",
};

export const contentStyles: SxProps<Theme> = {
  pt: 2.5,
  px: 0.5,
  textAlign: "left",
};