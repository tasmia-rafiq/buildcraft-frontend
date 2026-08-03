"use client";

import {
  EnergySavingsLeaf,
  Groups,
  Payments,
  Schedule,
  Security,
  Verified,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import {
  AccentShape1,
  AccentShape2,
  featureCardStyles,
  FeatureIcon,
} from "./Services.styles";
import SectionHeader from "../common/SectionHeader";
import { useRef } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import Section from "../common/Section";

const ADVANTAGES_DATA = [
  {
    title: "Premium Quality",
    description:
      "We use only the finest materials and proven construction methods to ensure lasting excellence.",
    icon: <Verified />,
  },
  {
    title: "On-Time Delivery",
    description:
      "Our systematic approach guarantees project completion within the agreed timeline, every time.",
    icon: <Schedule />,
  },
  {
    title: "Expert Team",
    description:
      "Our seasoned professionals bring decades of combined experience to every project we undertake.",
    icon: <Groups />,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs or surprises. We provide detailed estimates and maintain budget transparency.",
    icon: <Payments />,
  },
  {
    title: "Safety First",
    description:
      "Industry-leading safety protocols protect our workers, clients, and communities on every job site.",
    icon: <Security />,
  },
  {
    title: "Sustainable Building",
    description:
      "Eco-conscious construction practices that minimize environmental impact without compromising quality.",
    icon: <EnergySavingsLeaf />,
  },
];

export default function WhyUsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: headerRef,
    target: headerRef,
  });

  useRevealAnimation({
    scope: cardsRef,
    target: cardsRef,
    selector: "[data-card]",
    delay: 0.2,
  });
  return (
    <Section dark>
      {/* Background Accent Shapes */}
      <AccentShape1 />
      <AccentShape2 />

      <Box ref={headerRef}>
        <SectionHeader
          darkBg
          headline="why choose us"
          title="The BuildCraft Advantage"
          subtitle="What sets us apart from the competition and makes us the preferred choice for premium construction services."
        />
      </Box>

      {/* Card Grid */}
      <Grid container spacing={3} ref={cardsRef}>
        {ADVANTAGES_DATA.map((advantage) => (
          <Grid key={advantage.title} size={{ xs: 12, sm: 6, md: 4 }} data-card>
            <Box sx={featureCardStyles} role="article">
              {/* Icon Wrapper */}
              <FeatureIcon className="feature_icon">
                {advantage.icon}
              </FeatureIcon>

              {/* Text Content */}
              <Typography variant="h5" sx={{ color: "common.white", mb: 1.5 }}>
                {advantage.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#ffffff80", fontWeight: 400 }}
              >
                {advantage.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}
