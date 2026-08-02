import { Box, Container, SxProps, Theme } from "@mui/material";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
  sx?: SxProps<Theme>;
}

export default function Section({ id, dark, sx, children }: SectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: dark ? "common.black" : "background.default",
        py: { xs: 10, md: 14 },
        ...sx,
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}
