"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

import {
  iconBoxStyles,
  infoCardStyles,
  infoTitleStyles,
  infoValueStyles,
} from "./Contact.styles";

interface ContactInfoCardProps {
  title: string;
  value: string;
  icon: SvgIconComponent;
  href?: string;
}

export default function ContactInfoCard({
  title,
  value,
  icon: Icon,
  href,
}: ContactInfoCardProps) {
  const content = (
    <>
      <Box sx={iconBoxStyles}>
        <Icon fontSize="medium" />
      </Box>

      <Box>
        <Typography variant="h6" sx={infoTitleStyles}>
          {title}
        </Typography>

        <Typography variant="body2" sx={infoValueStyles}>
          {value}
        </Typography>
      </Box>
    </>
  );

  if (href) {
    return (
      <Box component={Link} href={href} sx={infoCardStyles}>
        {content}
      </Box>
    );
  }

  return <Box sx={infoCardStyles}>{content}</Box>;
}
