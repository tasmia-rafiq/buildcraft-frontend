"use client";

import { Box, Typography } from "@mui/material";

import AnimatedCounter from "../common/AnimatedCounter";

import { Stat } from "@/types";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <Box sx={{ width: "100%", py: 2, position: "relative", "&:after": { display: { xs: "none", md: "block" }, content: "''", position: "absolute", right: 0, top: "20%", height: "60%", width: "1px", background: "linear-gradient(transparent, rgba(245, 166, 35, 0.3), transparent)" } }}>
      <Box sx={{ textAlign: "center" }}>
        <AnimatedCounter
          value={stat.value}
          suffix={stat.suffix}
        />

        <Typography
          variant="body2"
          sx={{ mt: {xs: 1, sm:1.5}, color: "text.secondary", fontWeight: 500, }}
        >
          {stat.label}
        </Typography>
      </Box>
    </Box>
  );
}