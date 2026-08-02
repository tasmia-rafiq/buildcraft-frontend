"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowForward, PlayArrow } from "@mui/icons-material";
import { useRef } from "react";
import { gsap } from "gsap";
import PrimaryButton from "../common/PrimaryButton";
import {
  bottomCircleStyles,
  HeroAccentLine,
  HeroSection,
  primaryButtonStyles,
  secondaryButtonStyles,
  topCircleStyles,
} from "./Hero.styles";
import { useGSAP } from "@gsap/react";
import StatsCounter from "../common/StatsCounter";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: sectionRef,
    target: contentRef,
  });

  return (
    <HeroSection ref={sectionRef}>
      {/* Decorative Circles */}
      <Box sx={topCircleStyles} data-decoration />

      <Box sx={bottomCircleStyles} data-decoration />

      <Container
        maxWidth={false}
        sx={{ pt: { md: 12 }, pb: { md: 20 }, maxWidth: "1280px" }}
      >
        <Grid container>
          <Grid size={{ xs: 12, md: 8, lg: 7 }}>
            <Stack spacing={3} ref={contentRef}>
              <HeroAccentLine />

              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  lineHeight: 2,
                  letterSpacing: "0.15em",
                }}
              >
                AWARD-WINNING CONSTRUCTION COMPANY
              </Typography>

              <Typography variant="h1">
                We Build{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  Your Vision
                </Box>{" "}
                Into Reality
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "text.primary",
                  maxWidth: 550,
                  mb: "20px !important",
                }}
              >
                From concept to completion, we deliver exceptional construction
                services backed by 25+ years of excellence, innovation, and
                unwavering commitment to quality.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <PrimaryButton
                  text="Start Your Project"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForward />}
                  sx={primaryButtonStyles}
                />

                <PrimaryButton
                  text="View Our Work"
                  variant="outlined"
                  color="secondary"
                  startIcon={
                    <PlayArrow
                      color="primary"
                      sx={{
                        bgcolor: "rgba(245, 166, 35, 0.15)",
                        borderRadius: "50%",
                      }}
                    />
                  }
                  sx={secondaryButtonStyles}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Animated Stats Counter */}
      <StatsCounter />
    </HeroSection>
  );
}
