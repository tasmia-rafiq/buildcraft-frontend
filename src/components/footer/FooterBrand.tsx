"use client";

import { Box, Link, Stack, Typography } from "@mui/material";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import Logo from "@/components/common/Logo";
export default function FooterBrand() {
  return (
    <Box>
      <Logo />

      <Typography
        sx={{
          my: 3,
          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        Building excellence since 1999. We deliver premium construction services
        with unwavering commitment to quality, safety, and client satisfaction.
      </Typography>

      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <LocationOn color="primary" />

          <Typography sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", lineHeight: 1.6, }}>
            1247 Construction Ave, Suite 400,
            <br />
            New York, NY 10001
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Phone color="primary" />

          <Link href="tel:+15552345678" sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", lineHeight: 1.6, }} underline="none">
            +1 (555) 234-5678
          </Link>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Email color="primary" />

          <Link
            href="mailto:info@buildcraft.com"
            sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.95rem", lineHeight: 1.6, }}
            underline="none"
          >
            info@buildcraft.com
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
