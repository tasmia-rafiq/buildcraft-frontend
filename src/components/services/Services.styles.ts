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

export const serviceCardStyles: SxProps<Theme> = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  border: "1px solid",
  borderColor: "divider",
  overflow: "hidden",
  backgroundColor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 24px",
  transition: "0.5s",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 24px 60px",
    ".service_img": {
      transform: "scale(1.1)",
    },
    ".service_icon": {
      backgroundColor: "primary.main",
      color: "common.black",
    },
    ".service_cta": {
      opacity: 1,
      transform: "translateX(0px)",
    },
  },
};

export const serviceIconBadgeStyles: SxProps<Theme> = {
  width: "56px",
  height: "56px",
  borderRadius: "12px",
  backgroundColor: "rgba(245, 166, 35, 0.1)",
  border: "3px solid rgb(255, 255, 255)",
  color: "primary.main",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: 2,
  mt: "-46px",
  mb: 2,
  position: "relative",
  zIndex: 2,
  transition: "0.5s",
  "& svg": { fontSize: "1.5rem" },
};

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
