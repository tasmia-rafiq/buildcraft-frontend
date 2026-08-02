"use client";

import { useMemo, useRef, useState } from "react";
import { Box, Chip, Grid, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import SectionHeader from "../common/SectionHeader";
import PrimaryButton from "../common/PrimaryButton";

import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { ProjectCategory } from "@/types";
import { PROJECT_CATEGORIES, PROJECTS } from "@/constants";
import ProjectCard from "./ProjectCard";
import Section from "../common/Section";
import {
  chipItemsStyles,
  chipsWrapperStyles,
  primaryBtnStyles,
  projectsGridStyles,
  viewAllButtonWrapperStyles,
} from "./Projects.styles";
import { useAnimatedFilter } from "@/hooks/useAnimatedFilter";
import { gsap } from "@/utils/gsap";

export default function ProjectsSection() {
  const [category, setCategory] = useState<ProjectCategory>("All");

  const projectsRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: projectsRef,
    target: projectsRef,
    selector: "[data-project]",
  });

  const filteredProjects = useMemo(() => {
    if (category === "All") return PROJECTS;

    return PROJECTS.filter((project) => project.category === category);
  }, [category]);

  useAnimatedFilter({
    containerRef: projectsRef,
    dependency: filteredProjects,
  });

  // Category change
  const handleCategoryChange = (nextCategory: ProjectCategory) => {
    if (nextCategory === category) return;

    const cards = projectsRef.current?.querySelectorAll("[data-project]");

    if (!cards?.length) {
      setCategory(nextCategory);
      return;
    }

    gsap.to(cards, {
      opacity: 0,
      scale: 0.96,
      y: 12,
      duration: 0.22,
      stagger: 0.03,
      ease: "power2.in",
      onComplete: () => {
        setCategory(nextCategory);
      },
    });
  };

  return (
    <Section id="projects">
      <SectionHeader
        headline="our portfolio"
        title="Featured Projects"
        subtitle="Explore our portfolio of completed projects showcasing our commitment to quality, innovation, and architectural excellence."
      />

      <Stack direction="row" spacing={1.5} sx={chipsWrapperStyles}>
        {PROJECT_CATEGORIES.map((item) => (
          <Chip
            key={item}
            label={item}
            clickable
            onClick={() => handleCategoryChange(item)}
            sx={chipItemsStyles(category, item)}
          />
        ))}
      </Stack>

      {/* Projects Grid */}
      <Grid container spacing={3} ref={projectsRef} sx={projectsGridStyles}>
        {filteredProjects.map((project) => (
          <Grid
            key={project.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            data-project
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      <Box sx={viewAllButtonWrapperStyles}>
        <PrimaryButton
          text="View All Projects"
          variant="outlined"
          endIcon={<ArrowForward />}
          sx={primaryBtnStyles}
        />
      </Box>
    </Section>
  );
}
