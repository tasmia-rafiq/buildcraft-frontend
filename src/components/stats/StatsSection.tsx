"use client";

import { Grid } from "@mui/material";
import { stats } from "@/constants";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useRef } from "react";
import Section from "../common/Section";
import StatCard from "./StatCard";

export default function StatsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: gridRef,
    target: gridRef,
    selector: "[data-stat]",
  });

  return (
    <Section dark sx={{ bgcolor: "#0a0a0a", py: 10, }}>
      <Grid
        container
        spacing={4}
        ref={gridRef}
      >
        {stats.map((stat) => (
          <Grid
            key={stat.label}
            size={{
              xs: 6,
              md: 3,
            }}
            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            data-stat
          >
            <StatCard stat={stat} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}