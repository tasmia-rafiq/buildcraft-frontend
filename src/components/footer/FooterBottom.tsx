"use client";

import { Box, Link, Stack, Typography } from "@mui/material";

export default function FooterBottom() {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Typography color="text.secondary">
        © 2026 BuildCraft Construction. All rights reserved.
      </Typography>

      <Stack direction="row" spacing={4}>
        <Link href="#" underline="none" color="text.secondary">
          Privacy Policy
        </Link>

        <Link href="#" underline="none" color="text.secondary">
          Terms of Service
        </Link>

        <Link href="#" underline="none" color="text.secondary">
          Sitemap
        </Link>
      </Stack>
    </Box>
  );
}
