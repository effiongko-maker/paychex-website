export const siteConfig = {
  name: "PayChex",
  legalName: "PayChex International Marketing Limited",
  description:
    "PayChex International Marketing Limited is a Nigerian integrated solutions partner. We bring together expertise in technology, facilities, construction, professional services and institutional programmes to help organisations deliver important work.",
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
      "PayChex International Marketing Limited brings together technology, facilities, construction, professional services and institutional programme delivery. Since 2008, we have worked with public and private organisations to turn complex requirements into practical results.",
    tagline: "Designed for Impact. Delivered with Purpose.",
    capabilities: [
      { label: "IT & Telecommunications", href: "/solutions#it-telecommunications" },
      { label: "Facility Management", href: "/solutions#facility-management" },
      { label: "Construction & Design", href: "/solutions#construction-design" },
      {
        label: "Consulting & Professional Services",
        href: "/solutions#consulting-professional",
      },
      {
        label: "Events & Conference Management",
        href: "/solutions#events-conference",
      },
    ],
    contact: {
      location: "Abuja, Nigeria",
      email: "info@paychexng.com",
      linkedIn: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/paychex-international-marketing/",
      },
    },
  },
} as const;
