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
import { NavButtonStyles, quoteButtonStyles } from "./Navbar.styles";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      color="transparent"
    >
      <Container maxWidth="xl">
        <Toolbar
          component="nav"
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 48, sm: 64, md: 80 },
          }}
        >
          {/* LOGO */}
          <Logo />

          {/* Navigation Links */}
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {navItems.map((item, index) => {
              const active = index === 0;
              return (
                <Button
                  key={item.label}
                  href={item.href}
                  LinkComponent={Link}
                  sx={NavButtonStyles(active)}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* CTA Buttons */}
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
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

            <Button
              variant="contained"
              sx={quoteButtonStyles}
            >
              Get a Quote
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
