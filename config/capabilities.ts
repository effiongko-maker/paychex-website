import { assets } from "@/config/assets";

/**
 * Capabilities overview — concise executive catalogue.
 * Detail and deliverables live on individual capability pages.
 * Work / projects live on the Work page only.
 */

export const capabilitiesHub = {
  hero: {
    headline: {
      lead: "Specialist capability.",
      emphasis: "Disciplined execution.",
    },
    supporting:
      "Technology, infrastructure, operations and people — the disciplines PayChex brings to complex programme delivery.",
    media: {
      alt: "Multidisciplinary programme execution across engineering, technology and field operations",
    },
  },
  categories: {
    headline: "Four disciplines.",
    supporting:
      "Engage one capability or several. Ownership stays the same.",
  },
  cta: {
    headline: {
      lead: "The right capability.",
      emphasis: "When it matters most.",
    },
    supporting:
      "One specialist discipline or several working together — we assemble what the programme requires.",
    primary: {
      label: "Discuss your project",
      href: "/contact",
    },
    secondary: {
      label: "See our work",
      href: "/projects",
    },
  },
};

export type CapabilityItem = {
  title: string;
  description: string;
  href: string;
};

export type CapabilityFamily = {
  id: string;
  title: string;
  introduction: string;
  items: readonly CapabilityItem[];
};

/** Overview catalogue — concise cards only. Detail lives on slug pages. */
export const capabilityFamilies: readonly CapabilityFamily[] = [
  {
    id: "technology",
    title: "Technology",
    introduction:
      "Systems institutions can depend on — planned, deployed and supported.",
    items: [
      {
        title: "Software & Platforms",
        description:
          "Digital systems built for how institutions operate day to day — not only at launch.",
        href: "/solutions/technology",
      },
      {
        title: "ICT Infrastructure",
        description:
          "Networks and connectivity environments for institutions operating at scale.",
        href: "/solutions/ict-infrastructure",
      },
      {
        title: "Digital Identity",
        description:
          "Enrolment and data capture where accuracy and field discipline matter.",
        href: "/solutions/digital-identity",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    introduction:
      "Physical environments delivered with engineering discipline.",
    items: [
      {
        title: "Engineering & Construction",
        description:
          "Facilities and construction support that make institutional operations possible.",
        href: "/solutions/construction",
      },
      {
        title: "Fit-outs & Facilities",
        description:
          "Outfitting and readiness so buildings can host the systems and teams that follow.",
        href: "/solutions/construction",
      },
      {
        title: "Project Supervision",
        description:
          "Schedule, quality and risk controlled through completion and handover.",
        href: "/solutions/construction",
      },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    introduction:
      "The machinery that keeps programmes moving.",
    items: [
      {
        title: "Procurement",
        description:
          "Sourcing and supply sequenced to the delivery schedule.",
        href: "/solutions/procurement",
      },
      {
        title: "Logistics",
        description:
          "Warehousing, transport and field logistics across people, materials and sites.",
        href: "/solutions/logistics",
      },
      {
        title: "Managed Operations",
        description:
          "Contact centres, data capture and back-office capacity to institutional standards.",
        href: "/solutions/bpo",
      },
    ],
  },
  {
    id: "people",
    title: "People & Delivery",
    introduction:
      "Capability that continues after implementation.",
    items: [
      {
        title: "Training & Capacity Development",
        description:
          "Practical learning that leaves teams able to sustain results.",
        href: "/solutions/training",
      },
      {
        title: "Events & Stakeholder Engagement",
        description:
          "Conferences, summits and engagement delivered to institutional standards.",
        href: "/solutions/events",
      },
    ],
  },
];

/** Individual capability detail pages (deep links). */
export type CapabilityPage = {
  slug: string;
  title: string;
  headline: string;
  supporting: string;
  problem: string;
  delivery: readonly string[];
  outcomes: string;
  media: {
    src: string;
    alt: string;
  };
};

export const capabilityPages = [
  {
    slug: "technology",
    title: "Technology",
    headline: "Systems institutions can actually run.",
    supporting:
      "We build and deploy software and digital platforms that improve how government and enterprise organisations operate — day after day, not only at launch.",
    problem:
      "Too many technology projects stop at installation. Institutions need systems their teams can operate, measure and sustain.",
    delivery: [
      "Requirements definition against operational realities",
      "Platform configuration, deployment and handover",
      "Support that keeps systems performing after go-live",
    ],
    outcomes:
      "Technology that holds under real institutional use — with clear ownership through delivery and support.",
    media: {
      src: assets.images.home.catalogue.technology,
      alt: "Digital systems and technology operations",
    },
  },
  {
    slug: "ict-infrastructure",
    title: "ICT Infrastructure",
    headline: "Connectivity built to stay reliable.",
    supporting:
      "We design, install and sustain ICT environments — networks, hardware and technology infrastructure — for institutions that cannot afford downtime.",
    problem:
      "Connectivity projects fail when deployment ignores field conditions, maintenance and the teams who must keep systems running.",
    delivery: [
      "Network and infrastructure design for operational scale",
      "Supply, installation and commissioning",
      "Maintenance and support that protect uptime",
    ],
    outcomes:
      "ICT environments that institutions can rely on across sites, regions and successive programme cycles.",
    media: {
      src: assets.images.home.catalogue.ict,
      alt: "ICT networking and connectivity infrastructure",
    },
  },
  {
    slug: "events",
    title: "Events & Conference Management",
    headline: "Gatherings that meet institutional standards.",
    supporting:
      "We manage conferences, summits and stakeholder events from concept through logistics, production and on-site delivery.",
    problem:
      "High-stakes institutional events fail when logistics, production and stakeholder management are treated as afterthoughts.",
    delivery: [
      "Concept, agenda and stakeholder planning",
      "Venue, logistics and production management",
      "On-site delivery with clear ownership through close-out",
    ],
    outcomes:
      "Events that run to brief — professional, controlled and credible for the institutions hosting them.",
    media: {
      src: assets.images.home.catalogue.events,
      alt: "Conference and institutional event delivery",
    },
  },
  {
    slug: "training",
    title: "Training & Capacity Development",
    headline: "Capability that remains after handover.",
    supporting:
      "We deliver practical training that leaves teams able to operate what has been installed — not workshops that fade after the session.",
    problem:
      "Projects that transfer equipment without transferring capability leave institutions dependent and outcomes fragile.",
    delivery: [
      "Needs assessment against real operating roles",
      "Practical training designed for the work people will do",
      "Knowledge transfer that supports lasting operational strength",
    ],
    outcomes:
      "Teams who can sustain results — reducing reliance on external support after delivery.",
    media: {
      src: assets.images.home.catalogue.training,
      alt: "Professional training and capacity development",
    },
  },
  {
    slug: "bpo",
    title: "Business Process Outsourcing",
    headline: "Operations managed to institutional standards.",
    supporting:
      "We run contact centres, data capture and back-office operations for organisations that need reliable capacity without building everything in-house.",
    problem:
      "Critical processes stall when institutions lack dedicated capacity, clear SLAs or operators who understand public-sector and enterprise standards.",
    delivery: [
      "Process design and service-level definition",
      "Staffed operations for contact, data and back-office work",
      "Reporting and continuous operational control",
    ],
    outcomes:
      "Managed operations that protect service quality while institutions focus on their core mandate.",
    media: {
      src: assets.images.home.catalogue.bpo,
      alt: "Managed operations and business process outsourcing",
    },
  },
  {
    slug: "procurement",
    title: "Procurement",
    headline: "Sourcing that keeps programmes moving.",
    supporting:
      "We manage procurement and supply so materials, equipment and partners arrive sequenced against the delivery schedule.",
    problem:
      "Programmes lose months when procurement is slow, poorly specified or disconnected from field timelines.",
    delivery: [
      "Specification and vendor assessment",
      "Sourcing, contracting and supply sequencing",
      "Delivery tracking against programme milestones",
    ],
    outcomes:
      "Procurement that protects schedule — not paperwork that arrives after the window has closed.",
    media: {
      src: assets.images.home.catalogue.procurement,
      alt: "Procurement and supply operations",
    },
  },
  {
    slug: "logistics",
    title: "Logistics",
    headline: "Movement with schedule discipline.",
    supporting:
      "We manage warehousing, transport and field logistics across people, materials and sites — so deployment does not stall in transit.",
    problem:
      "Field programmes fail when materials, teams and equipment cannot reach the right place at the right time.",
    delivery: [
      "Warehousing and inventory control",
      "Transport planning across jurisdictions",
      "Field logistics support during mobilisation and delivery",
    ],
    outcomes:
      "Logistics that make deployment predictable — especially across multi-site institutional programmes.",
    media: {
      src: assets.images.home.catalogue.logistics,
      alt: "Logistics, warehousing and transport operations",
    },
  },
  {
    slug: "digital-identity",
    title: "Digital Identity",
    headline: "Enrolment and data capture you can trust.",
    supporting:
      "We deliver data capture and enrolment services that support identity programmes where accuracy, process control and field discipline matter.",
    problem:
      "Identity programmes lose public trust when enrolment is inconsistent, poorly supervised or unable to scale across locations.",
    delivery: [
      "Enrolment process design and field mobilisation",
      "Data capture operations at institutional scale",
      "Quality control and handover that protect data integrity",
    ],
    outcomes:
      "Identity operations that institutions can stand behind — accurate, controlled and deliverable at scale.",
    media: {
      src: assets.images.home.catalogue.identity,
      alt: "Digital identity enrolment and data capture",
    },
  },
  {
    slug: "construction",
    title: "Construction Support",
    headline: "Infrastructure that enables the work.",
    supporting:
      "We deliver facilities, fit-outs and construction support that make technology and institutional operations possible on the ground.",
    problem:
      "Technology and programme delivery stall when the physical environment is unfinished, unfit or poorly controlled.",
    delivery: [
      "Scope definition against operational requirements",
      "Construction support, fit-out and facilities delivery",
      "Project control through completion and handover",
    ],
    outcomes:
      "Physical environments ready for the systems and teams that must operate in them.",
    media: {
      src: assets.images.home.catalogue.construction,
      alt: "Construction support and field infrastructure work",
    },
  },
] as const satisfies readonly CapabilityPage[];

export function getCapabilityBySlug(slug: string) {
  return capabilityPages.find((page) => page.slug === slug);
}

export const capabilitySlugs = capabilityPages.map((page) => page.slug);
