"use client";

import { Box, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import {
  descriptionStyles,
  formWrapperStyles,
  h4Styles,
  infoWrapperStyles,
  leftColumnStyles,
} from "./Contact.styles";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { CONTACT_INFO } from "@/constants";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: sectionRef,
    target: sectionRef,
    selector: "[data-reveal]",
  });

  return (
    <Section id="contact">
      <SectionHeader
        headline="get in touch"
        title="Contact Us"
        subtitle="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours."
      />

      <Box ref={sectionRef}>
        <Grid
          container
          spacing={{
            xs: 5,
            md: 6,
          }}
        >
          {/* Left Side */}
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Box sx={leftColumnStyles} data-reveal>
              <Typography variant="h4" gutterBottom sx={h4Styles}>
                Let's Start a Conversation
              </Typography>

              <Typography sx={descriptionStyles}>
                Whether you're planning a new build or renovation, our team is
                here to help you every step of the way.
              </Typography>

              <Box sx={infoWrapperStyles}>
                {CONTACT_INFO.map((item) => (
                  <Box key={item.title}>
                    <ContactInfoCard {...item} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Box data-reveal>
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
}
