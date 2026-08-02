"use client";

import { ArrowBack, ArrowForward } from "@mui/icons-material";

import { Box, IconButton } from "@mui/material";

interface Props {
  active: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function TestimonialNavigation({
  active,
  total,
  onPrev,
  onNext,
}: Props) {
  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <IconButton
        onClick={onPrev}
        sx={{
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <ArrowBack />
      </IconButton>

      <Box>
        {Array.from({ length: total }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: index === active ? 26 : 8,
              height: 8,
              borderRadius: 10,
              bgcolor: index === active ? "primary.main" : "grey.300",
              transition: ".3s",
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={onNext}
        sx={{
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}
