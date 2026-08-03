"use client";

import Link from "next/link";
import { useState } from "react";

import { Close, Menu, Phone } from "@mui/icons-material";

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import Logo from "../common/Logo";
import { navItems } from "@/constants";
import { quoteButtonStyles } from "./Navbar.styles";
import { useNavbar } from "@/hooks/useNavbar";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function MobileMenu() {
  const {activeSection} = useNavbar();
  const scrollToSection = useScrollToSection();
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleToggle}
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },
          color: "common.white",
        }}
      >
        <Menu />
      </IconButton>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              width: 320,
              bgcolor: "#0A0A0A",
              color: "common.white",
              px: 3,
              py: 2,
            },
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Logo />

          <IconButton onClick={handleClose} sx={{ color: "common.white" }}>
            <Close />
          </IconButton>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,.08)",
            mb: 2,
          }}
        />

        {/* Navigation */}
        <List disablePadding>
          {navItems.map((item) => {
            const active = activeSection === item.id;

            return (
              <ListItemButton
                key={item.label}
                onClick={() => {
                  scrollToSection(item.id);
                  handleClose();
                }}
                sx={{
                  borderRadius: 2,
                  mb: 1,

                  "&:hover": {
                    bgcolor: "rgba(245,166,35,.08)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      sx: {
                        color: active ? "primary.main" : "text.primary",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        py: 0,
                      },
                    },
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,.08)",
            my: 3,
          }}
        />

        {/* Phone */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 3,
          }}
        >
          <Phone
            sx={{
              color: "primary.main",
            }}
          />

          <Typography
            component="a"
            href="tel:+15552345678"
            sx={{
              color: "grey.300",
              textDecoration: "none",

              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            +1 (555) 234-5678
          </Typography>
        </Box>

        {/* CTA */}
        <Button fullWidth variant="contained" sx={quoteButtonStyles}>
          Get a Quote
        </Button>
      </Drawer>
    </>
  );
}
