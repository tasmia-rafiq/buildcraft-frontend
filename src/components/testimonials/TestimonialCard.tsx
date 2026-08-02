"use client";

import { FormatQuote } from "@mui/icons-material";
import { Avatar, Box, Paper, Rating, Stack, Typography } from "@mui/material";

interface Props {
  review: string;
  name: string;
  designation: string;
  image: string;
}

export default function TestimonialCard({
  review,
  name,
  designation,
  image,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 800,
        mx: "auto",
        px: { xs: 4, md: 10 },
        py: { xs: 6, md: 8 },
        borderRadius: 4,
        textAlign: "center",
        boxShadow: "0 18px 45px rgba(0,0,0,.08)",
      }}
    >
      <FormatQuote
        sx={{
          fontSize: 42,
          color: "primary.light",
          mb: 3,
        }}
      />

      <Rating
        value={5}
        readOnly
        sx={{
          mb: 4,
        }}
      />

      <Typography
        sx={{
          maxWidth: 620,
          mx: "auto",
          fontStyle: "italic",
          fontSize: {
            xs: "1rem",
            md: "1.35rem",
          },
          lineHeight: 2,
          fontFamily: "Georgia",
        }}
      >
        "{review}"
      </Typography>

      <Stack spacing={2}>
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 70,
            height: 70,
          }}
        />

        <Box>
          <Typography>{name}</Typography>

          <Typography color="primary.main" variant="body2">
            {designation}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
