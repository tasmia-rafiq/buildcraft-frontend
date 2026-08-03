"use client";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { iconBtnStyles, navigationBtnWrapperStyles } from "./Testimonials.styles";

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
    <Box sx={navigationBtnWrapperStyles}>
      <IconButton
        onClick={onPrev}
        sx={iconBtnStyles}
      >
        <ArrowBack />
      </IconButton>

      <Box sx={{ display: "flex", gap: 1, }}>
        {Array.from({ length: total }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: index === active ? 32 : 10,
              height: 10,
              borderRadius: 10,
              bgcolor: index === active ? "primary.main" : "rgba(0, 0, 0, 0.15)",
              transition: ".3s",
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={onNext}
        sx={iconBtnStyles}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}
