"use client";

import { Grid, Box } from "@mui/material";
import { TEAM_MEMBERS } from "@/constants";
import { useRef } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: headerRef,
    target: headerRef,
  });

  useRevealAnimation({
    scope: gridRef,
    target: gridRef,
    selector: "[data-team]",
  });

  return (
    <Section>
      <Box ref={headerRef}>
        <SectionHeader
          headline="our team"
          title="Meet the experts"
          subtitle="Our talented team of professionals brings passion, expertise, and dedication to every project."
        />
      </Box>

      <Grid container spacing={3} ref={gridRef}>
        {TEAM_MEMBERS.map((member) => (
          <Grid key={member.id} size={{ xs: 12, sm: 6, md: 3 }} data-team>
            <TeamCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
