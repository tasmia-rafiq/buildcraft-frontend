"use client";

import { Box, styled, SxProps, Theme } from "@mui/material";

export const AccentShape1 = styled(Box)(() => ({
  position: "absolute",
  top: "10%",
  left: "-5%",
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(245, 166, 35, 0.03) 0%, transparent 70%)",
  pointerEvents: "none",
}));

export const AccentShape2 = styled(Box)(() => ({
  position: "absolute",
  bottom: "10%",
  right: "-5%",
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(245, 166, 35, 0.03) 0%, transparent 70%)",
  pointerEvents: "none",
}));

export const featureCardStyles: SxProps<Theme> = {
  px: 3.5,
  py: 4.5,
  height: "100%",
  borderRadius: "16px",
  border: "1px solid",
  borderColor: "#ffffff0f",
  backgroundColor: "#ffffff0a",
  transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: "#f5a6230f",
    borderColor: "#f5a62333",
    transform: "translateY(-6px)",
    ".feature_icon": {
      backgroundColor: "primary.main",
      color: "common.black",
      transform: "rotateY(180deg)",
    },
  },
};

export const FeatureIcon = styled(Box)(({ theme }) => ({
  width: "64px",
  height: "64px",
  borderRadius: "14px",
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  marginBottom: 20,
  transition: "0.5s",
  "& svg": { fontSize: 30 },
}));
