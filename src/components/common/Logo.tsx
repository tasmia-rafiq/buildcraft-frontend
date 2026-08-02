import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Logo() {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        textDecoration: "none",
        color: "common.white",
      }}
    >
      <Box
        component="div"
        sx={{
          width: 40,
          height: 40,
          background:
            "linear-gradient(135deg, rgb(245, 166, 35) 0%, rgb(212, 137, 26) 100%)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: "1.2rem",
          color: "#0a0a0a",
          fontFamily: "var(--font-playfair-display)",
        }}
      >
        BC
      </Box>

      <Typography
        component="span"
        sx={{
          fontWeight: 700,
          color: "common.white",
          fontFamily: "var(--font-playfair-display)",
          fontSize: "1.6rem",
        }}
      >
        Build
        <Box component="span" sx={{ color: "primary.main" }}>
          Craft
        </Box>
      </Typography>
    </Box>
  );
}
