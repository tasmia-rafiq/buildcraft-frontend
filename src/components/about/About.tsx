"use client";

import { PERKS } from "@/constants";
import { ArrowForward, CheckCircle } from "@mui/icons-material";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { experienceBadgeStyles, experienceCount, experienceText, imageWrapperStyles } from "./About.styles";
import PrimaryButton from "../common/PrimaryButton";
import { useSplitReveal } from "@/hooks/useSplitReveal";
import { useRef } from "react";
import Section from "../common/Section";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useSplitReveal({
    scope: sectionRef,
    left: leftRef,
    right: rightRef,
  });
  return (
    <Section id="about">
      <Container sx={{ maxWidth: "1280px !important" }}>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ alignItems: "center" }}
           ref={sectionRef}
        >
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: { xs: "360px", md: "500px" },
              }}
              ref={leftRef}
            >
              <Box
                sx={imageWrapperStyles}
              >
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                  alt="BuildCraft construction team at work"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>

              {/* Experience Badge */}
              <Box sx={experienceBadgeStyles}>
                <Typography
                  variant="h3"
                  sx={experienceCount}
                >
                  25+
                </Typography>

                <Typography
                  variant="body2"
                  sx={experienceText}
                >
                  Years of
                  <br />
                  Excellence
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2} ref={rightRef}>
              <Typography
                variant="overline"
                color="primary"
                sx={{ fontWeight: "bold", letterSpacing: "0.1em" }}
              >
                — ABOUT BUILDCRAFT
              </Typography>

              <Typography variant="h2">
                Building the Future
                <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  With Excellence
                </Box>
              </Typography>

              <Typography variant="body1">
                Since 1999, BuildCraft has been at the forefront of the
                construction industry, delivering premium projects that stand
                the test of time. Our team of expert architects, engineers, and
                project managers work seamlessly to transform your vision into
                architectural masterpieces.
              </Typography>

              <Typography variant="body1">
                We combine cutting-edge technology with time-tested
                craftsmanship to create spaces that inspire, function
                beautifully, and exceed expectations at every level.
              </Typography>

              {/* Features list */}
              <Grid container sx={{ py: { sm: 2 } }}>
                {PERKS.map((perk, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 1.5,
                        mb: { xs: 1, sm: 2 },
                      }}
                    >
                      <CheckCircle color="primary" fontSize="small" />
                      <Typography variant="body2">{perk}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* CTA */}
              <Box>
                <PrimaryButton
                  text="Discover More"
                  color="primary"
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    py: 1.5,
                    px: 4,
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}
