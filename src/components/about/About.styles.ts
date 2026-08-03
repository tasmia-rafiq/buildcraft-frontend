import { SxProps, Theme } from "@mui/material";

export const experienceBadgeStyles: SxProps<Theme> = {
  position: "absolute",
  bottom: "24px",
  right: "-20px",
  backgroundColor: "primary.main",
  color: "common.black",
  py: { xs: 2.5, sm: 3 },
  px: { xs: 3, sm: 3.5 },
  borderRadius: "12px",
  boxShadow: 3,
  textAlign: "center",
};

export const imageWrapperStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: { xs: "300px", sm: "400px", md: "320px" },
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: 4,
};

export const experienceCount: SxProps<Theme> = {
  fontWeight: "900",
  lineHeight: 1,
  fontSize: { xs: "1.75rem", sm: "2.25rem" },
  mb: 1,
};

export const experienceText: SxProps<Theme> = {
  fontWeight: 700,
  lineHeight: { xs: 1.5, sm: 1.7 },
  color: "common.black",
  fontSize: { xs: "0.8rem", sm: "0.85rem" },
};
