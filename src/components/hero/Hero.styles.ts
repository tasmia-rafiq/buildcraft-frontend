import { Box, styled, SxProps, Theme } from "@mui/material";

export const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  backgroundImage: `
          linear-gradient(135deg, rgba(10, 10, 10, 0.92) 0%, rgba(10, 10, 10, 0.6) 50%, rgba(10, 10, 10, 0.85) 100%),
          url("https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80")
        `,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    alignItems: "flex-start",
  },
}));

export const HeroAccentLine = styled(Box)(({ theme }) => ({
  width: 60,
  height: 4,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 999,
}));

export const topCircleStyles: SxProps<Theme> = {
  position: "absolute",
  top: "18%",
  right: "4%",
  width: 320,
  height: 320,
  borderRadius: "50%",
  border: "1px solid rgba(245,166,35,.08)",
  pointerEvents: "none",
};

export const bottomCircleStyles: SxProps<Theme> = {
  position: "absolute",
  bottom: "24%",
  left: "-6%",
  width: 210,
  height: 210,
  borderRadius: "50%",
  border: "1px solid rgba(245,166,35,.05)",
  pointerEvents: "none",
};

export const primaryButtonStyles: SxProps<Theme> = {
  boxShadow: "rgba(245, 166, 35, 0.35) 0px 4px 14px",
  "&:hover": {
    boxShadow: "rgba(245, 166, 35, 0.5) 0px 6px 20px",
    bgcolor: "rgb(212, 137, 26)",
    transform: "translateY(-2px)",
  },
};

export const secondaryButtonStyles: SxProps<Theme> = {
  color: "common.white",
  borderWidth: 2,
  borderColor: "rgba(255,255,255,.3)",
  "&:hover": {
    borderWidth: 2,
    borderColor: "primary.main",
    bgcolor: "rgba(255,255,255,.05)",
  },
};
