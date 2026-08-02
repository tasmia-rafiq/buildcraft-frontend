"use client";

import { socials } from "@/constants";
import { ArrowForward } from "@mui/icons-material";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";

export default function Newsletter() {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{
          color: "primary.main",
          mb: 3,
          textTransform: "uppercase",
        }}
      >
        Newsletter
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          mb: 3,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.95rem",
        }}
      >
        Subscribe to our newsletter for the latest updates on projects, industry
        insights, and exclusive offers.
      </Typography>

      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="Your email address"
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 1,
            color: "white",
            borderColor: "rgba(255, 255, 255, 0.1)",
          }}
        />

        <IconButton
          color="primary"
          sx={{
            bgcolor: "primary.main",
            color: "#000",
            borderRadius: 1,
            width: 56,
            boxShadow: "rgba(245, 166, 35, 0.35) 0px 4px 14px",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Stack>

      <Stack direction="row" spacing={1.5} sx={{ mt: 4 }}>
        {socials.map((Icon, index) => (
          <IconButton
            key={index}
            sx={{
              border: "1px solid",
              borderColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.5)",
              width: "42px",
              height: "42px",
              borderRadius: 2,
              transition: "0.5s",
              "&:hover": {
                bgcolor: "primary.main",
                color: "#000",
                transform: "translateY(-4px)"
              },
            }}
          >
            <Icon fontSize="small" />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
}
