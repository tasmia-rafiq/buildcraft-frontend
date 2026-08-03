import { Stat, NavItem, Project, ProjectCategory, TeamMember } from "@/types";
import { AccessTime, Architecture, Assignment, Business, Construction, Email, Facebook, Home, Instagram, LinkedIn, LocationOn, Palette, Phone, Twitter, YouTube } from "@mui/icons-material";

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "testimonials",
    label: "Testimonials",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export const stats: Stat[] = [
  {
    value: 850,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 25,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 200,
    suffix: "+",
    label: "Expert Team Members",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export const BRAND_LOGOS = [
  {
    name: "ArchStudio",
    url: "https://via.placeholder.com/180x60/ffffff/999999?text=ArchStudio",
  },
  {
    name: "SteelCore",
    url: "https://via.placeholder.com/180x60/ffffff/999999?text=SteelCore",
  },
  {
    name: "ConcreteMax",
    url: "https://via.placeholder.com/180x60/ffffff/999999?text=ConcreteMax",
  },
  {
    name: "EliteBuild",
    url: "https://via.placeholder.com/180x60/ffffff/999999?text=EliteBuild",
  },
  {
    name: "UrbanPlan",
    url: "https://via.placeholder.com/180x60/ffffff/999999?text=UrbanPlan",
  },
  {
    name: "GreenBuild",
    url: "https://via.placeholder.com/180x60/ffffff/999999?text=GreenBuild",
  },
];

export const PERKS = [
  "Licensed and insured professionals",
  "Comprehensive project planning",
  "Sustainable building practices",
  "State-of-the-art equipment",
  "24/7 project monitoring",
  "Industry-leading warranty",
];

// Services
export const SERVICES_DATA = [
  {
    title: "Residential Construction",
    description:
      "Crafting dream homes with precision engineering and premium materials. From single-family homes to luxury estates.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    icon: Home,
  },
  {
    title: "Commercial Construction",
    description:
      "Building modern commercial spaces that drive business growth. Office buildings, retail centers, and mixed-use developments.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    icon: Business,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transforming existing spaces with innovative design and expert craftsmanship. Complete interior and exterior renovations.",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
    icon: Construction,
  },
  {
    title: "Interior Design",
    description:
      "Creating stunning interiors that blend aesthetics with functionality. Customized design solutions for every space.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    icon: Palette,
  },
  {
    title: "Architecture & Planning",
    description:
      "Innovative architectural designs that push boundaries while respecting environmental and structural principles.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
    icon: Architecture,
  },
  {
    title: "Project Management",
    description:
      "End-to-end project oversight ensuring timely delivery, budget adherence, and quality standards at every phase.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    icon: Assignment,
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "All",
  "Commercial",
  "Residential",
  "Hospitality",
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Skyline Tower",
    category: "Commercial",
    location: "Manhattan, NY",
    area: "450,000 sq ft",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 2,
    title: "Modern Villa Estate",
    category: "Residential",
    location: "Beverly Hills, CA",
    area: "12,000 sq ft",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 3,
    title: "Corporate Innovation Hub",
    category: "Commercial",
    location: "Austin, TX",
    area: "280,000 sq ft",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
  },
  {
    id: 4,
    title: "Luxury Coastal Resort",
    category: "Hospitality",
    location: "Miami, FL",
    area: "350,000 sq ft",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
  },
  {
    id: 5,
    title: "Urban Living Lofts",
    category: "Residential",
    location: "Chicago, IL",
    area: "180,000 sq ft",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
  },
  {
    id: 6,
    title: "Metropolitan Mall",
    category: "Commercial",
    location: "Dallas, TX",
    area: "520,000 sq ft",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Jonathan Mitchell",
    role: "CEO & Founder",
    description: "25+ years leading landmark construction projects across North America.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Lead Architect",
    description: "Award-winning architect with a passion for sustainable design innovation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Chief Engineer",
    description: "Structural engineering expert overseeing complex builds worldwide.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    id: 4,
    name: "Emily Thompson",
    role: "Project Director",
    description: "Operations mastermind ensuring every project exceeds client expectations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export const CONTACT_INFO = [
  {
    title: "Visit Us",
    value: "1247 Construction Ave, Suite 400, New York, NY 10001",
    icon: LocationOn,
  },
  {
    title: "Call Us",
    value: "+1 (555) 234-5678",
    icon: Phone,
    href: "tel:+15552345678",
  },
  {
    title: "Email Us",
    value: "info@buildcraft.com",
    icon: Email,
    href: "mailto:info@buildcraft.com",
  },
  {
    title: "Working Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM",
    icon: AccessTime,
  },
];

export const SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation",
  "Interior Design",
  "Architecture",
  "Project Consultation",
];

// Footer data
export const quickLinks = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Testimonials",
  "Contact",
];

export const services = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Remodeling",
  "Interior Design",
  "Architecture & Planning",
  "Project Management",
];

export const socials = [
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "David Harrison",
    designation: "CEO, Harrison Enterprises",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    review:
      "BuildCraft transformed our vision into reality. Their attention to detail and commitment to excellence made our corporate headquarters a landmark building. Truly exceptional work.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    designation: "Property Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    review:
      "Outstanding craftsmanship from start to finish. Every deadline was met and the quality exceeded our expectations.",
  },
  {
    id: 3,
    name: "Michael Carter",
    designation: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    review:
      "Professional, transparent and incredibly skilled. We'd absolutely choose BuildCraft again for future projects.",
  },
];