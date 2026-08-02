import { SxProps, Theme } from "@mui/material";

export const sectionStyles: SxProps<Theme> = {
  py: { xs: 10, md: 12 },
  px: 3,
  position: "relative",
  overflow: "hidden",
  bgcolor: "#0a0a0a",
  zIndex: 1,
  "&:before": {
    content: "''",
    position: "absolute",
    inset: 0,
    backgroundImage: "url(https://images.unsplash.com/photo-1590644365607-1c5a7ec8a4d4?w=1920&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    opacity: 1.5,
    zIndex: -1,
  },
  "&:after": {
    content: "''",
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.8) 100%)",
    zIndex: -1,
  }
};

export const contentStyles: SxProps<Theme> = {
  maxWidth: 600,
};

export const buttonsWrapperStyles: SxProps<Theme> = {
  gap: 2,
  alignItems: "flex-end",
};