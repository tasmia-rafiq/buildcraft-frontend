import { Stack, Typography } from "@mui/material";

interface SectionHeaderProps {
    headline: string;
    title: string;
    subtitle: string;
    darkBg?: boolean;
}

export default function SectionHeader({ headline, title, subtitle, darkBg }: SectionHeaderProps) {
  return (
    <Stack spacing={2} sx={{ maxWidth: "680px", mx: "auto", textAlign: "center", mb: { xs: 6, md: 8 } }}>
      <Typography
        variant="overline"
        color="primary"
        sx={{ fontWeight: "700", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 2, fontSize: "0.8rem" }}
      >
        — {headline}
      </Typography>
      <Typography variant="h2" sx={{ textTransform: "capitalize", color: darkBg ? "common.white" : "common.black" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: darkBg ? "#ffffff99" : "#6b7280" }}>
        {subtitle}
      </Typography>
    </Stack>
  );
}
