export const siteConfig = {
  name: "PayChex",
  legalName: "PayChex International Marketing Limited",
  description:
    "PayChex International Marketing Limited is a Nigerian engineering, construction and technology services company. Since 2008 we have delivered complex projects for government institutions, development partners and enterprise clients.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/solutions" },
    { label: "Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Start a Conversation",
    href: "/contact",
  },
  footer: {
    positioning:
      "PayChex International Marketing Limited is a Nigerian engineering, construction and technology services company. Since 2008 we have delivered complex projects for government institutions, development partners and private-sector clients — with disciplined execution and clear accountability.",
    tagline: "Disciplined execution.",
    capabilities: [
      { label: "Technology", href: "/solutions/technology" },
      { label: "ICT Infrastructure", href: "/solutions/ict-infrastructure" },
      { label: "Events & Conference Management", href: "/solutions/events" },
      { label: "Training", href: "/solutions/training" },
      { label: "Business Process Outsourcing", href: "/solutions/bpo" },
      { label: "Procurement", href: "/solutions/procurement" },
      { label: "Construction Support", href: "/solutions/construction" },
      { label: "Digital Identity", href: "/solutions/digital-identity" },
      { label: "Logistics", href: "/solutions/logistics" },
    ],
    contact: {
      location: "Abuja, Nigeria",
      email: "info@paychexng.com",
      linkedIn: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/paychex",
      },
    },
  },
} as const;
