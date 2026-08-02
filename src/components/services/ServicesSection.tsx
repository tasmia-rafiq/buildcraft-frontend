import {
  Architecture,
  ArrowForward,
  Assignment,
  Business,
  Construction,
  Home,
  Palette,
} from "@mui/icons-material";
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
import SectionHeader from "../common/SectionHeader";

const SERVICES_DATA = [
  {
    title: "Residential Construction",
    description:
      "Crafting dream homes with precision engineering and premium materials. From single-family homes to luxury estates.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    icon: <Home />,
  },
  {
    title: "Commercial Construction",
    description:
      "Building modern commercial spaces that drive business growth. Office buildings, retail centers, and mixed-use developments.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    icon: <Business />,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transforming existing spaces with innovative design and expert craftsmanship. Complete interior and exterior renovations.",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
    icon: <Construction />,
  },
  {
    title: "Interior Design",
    description:
      "Creating stunning interiors that blend aesthetics with functionality. Customized design solutions for every space.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    icon: <Palette />,
  },
  {
    title: "Architecture & Planning",
    description:
      "Innovative architectural designs that push boundaries while respecting environmental and structural principles.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    icon: <Architecture />,
  },
  {
    title: "Project Management",
    description:
      "End-to-end project oversight ensuring timely delivery, budget adherence, and quality standards at every phase.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    icon: <Assignment />,
  },
];

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services"
      sx={{ py: { xs: 10, md: 14 }, backgroundColor: "#f8f9fa"}}
    >
      <Container>
        <SectionHeader
            headline="our services"
            title="What we offer"
            subtitle="Comprehensive construction services tailored to transform your ideas into extraordinary built environments."
        />

        <Grid container spacing={3}>
          {SERVICES_DATA.map((service, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  border: "1px solid",
                  borderColor: "divider",
                  overflow: "hidden",
                  backgroundColor: "background.paper",
                  boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 24px",
                  transition: "0.5s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "rgba(0, 0, 0, 0.12) 0px 24px 60px",
                    ".service_img": {
                      transform: "scale(1.1)",
                    },
                    ".service_icon": {
                      backgroundColor: "primary.main",
                      color: "common.black",
                    },
                    ".service_cta": {
                        opacity: 1,
                        transform: "translateX(0px)",
                    }
                  },
                }}
              >
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
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      backgroundColor: "rgba(245, 166, 35, 0.1)",
                      border: "3px solid rgb(255, 255, 255)",
                      color: "primary.main",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: 2,
                      mt: "-46px",
                      mb: 2,
                      position: "relative",
                      zIndex: 2,
                      transition: "0.5s",
                      "& svg": { fontSize: "1.5rem" },
                    }}
                    className="service_icon"
                  >
                    {service.icon}
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
