"use client";

import { LocationOn } from "@mui/icons-material";
import { Box, Chip, Stack, Typography } from "@mui/material";

import { Project } from "@/types";

import {
  cardStyles,
  imageWrapperStyles,
  imageStyles,
  categoryChipStyles,
  overlayStyles,
  overlayContentStyles,
} from "./Projects.styles";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box sx={cardStyles}>
      {/* Image */}
      <Box sx={imageWrapperStyles}>
        <Box
          component={Image}
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 600px) 100vw,
         (max-width: 900px) 50vw,
         (max-width: 1200px) 33vw,
         25vw"
          sx={imageStyles}
        />
      </Box>

      {/* Category */}
      <Chip label={project.category} size="small" sx={categoryChipStyles} />

      {/* Overlay */}
      <Box className="project_overlay" sx={overlayStyles}>
        <Box sx={overlayContentStyles} className="overlay_content">
          <Typography variant="h5" sx={{ color: "common.white", mb: 1, fontSize: "1.3rem" }}>
            {project.title}
          </Typography>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ alignItems: "center", mb: 1.5 }}
          >
            <LocationOn
              sx={{
                color: "primary.main",
                fontSize: 18,
              }}
            />

            <Typography variant="body2" sx={{ fontWeight: 400, color: "#ffffffb3", }}>
              {project.location}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3}>
            <Box>
              <Typography variant="caption">
                Area
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 600, color: "common.white" }}>
                {project.area}
              </Typography>
            </Box>

            <Box>
              <Typography variant="caption">
                Year
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 600, color: "common.white" }}>
                {project.year}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
