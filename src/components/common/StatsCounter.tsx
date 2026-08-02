import { stats } from "@/constants";
import {
  Box,
  Container,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export const statsWrapperStyles: SxProps<Theme> = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  backdropFilter: "blur(24px)",
  bgcolor: "rgba(10,10,10,.82)",
  borderTop: "1px solid rgba(245,166,35,.15)",
  py: 4,
  zIndex: 2,
};

export default function StatsCounter() {
  const statsRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: statsRef,
    target: statsRef,
    delay: 0.7,
  })
  return (
    <Box sx={statsWrapperStyles}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1280,
          mx: "auto",
        }}
      >
        <Grid container spacing={4} ref={statsRef}>
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
              <Stack
                sx={{ alignItems: "center", justifyContent: "center" }}
                spacing={1}
              >
                <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                />
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {stat.label}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
