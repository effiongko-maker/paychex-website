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
      "From technology and infrastructure to facilities, professional services and major events — the expertise PayChex brings to complex programme delivery.",
    media: {
      alt: "Multidisciplinary programme execution across engineering, technology and field operations",
    },
  },
  categories: {
    headline: {
      lead: "Five areas of expertise.",
      emphasis: "One integrated partner.",
    },
    supporting:
      "PayChex brings specialist capabilities together to deliver complex programmes across technology, infrastructure, facilities, professional services and institutional engagements.",
  },
  cta: {
    headline: {
      lead: "The right capability.",
      emphasis: "When it matters most.",
    },
    supporting:
      "One specialist capability or several working together — with one team accountable for delivery.",
    example:
      "For programmes that require technology, facilities, logistics, procurement and stakeholder management, PayChex can bring the right capabilities together under one delivery structure.",
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
  /** Card grid (default) or compact editorial list — Events uses list for balance */
  itemLayout?: "cards" | "list";
};

/** Overview catalogue — concise cards only. Detail lives on slug pages. */
export const capabilityFamilies: readonly CapabilityFamily[] = [
  {
    id: "it-telecommunications",
    title: "IT & Telecommunications",
    introduction:
      "Technology, connectivity and digital infrastructure that keep organisations connected and operating.",
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
    id: "facility-management",
    title: "Facility Management",
    introduction:
      "Reliable management of the physical environments organisations depend on every day.",
    items: [
      {
        title: "Facility Operations",
        description:
          "Day-to-day management of institutional facilities so environments stay usable, controlled and ready for the work they support.",
        href: "/solutions/construction",
      },
      {
        title: "Building & Technical Maintenance",
        description:
          "Maintenance and technical upkeep that protect the condition and continuity of physical environments.",
        href: "/solutions/construction",
      },
      {
        title: "Site Support",
        description:
          "Warehousing, transport and field logistics across people, materials and sites.",
        href: "/solutions/logistics",
      },
    ],
  },
  {
    id: "construction-design",
    title: "Construction & Design",
    introduction:
      "From design and planning through construction, renovation and delivery.",
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
    id: "consulting-professional",
    title: "Consulting & Professional Services",
    introduction:
      "Helping organisations improve how they work, make better decisions and execute more effectively.",
    items: [
      {
        title: "Procurement",
        description:
          "Sourcing and supply sequenced to the delivery schedule.",
        href: "/solutions/procurement",
      },
      {
        title: "Training & Capacity Development",
        description:
          "Practical learning that leaves teams able to sustain results.",
        href: "/solutions/training",
      },
      {
        title: "Managed Services / BPO",
        description:
          "Contact centres, data capture and back-office capacity to institutional standards.",
        href: "/solutions/bpo",
      },
    ],
  },
  {
    id: "events-conference",
    title: "Events & Conference Management",
    introduction:
      "Designing and delivering high-level events, conferences and institutional programmes.",
    itemLayout: "list",
    items: [
      {
        title: "Conference Management",
        description:
          "Conferences and summits delivered end-to-end to institutional standards.",
        href: "/solutions/events",
      },
      {
        title: "Event Design & Production",
        description:
          "Concept, agenda and production planned for credibility on the day.",
        href: "/solutions/events",
      },
      {
        title: "Delegate Management & Accreditation",
        description:
          "Registration, access and delegate handling for high-stakes institutional gatherings.",
        href: "/solutions/events",
      },
      {
        title: "Stakeholder Coordination",
        description:
          "Stakeholder engagement planned and managed alongside event delivery.",
        href: "/solutions/events",
      },
      {
        title: "Event Logistics & Technical Support",
        description:
          "Venue, movement, production and technical support sequenced to the programme brief.",
        href: "/solutions/events",
      },
      {
        title: "Turnkey Programme Delivery",
        description:
          "Concept through close-out under one accountable delivery structure.",
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
