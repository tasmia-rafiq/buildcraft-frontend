import { PERKS } from "@/constants";
import { ArrowForward, CheckCircle } from "@mui/icons-material";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { experienceBadgeStyles } from "./About.styles";
import PrimaryButton from "../common/PrimaryButton";

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, md: 12 } }}>
      <Container sx={{ maxWidth: "1280px !important" }}>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          sx={{ alignItems: "center" }}
        >
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "500px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "300px", sm: "400px", md: "320px" },
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: 4,
                }}
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
                  sx={{ fontWeight: "900", lineHeight: 1, fontSize: "2.25rem", mb: 1 }}
                >
                  25+
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700, lineHeight: 1.7, color: "common.black", fontSize: "0.85rem" }}
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
            <Stack spacing={2}>
              <Typography
                variant="overline"
                color="primary"
                sx={{ fontWeight: "bold", letterSpacing: "0.1em" }}
              >
                — ABOUT BUILDCRAFT
              </Typography>

              <Typography
                variant="h2"
              >
                Building the Future
                <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  With Excellence
                </Box>
              </Typography>

              <Typography
                variant="body1"
              >
                Since 1999, BuildCraft has been at the forefront of the
                construction industry, delivering premium projects that stand
                the test of time. Our team of expert architects, engineers, and
                project managers work seamlessly to transform your vision into
                architectural masterpieces.
              </Typography>

              <Typography
                variant="body1"
              >
                We combine cutting-edge technology with time-tested
                craftsmanship to create spaces that inspire, function
                beautifully, and exceed expectations at every level.
              </Typography>

              {/* Features list */}
              <Grid container sx={{ py: 2 }}>
                {PERKS.map((perk, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "start", gap: 1.5, mb: 2 }}
                    >
                      <CheckCircle
                        color="primary"
                        fontSize="small"
                      />
                      <Typography
                        variant="body2"
                      >
                        {perk}
                      </Typography>
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
    </Box>
  );
}
