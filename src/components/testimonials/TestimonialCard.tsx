"use client";

import { FormatQuote } from "@mui/icons-material";
import { Avatar, Box, Paper, Rating, Stack, Typography } from "@mui/material";
import {
    avatarStyles,
  cardWrapperStyles,
  quoteIconStyles,
  reviewTextStyles,
} from "./Testimonials.styles";

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
    <Paper elevation={0} sx={cardWrapperStyles}>
      <FormatQuote sx={quoteIconStyles} />

      <Rating
        value={5}
        readOnly
        sx={{
          mb: 4,
          gap: 0.5,
        }}
      />

      <Typography variant="h5" sx={reviewTextStyles}>
        "{review}"
      </Typography>

      <Stack spacing={2} sx={{ alignItems: "center",  }}>
        <Avatar
          src={image}
          alt={name}
          sx={avatarStyles}
        />

        <Box>
          <Typography variant="h6" sx={{ color: "common.black", fontSize: "1rem", fontWeight: 700 }}>{name}</Typography>

          <Typography variant="body2" sx={{ color: "primary.main" }}>
            {designation}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
