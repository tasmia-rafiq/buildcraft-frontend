"use client";
import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { SERVICES_DATA } from "@/constants";
import SectionHeader from "../common/SectionHeader";
import { serviceCardStyles, serviceIconBadgeStyles } from "./Services.styles";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useRevealAnimation({
    scope: sectionRef,
    target: headerRef,
  });

  useRevealAnimation({
    scope: sectionRef,
    target: cardsRef,
    y: 50,
    stagger: 0.15,
    delay: 0.2,
  });
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#f8f9fa" }}
      ref={sectionRef}
    >
      <Container maxWidth={false} sx={{ maxWidth: "1280px !important" }}>
        <Box ref={headerRef}>
          <SectionHeader
            headline="our services"
            title="What we offer"
            subtitle="Comprehensive construction services tailored to transform your ideas into extraordinary built environments."
          />
        </Box>

        <Grid container spacing={3} ref={cardsRef}>
          {SERVICES_DATA.map((service, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={0} sx={serviceCardStyles}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover", transition: "0.5s" }}
                    className="service_img"
                  />
                </Box>

                {/* Card Content */}
                <CardContent
                  sx={{
                    px: 3,
                    pb: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  {/* Icon Badge */}
                  <Box sx={serviceIconBadgeStyles} className="service_icon">
                    <service.icon />
                  </Box>

                  {/* Heading */}
                  <Typography
                    variant="h5"
                    sx={{ color: "common.black", mb: 1.5 }}
                  >
                    {service.title}
                  </Typography>

                  {/*  Description */}
                  <Typography variant="body2" sx={{ color: "#6b7280", mb: 2 }}>
                    {service.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "primary.main",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      width: "fit-content",
                      opacity: 0,
                      transform: "translateX(-10px)",
                      transition: "0.5s",
                      "& svg": {
                        fontSize: "1rem",
                      },
                    }}
                    className="service_cta"
                  >
                    Learn More <ArrowForward />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
