"use client";

import { Grid } from "@mui/material";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import { TEAM_MEMBERS } from "@/constants";
import { useRef } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: gridRef,
    target: gridRef,
    selector: "[data-team]",
  });
  
  return (
    <Section>
      <SectionHeader
        headline="our team"
        title="Meet the experts"
        subtitle="Our talented team of professionals brings passion, expertise, and dedication to every project."
      />

      <Grid container spacing={3}>
        {TEAM_MEMBERS.map((member) => (
          <Grid key={member.id} size={{ xs: 12, sm: 6, md: 3 }} data-team>
            <TeamCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
