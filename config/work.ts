/**
 * Work page — portfolio organised by delivery area.
 * Capabilities answers "what can PayChex do?"
 * Work answers "what has PayChex actually delivered?"
 *
 * Events: ATU is featured on the main Work page.
 * Additional event evidence lives on the Events portfolio
 * (/projects/events) — not all listed on the main Work page.
 *
 * Photography rules:
 * - ATU → ATU Conference of Plenipotentiaries only
 * - UNGA80 / VivaTech / ITU / NCCIDE / NAIS → their projects only
 * - NIMC → NIMC NIN Enrolment Centres only
 * Do not reuse event photography on Homepage, About, or Capabilities.
 */

import type { MediaSource } from "@/types/media";
import { assets } from "@/config/assets";

export type WorkProject = {
  id: string;
  title: string;
  body: string;
  delivered: readonly string[];
  imageSide: "left" | "right";
  media: MediaSource | null;
  gallery?: readonly MediaSource[] | null;
  /** Poster / branding assets need contain fit so marks stay visible */
  mediaFit?: "cover" | "contain";
  featured?: boolean;
  location?: string;
  date?: string;
};

export type WorkAreaContinuation = {
  href: string;
  label: string;
  description: string;
};

export type WorkArea = {
  id: string;
  title: string;
  introduction: string;
  /**
   * Optional quiet label above evidence framing (rarely used).
   * Prefer letting area headings and project titles establish hierarchy.
   */
  selectedLabel?: string;
  /** Optional supporting line before projects (prose, not a structural label) */
  selectedIntroduction?: string;
  /**
   * How non-featured projects are arranged.
   * `grid` = supporting pair beside featured case study (IT section).
   */
  secondaryLayout?: "stack" | "grid";
  /** Restrained link to a deeper portfolio (e.g. Events) */
  portfolioContinuation?: WorkAreaContinuation;
  projects: readonly WorkProject[];
};

/** Shared ATU project, featured on Work page (single representative image) */
const atuConference: WorkProject = {
  id: "atu-cpl-2026",
  featured: true,
  title: "ATU Conference of Plenipotentiaries 2026",
  body: "A major institutional conference bringing together government representatives, industry stakeholders and senior participants within the African telecommunications ecosystem.",
  delivered: [
    "End-to-end conference management",
    "Delegate registration and accreditation",
    "Stakeholder coordination",
    "Protocol and VIP coordination",
    "Venue and event logistics",
    "Technical production and on-stage support",
  ],
  imageSide: "left",
  media: {
    type: "image",
    src: assets.images.home.capabilitiesPage.eventsFeature,
    alt: "ATU Conference of Plenipotentiaries 2026, conference hall prepared for institutional delivery",
    sizes: "(max-width: 1024px) 100vw, 48vw",
    priority: true,
  },
  gallery: null,
};

/**
 * Event portfolio case studies — /projects/events only.
 * Condensed delivery points for editorial presentation.
 * Order: ATU featured first, then breadth of delivery.
 */
export type EventCaseStudy = {
  id: string;
  index: string;
  category: string;
  title: string;
  location: string;
  date: string;
  body: string;
  delivered: readonly string[];
  imageSide: "left" | "right";
  featured?: boolean;
  media: MediaSource;
  gallery?: readonly MediaSource[];
};

const eventPortfolioCases: readonly EventCaseStudy[] = [
  {
    id: "atu-cpl-2026",
    index: "01",
    category: "Events & Conference Management",
    featured: true,
    title: "ATU Conference of Plenipotentiaries 2026",
    location: "Abuja, Nigeria",
    date: "2026",
    body: "A major institutional conference bringing together government representatives, industry stakeholders and senior participants within the African telecommunications ecosystem.",
    delivered: [
      "End-to-end conference management",
      "Delegate registration and accreditation",
      "Stakeholder, protocol and VIP coordination",
      "Venue and event logistics",
      "Technical production and on-stage support",
    ],
    imageSide: "left",
    media: {
      type: "image",
      src: assets.images.home.capabilitiesPage.eventsPanel,
      alt: "ATU–GSMA ministerial roundtable during the Conference of Plenipotentiaries 2026",
      sizes: "(max-width: 1024px) 100vw, 55vw",
      priority: true,
    },
    gallery: [
      {
        type: "image",
        src: assets.images.home.capabilitiesPage.eventsStage,
        alt: "Stage production and speaker delivery at the ATU Conference of Plenipotentiaries",
        sizes: "(max-width: 640px) 100vw, 55vw",
      },
    ],
  },
  {
    id: "nccide-12th-2024",
    index: "02",
    category: "Events & Conference Management",
    title: "12th Regular Meeting of NCCIDE",
    location: "Benue State, Nigeria",
    date: "December 2024",
    body: "Worked jointly with the Federal Ministry of Communications, Innovation & Digital Economy and the Benue State Government to coordinate planning, intergovernmental engagement and operational delivery.",
    delivered: [
      "Planning coordination",
      "Intergovernmental engagement",
      "Stakeholder coordination",
      "Operational delivery",
    ],
    imageSide: "right",
    media: {
      type: "image",
      src: assets.images.work.nccide.assembly,
      alt: "12th Regular Meeting of NCCIDE assembly in Benue State",
      sizes: "(max-width: 1024px) 100vw, 48vw",
    },
    gallery: [
      {
        type: "image",
        src: assets.images.work.nccide.stakeholders,
        alt: "Stakeholder group at the 12th Regular Meeting of NCCIDE",
        sizes: "(max-width: 640px) 100vw, 48vw",
      },
    ],
  },
  {
    id: "nais-2024",
    index: "03",
    category: "Events & Conference Management",
    title:
      "National Artificial Intelligence Strategy (NAIS) Stakeholder Engagement",
    location: "Abuja, Nigeria",
    date: "September 2024",
    body: "Coordinated national consultations supporting AI policy development, managing multi-sector stakeholder participation and event execution.",
    delivered: [
      "National stakeholder consultation coordination",
      "Multi-sector stakeholder participation",
      "Event planning and execution",
      "Stakeholder engagement and logistics",
    ],
    imageSide: "left",
    media: {
      type: "image",
      src: assets.images.work.nais.workshop,
      alt: "NAIS National Artificial Intelligence Strategy workshop speaker address",
      sizes: "(max-width: 1024px) 100vw, 48vw",
    },
    gallery: [
      {
        type: "image",
        src: assets.images.work.nais.engagement,
        alt: "NAIS stakeholders engagement podium and programme branding",
        sizes: "(max-width: 640px) 100vw, 48vw",
      },
    ],
  },
  {
    id: "itu-submarine-cable-2025",
    index: "04",
    category: "Events & Conference Management",
    title: "ITU Submarine Cable Summit",
    location: "Abuja, Nigeria",
    date: "February 2025",
    body: "International summit coordinated with government, development partners and global stakeholders.",
    delivered: [
      "Conference coordination and programme delivery",
      "Participant registration, accommodation and travel logistics",
      "Venue operations and technical production",
      "Stakeholder communications and event materials",
      "Risk, safety and operational planning",
    ],
    imageSide: "right",
    media: {
      type: "image",
      src: assets.images.work.ituSummit.plenary,
      alt: "ITU Submarine Cable Summit plenary session in Abuja",
      sizes: "(max-width: 1024px) 100vw, 48vw",
    },
    gallery: [
      {
        type: "image",
        src: assets.images.work.ituSummit.floor,
        alt: "Delegates and venue production at the ITU Submarine Cable Summit",
        sizes: "(max-width: 640px) 100vw, 48vw",
      },
    ],
  },
  {
    id: "vivatech-2025",
    index: "05",
    category: "Events & Conference Management",
    title: "Nigerian Delegation, VivaTech 2025",
    location: "Paris, France",
    date: "June 2025",
    body: "Coordinated Nigeria's participation and executive engagements at VivaTech, supporting the country's stakeholder interactions within the global digital-innovation ecosystem.",
    delivered: [
      "Nigeria's participation and pavilion coordination",
      "Executive and bilateral stakeholder engagement",
      "Event management and logistics support",
      "Communications coordination",
    ],
    imageSide: "left",
    media: {
      type: "image",
      src: assets.images.work.vivatech.hall,
      alt: "VivaTech 2025 exhibition floor in Paris during Nigeria's participation",
      sizes: "(max-width: 1024px) 100vw, 48vw",
    },
    gallery: [
      {
        type: "image",
        src: assets.images.work.vivatech.banner,
        alt: "Viva Technology 2025 event branding on the Paris exhibition floor",
        sizes: "(max-width: 640px) 100vw, 48vw",
      },
    ],
  },
  {
    id: "unga80-2025",
    index: "06",
    category: "Events & Conference Management",
    title: 'UNGA80 Stakeholder Event, "Connecting the Unconnected"',
    location: "New York, USA",
    date: "September 2025",
    body: "Coordinated international stakeholder engagement alongside development partners, managing programme structure, logistics and executive interface for a high-level digital-inclusion platform.",
    delivered: [
      "International stakeholder engagement",
      "Programme structure and coordination",
      "Logistics and executive-level interface",
      "High-level public and private sector participation",
    ],
    imageSide: "right",
    media: {
      type: "image",
      src: assets.images.work.unga80.banner,
      alt: "UNGA80 branded corridor at the stakeholder event venue in New York",
      sizes: "(max-width: 1024px) 100vw, 48vw",
    },
    gallery: [
      {
        type: "image",
        src: assets.images.work.unga80.assembly,
        alt: "United Nations General Assembly Hall context for UNGA80",
        sizes: "(max-width: 640px) 100vw, 48vw",
      },
    ],
  },
];

/**
 * Events portfolio — deeper track record linked from Work.
 * Not a primary nav item; reached from the Events area on Work.
 */
export const eventPortfolioPage = {
  path: "/projects/events",
  hero: {
    label: "Event portfolio",
    headline: "Selected event delivery.",
    lede: "From national stakeholder engagements to international conferences, we deliver programmes where coordination, credibility and execution matter.",
  },
  back: {
    href: "/projects",
    label: "← Back to Work",
  },
  selectedLabel: "Selected events",
  selectedIntroduction:
    "A selection of national and international stakeholder engagements, conferences and institutional programmes delivered by PayChex.",
  cases: eventPortfolioCases,
} as const;

export const workPage = {
  hero: {
    label: "Work",
    headline: "What we've delivered.",
    lede: "Selected projects across technology, infrastructure, construction, events and institutional delivery.",
    /**
     * Editorial index of delivery breadth — visual only, not navigation.
     * Project photography lives in the sections below.
     */
    index: [
      {
        index: "01",
        label: "IT & Telecommunications",
      },
      {
        index: "02",
        label: "Construction & Design",
      },
      {
        index: "03",
        label: "Events & Conference Management",
      },
      {
        index: "04",
        label: "Institutional & Public-Sector Delivery",
      },
    ],
  },
  areas: [
    {
      id: "events-conference",
      title: "Events & Conference Management",
      introduction:
        "Selected institutional events, conferences and stakeholder programmes delivered by PayChex.",
      portfolioContinuation: {
        href: eventPortfolioPage.path,
        label: "View featured events",
        description:
          "A selection of national and international conferences, stakeholder engagements and institutional programmes delivered by PayChex.",
      },
      projects: [atuConference],
    },
    {
      id: "it-telecommunications",
      title: "IT & Telecommunications",
      introduction:
        "Selected technology, connectivity and digital identity programmes PayChex has delivered.",
      selectedIntroduction:
        "Documented delivery across broadband infrastructure, campus connectivity and institutional communications systems.",
      secondaryLayout: "grid",
      projects: [
        {
          id: "identity",
          featured: true,
          title: "NIMC NIN Enrolment Centres",
          location: "Nationwide",
          body: "Nationwide identity enrolment and field mobilisation delivered for NIMC, deploying technology, field teams and operational control at institutional scale. The programme enrolled 500,000+ citizens and mobilised a nationwide network of 500+ field agents.",
          delivered: [
            "Nationwide NIN enrolment and data capture operations",
            "Deployment of 500+ field agents across the country",
            "Enrolment of 500,000+ citizens",
            "Programme coordination across multiple states",
            "Large-scale public engagement and field mobilisation",
          ],
          imageSide: "right" as const,
          mediaFit: "contain" as const,
          media: {
            type: "image" as const,
            src: assets.images.work.nimcEnrolment,
            alt: "NIMC National Identification Number enrolment centre, powered by PayChex International Marketing Ltd.",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
        {
          id: "emergency-communications",
          title: "Emergency Communications Centre Support",
          location: "NCC",
          body: "Management and technical support for Emergency Communication Centres on behalf of the NCC, sustaining national communication systems through monitoring, troubleshooting and operational response support.",
          delivered: [
            "Emergency Communication Centre management and support",
            "Technical support for national communication systems",
            "Hardware and software troubleshooting",
            "Real-time monitoring of mission-critical centres",
            "Emergency communication and response support",
          ],
          imageSide: "right" as const,
          media: {
            type: "image" as const,
            src: assets.images.home.catalogue.technology,
            alt: "Technology operations supporting institutional communications systems",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
        {
          id: "broadband-campus",
          title: "Broadband Infrastructure & Campus Connectivity",
          location: "NCC / USPF",
          body: "Broadband infrastructure deployed across tertiary institutions for NCC and USPF, including multi-state connectivity projects and campus networks coordinated across institutions and geographic zones.",
          delivered: [
            "Broadband infrastructure deployment across tertiary institutions",
            "Multi-state connectivity project execution",
            "Campus connectivity network implementation",
            "Coordination across institutions and geographic zones",
            "Institutional and regulatory coordination",
          ],
          imageSide: "left" as const,
          media: {
            type: "image" as const,
            src: assets.images.home.catalogue.ict,
            alt: "Field deployment of telecommunications cabling and broadband infrastructure materials",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
      ],
    },
    {
      id: "facility-management",
      title: "Facility Management",
      introduction:
        "Selected facility operations and site support engagements.",
      projects: [
        {
          id: "ncc-facility-management",
          featured: true,
          title: "NCC Multi-State Facility Management",
          location: "NCC",
          body: "Facility management and operational support across NCC facilities in multiple states, maintaining the physical environments, site operations and day-to-day requirements that keep critical institutional facilities running.",
          delivered: [
            "Multi-state facility management",
            "Day-to-day facility operations and site support",
            "Preventive and corrective maintenance coordination",
            "Contractor and service-provider coordination",
            "Facility inspections and operational reporting",
            "Support for safe, functional working environments",
          ],
          imageSide: "right" as const,
          media: {
            type: "image" as const,
            src: assets.images.home.catalogue.logistics,
            alt: "Facility and site support operations for institutional environments",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
      ],
    },
    {
      id: "construction-design",
      title: "Construction & Design",
      introduction:
        "Selected construction, fit-out and facilities delivery.",
      projects: [
        {
          id: "digital-parks",
          featured: true,
          title: "Digital Parks Development",
          location: "NCC, FCT, Kano & Maiduguri",
          body: "Construction and equipping of digital ICT park facilities, coordinating physical works, technical requirements and stakeholder delivery to prepare the facilities for operational use.",
          delivered: [
            "Digital park development",
            "Construction and infrastructure works",
            "Technical systems and equipment coordination",
            "Stakeholder and contractor coordination",
            "Commissioning and handover",
          ],
          imageSide: "left" as const,
          media: {
            type: "image" as const,
            src: assets.images.home.capabilities.infrastructure,
            alt: "Construction delivery on an institutional building site",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
        {
          id: "infrastructure-fitout-power",
          title: "Infrastructure, Fit-Out & Power Works",
          location: "NCC / FMCIDE",
          body: "Selected institutional infrastructure engagements delivered as distinct projects, including NITT office furnishing in Maiduguri, solar solutions, generator supply and commissioning, and digital infrastructure upgrade works.",
          delivered: [
            "Furnishing and interior fit-out of the constructed NITT office, Maiduguri",
            "Supply and commissioning support for a 100KVA generator, Ibadan",
            "Solar solutions delivery for FMCIDE, Abuja",
            "Digital infrastructure upgrade works for FMCIDE, Abuja",
            "Furniture and equipment supply, installation and commissioning across NCC locations",
          ],
          imageSide: "right" as const,
          media: null as MediaSource | null,
          gallery: null,
        },
        {
          id: "innovation-park-maiduguri",
          title: "Innovation Park Maiduguri",
          location: "Maiduguri",
          body: "Construction of Innovation Park Maiduguri, delivering physical works for an institutional innovation facility prepared for operational use.",
          delivered: [
            "Construction delivery for the innovation park facility",
            "Site and infrastructure works coordination",
            "Stakeholder coordination through delivery",
            "Progress toward facility readiness and handover",
          ],
          imageSide: "right" as const,
          media: {
            type: "image" as const,
            src: assets.images.home.catalogue.construction,
            alt: "Active construction works on an institutional infrastructure project",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
      ],
    },
    {
      id: "consulting-professional",
      title: "Consulting & Professional Services",
      introduction:
        "Selected advisory, training and professional services engagements.",
      projects: [
        {
          id: "digital-skills",
          featured: true,
          title: "Digital Skills & Workforce Development",
          body: "Large-scale digital skills and capacity-building programmes designed to equip participants with practical skills for employment, entrepreneurship and effective use of technology.",
          delivered: [
            "Digital skills training",
            "Digital entrepreneurship programmes",
            "Digital learning initiatives",
            "Participant mobilisation and coordination",
            "Training delivery and facilitation",
            "Knowledge transfer and capacity development",
          ],
          imageSide: "right" as const,
          media: {
            type: "image" as const,
            src: assets.images.home.catalogue.training,
            alt: "Participants in a professional digital skills and capacity-building workshop",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
        {
          id: "stakeholder-programme-engagement",
          title: "Stakeholder & Programme Engagement",
          body: "Stakeholder engagement and programme coordination supporting national and institutional initiatives involving government, industry and other participating organisations.",
          delivered: [
            "Stakeholder coordination",
            "Programme planning and engagement",
            "Government and institutional liaison",
            "Participant coordination",
            "Programme execution support",
          ],
          imageSide: "left" as const,
          media: {
            type: "image" as const,
            src: assets.images.home.audiences.government,
            alt: "Institutional environment supporting government and programme engagement",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
        {
          id: "technical-operational-training",
          title: "Technical & Operational Training",
          body: "Specialized training and capacity development supporting technical, operational and institutional requirements, leaving teams able to sustain what has been delivered.",
          delivered: [
            "Technical training",
            "Operational training",
            "Capacity building",
            "Training programme coordination",
            "Knowledge transfer",
            "Participant support",
          ],
          imageSide: "right" as const,
          media: null as MediaSource | null,
          gallery: null,
        },
      ],
    },
  ] as const satisfies readonly WorkArea[],
};
