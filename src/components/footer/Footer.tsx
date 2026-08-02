"use client";

import { Box, Container, Divider, Grid } from "@mui/material";
import FooterBrand from "./FooterBrand";
import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import { quickLinks, services } from "@/constants";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0a0a0a",
        pt: 10,
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 7 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <FooterBrand />
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FooterLinks title="Quick Links" items={quickLinks} />
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FooterLinks title="Services" items={services} />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Newsletter />
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ mt: 4, bgcolor: "rgba(255, 255, 255, 0.06)" }} />

      <Container maxWidth="lg">
        <FooterBottom />
      </Container>
    </Box>
  );
}
