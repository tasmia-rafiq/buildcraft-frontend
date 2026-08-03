"use client";

import { useRef } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/utils/gsap";
import { Box, Typography } from "@mui/material";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!counterRef.current) return;

      const counter = {
        value: 0,
      };

      gsap.to(counter, {
        value,
        duration: 2,
        ease: "power2.out",

        snap: {
          value: 1,
        },

        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 85%",
          once: true,
        },

        onUpdate() {
          if (counterRef.current) {
            counterRef.current.textContent = `${Math.round(counter.value)}`;
          }
        },
      });
    },
    {
      scope: counterRef,
    }
  );

  return (
    <Typography
      variant="h2"
      sx={{
        color: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-inter) sans-serif",
        fontSize: { xs: "2.5rem", sm: "3.5rem" },
        fontWeight: 800,
      }}
    >
      <Box
        component="span"
        ref={counterRef}
      >
        0
      </Box>

      <Box component="span">
        {suffix}
      </Box>
    </Typography>
  );
}