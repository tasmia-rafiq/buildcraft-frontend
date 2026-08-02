"use client";

import { useState } from "react";
import { Grid, MenuItem, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";
import PrimaryButton from "../common/PrimaryButton";

import {
  formWrapperStyles,
  submitButtonStyles,
  textFieldStyles,
} from "./Contact.styles";
import { SERVICES } from "@/constants";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  details: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log(values);

    setValues(initialValues);
  };

  return (
    <Grid component="form" onSubmit={handleSubmit} sx={formWrapperStyles}>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="First Name"
            placeholder="John"
            value={values.firstName}
            onChange={handleChange("firstName")}
            sx={textFieldStyles}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Last Name"
            placeholder="Doe"
            value={values.lastName}
            onChange={handleChange("lastName")}
            sx={textFieldStyles}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            type="email"
            label="Email Address"
            placeholder="john@example.com"
            value={values.email}
            onChange={handleChange("email")}
            sx={textFieldStyles}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="+1 (555) 000-0000"
            value={values.phone}
            onChange={handleChange("phone")}
            sx={textFieldStyles}
          />
        </Grid>

        <Grid size={12}>
          <TextField
            select
            fullWidth
            label="Service Interested In"
            value={values.service}
            onChange={handleChange("service")}
            sx={textFieldStyles}
          >
            {SERVICES.map((service) => (
              <MenuItem key={service} value={service}>
                {service}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            required
            multiline
            minRows={5}
            label="Project Details"
            placeholder="Tell us about your project..."
            value={values.details}
            onChange={handleChange("details")}
            sx={textFieldStyles}
          />
        </Grid>

        <Grid size={12}>
          <PrimaryButton
            type="submit"
            fullWidth
            text="Send Message"
            endIcon={<Send />}
            sx={submitButtonStyles}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
