"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../common/Logo";
import { navItems } from "@/constants";
import { Phone } from "@mui/icons-material";
import {
  NavButtonStyles,
  navHeaderStyles,
  quoteButtonStyles,
} from "./Navbar.styles";
import MobileMenu from "./MobileMenu";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useNavbar } from "@/hooks/useNavbar";

export default function Navbar() {
  const { activeSection, scrolled } = useNavbar();
  const scrollToSection = useScrollToSection();

  return (
    <AppBar elevation={0} position="fixed" sx={navHeaderStyles(scrolled)}>
      <Container maxWidth="xl">
        <Toolbar
          component="nav"
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 70, md: 80 },
          }}
        >
          {/* LOGO */}
          <Logo />

          {/* Navigation Links */}
          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navItems.map((item) => {
              const active = activeSection === item.id;
              return (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  sx={NavButtonStyles(active)}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mr: 1,
              }}
            >
              <Phone sx={{ color: "primary.main", fontSize: 18 }} />

              <Typography
                component="a"
                href="tel:+15552345678"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  "&:hover": { color: "primary.main" },
                  transition: "all .3s ease",
                }}
              >
                +1 (555) 234-5678
              </Typography>
            </Box>

            <Button variant="contained" sx={quoteButtonStyles} onClick={() => scrollToSection("contact")}>
              Get a Quote
            </Button>
          </Box>

          {/* Mobile */}
          <MobileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
