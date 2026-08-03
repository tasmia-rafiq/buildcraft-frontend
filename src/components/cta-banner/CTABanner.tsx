"use client";

import { useRef } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ArrowForward, Phone } from "@mui/icons-material";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import {
  buttonsWrapperStyles,
  contentStyles,
  sectionStyles,
} from "./CTA.styles";
import PrimaryButton from "../common/PrimaryButton";

export default function CTABanner() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: leftRef,
    target: leftRef,
    x: -60,
    y: 0,
  });

  useRevealAnimation({
    scope: rightRef,
    target: rightRef,
    x: 60,
    y: 0,
  });

  return (
    <Box component="section" sx={sectionStyles}>
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
          <Stack ref={leftRef} sx={contentStyles} spacing={2}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                letterSpacing: ".15em",
              }}
            >
              — START YOUR PROJECT TODAY
            </Typography>

            <Typography
              variant="h2"
              sx={{
                mt: 2,
                mb: 3,
                color: "white",
              }}
            >
              Ready to Build{" "}
              <Box
                component="span"
                sx={{
                  color: "primary.main",
                }}
              >
                Something Extraordinary?
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ maxWidth: 500, color: "rgba(255, 255, 255, 0.6)" }}
            >
              Let's discuss your project and bring your vision to life. Our team
              is ready to deliver excellence.
            </Typography>
          </Stack>
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Stack ref={rightRef} sx={buttonsWrapperStyles}>
            <PrimaryButton
              text="Get Free Quote"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                boxShadow: "rgba(245, 166, 35, 0.35) 0px 4px 14px",
                "&:hover": {
                  boxShadow: "rgba(245, 166, 35, 0.5) 0px 6px 20px",
                  bgcolor: "rgb(212, 137, 26)",
                  transform: "translateY(-2px)",
                },
              }}
            />

            <PrimaryButton
              component="a"
              href="tel:+15552345678"
              text="+1 (555) 234-5678"
              variant="outlined"
              color="secondary"
              startIcon={<Phone />}
              sx={{
                color: "common.white",
                borderWidth: 2,
                borderColor: "rgba(255,255,255,.3)",
                "&:hover": {
                  borderWidth: 2,
                  borderColor: "primary.main",
                  bgcolor: "rgba(255,255,255,.05)",
                },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
