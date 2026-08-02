"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  title: string;
  items: string[];
}

export default function FooterLinks({ title, items }: Props) {
  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{
          color: "primary.main",
          mb: 3,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {title}
      </Typography>

      {items.map((item) => (
        <Typography
          component={Link}
          key={item}
          href="#"
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            mb: 1.5,
            display: "flex",
            transition: "0.4s",
            "&:hover": { color: "primary.main", pl: 1 },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
}
