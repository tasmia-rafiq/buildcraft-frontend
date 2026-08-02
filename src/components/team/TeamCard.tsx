"use client";

import Image from "next/image";

import {
  Box,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";

import {
  LinkedIn,
  Twitter,
  Email,
} from "@mui/icons-material";

import { TeamMember } from "@/types";

import {
  cardStyles,
  imageWrapperStyles,
  imageStyles,
  overlayStyles,
  socialWrapperStyles,
  socialButtonStyles,
  descriptionStyles,
  contentStyles,
} from "./Team.styles";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Box sx={cardStyles}>
      {/* Image */}
      <Box sx={imageWrapperStyles}>
        <Box
          component={Image}
          src={member.image}
          alt={member.name}
          fill
          sx={imageStyles}
        />
      </Box>

      {/* Overlay */}
      <Box className="team_overlay" sx={overlayStyles}>
        <Stack
          direction="row"
          spacing={1}
          className="team_social"
          sx={socialWrapperStyles}
        >
          <IconButton size="small" sx={socialButtonStyles}>
            <LinkedIn fontSize="small" />
          </IconButton>

          <IconButton size="small" sx={socialButtonStyles}>
            <Twitter fontSize="small" />
          </IconButton>

          <IconButton size="small" sx={socialButtonStyles}>
            <Email fontSize="small" />
          </IconButton>
        </Stack>

        <Typography
          variant="body2"
          className="team_description"
          sx={descriptionStyles}
        >
          {member.description}
        </Typography>
      </Box>

      {/* Bottom Content */}
      <Box sx={contentStyles}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.3,
            color: "black",
            fontSize: "1.1rem",
          }}
        >
          {member.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "primary.main" }}
        >
          {member.role}
        </Typography>
      </Box>
    </Box>
  );
}