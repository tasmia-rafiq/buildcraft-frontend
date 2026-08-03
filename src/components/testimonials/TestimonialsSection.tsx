"use client";

import { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import { testimonials } from "@/constants";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Box } from "@mui/material";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: headerRef,
    target: headerRef,
  });

  const previous = () =>
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () =>
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const testimonial = testimonials[active];

  return (
    <Section sx={{ bgcolor: "#f8f9fa" }} id="testimonials">
      <Box ref={headerRef}>
        <SectionHeader
          headline="testimonials"
          title="What our clients say"
          subtitle="Hear from the people who've experienced the BuildCraft difference firsthand."
        />
      </Box>

      <TestimonialCard {...testimonial} />

      <TestimonialNavigation
        active={active}
        total={testimonials.length}
        onPrev={previous}
        onNext={next}
      />
    </Section>
  );
}
