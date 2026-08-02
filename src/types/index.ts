export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export type ProjectCategory =
  | "All"
  | "Commercial"
  | "Residential"
  | "Hospitality";

export interface Project {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  location: string;
  area: string;
  year: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}