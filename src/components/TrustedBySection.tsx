import { BRAND_LOGOS } from "@/constants";
import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function TrustedBySection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#f8f9fa",
        borderBottomColor: "rgba(0, 0, 0, 0.05)",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1280 }}>
        <Typography
          variant="overline"
          component="span"
          sx={{
            display: "block",
            textAlign: "center",
            letterSpacing: "0.15em",
            color: "text.secondary",
            fontWeight: 700,
            mb: 4,
          }}
        >
          TRUSTED BY INDUSTRY LEADERS
        </Typography>

        {/* Logo Grid Row */}
        <Box>
          <Stack
            direction="row"
            useFlexGap
            spacing={{ xs: 2, md: 4 }}
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {BRAND_LOGOS.map((logo) => (
              <Box
                key={logo.name}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px 32px",
                  filter: "grayscale(100%) opacity(0.4)",
                  transition: "0.3s",
                  color: "text.secondary",
                  "&:hover": {
                    filter: "grayscale(0%) opacity(1)",
                  }
                }}
              >
                <Image
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    width={140}
                    height={30}
                    style={{
                        maxHeight: 40,
                        width: "100%",
                        objectFit: "contain",                        
                    }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
