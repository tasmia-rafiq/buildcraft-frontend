import { Button, ButtonProps } from "@mui/material";

interface PrimaryButtonProps extends ButtonProps {
    text: string;
}

export default function PrimaryButton({ text, sx, ...props }: PrimaryButtonProps) {
  return (
    <Button
      size="large"
      sx={{
        fontSize: "1rem",
        padding: "14.4px 32px",
        ...sx
      }}
      {...props}
    >
      {text}
    </Button>
  );
}
