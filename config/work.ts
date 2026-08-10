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
  /** Optional label above additional (non-featured) projects */
  selectedLabel?: string;
  /** Supporting line under the selected-projects label */
  selectedIntroduction?: string;
  /** Restrained link to a deeper portfolio (e.g. Events) */
  portfolioContinuation?: WorkAreaContinuation;
  projects: readonly WorkProject[];
};

/** Shared ATU project — featured on Work and Events portfolio */
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
    alt: "ATU Conference of Plenipotentiaries 2026 — conference hall prepared for institutional delivery",
    sizes: "(max-width: 1024px) 100vw, 48vw",
    priority: true,
  },
  gallery: [
    {
      type: "image",
      src: assets.images.home.capabilitiesPage.eventsPanel,
      alt: "ATU–GSMA ministerial roundtable panel during the Conference of Plenipotentiaries",
      sizes: "(max-width: 640px) 100vw, 46vw",
    },
    {
      type: "image",
      src: assets.images.home.capabilitiesPage.eventsStage,
      alt: "Stage production and speaker delivery at the ATU Conference of Plenipotentiaries",
      sizes: "(max-width: 640px) 100vw, 46vw",
    },
  ],
};

/** Additional event projects — Events portfolio only (not main Work page) */
const selectedEventProjects: readonly WorkProject[] = [
  {
    id: "unga80-2025",
    title: 'UNGA80 Stakeholder Event — "Connecting the Unconnected"',
    location: "New York, USA",
    date: "September 2025",
    body: "Coordinated international stakeholder engagement alongside development partners, managing programme structure, logistics and executive interface for a high-level digital-inclusion platform.",
    delivered: [
      "International stakeholder engagement",
      "Programme structure and coordination",
      "Logistics management",
      "Executive-level interface",
      "Participation of high-level public and private sector stakeholders",
    ],
    imageSide: "left",
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
        sizes: "(max-width: 640px) 100vw, 46vw",
      },
    ],
  },
  {
    id: "vivatech-2025",
    title: "Nigerian Delegation — VivaTech 2025",
    location: "Paris, France",
    date: "June 2025",
    body: "Coordinated Nigeria's participation and executive engagements at VivaTech, supporting the country's stakeholder interactions within the global digital-innovation ecosystem.",
    delivered: [
      "Executive stakeholder coordination",
      "Nigeria's participation coordination",
      "Pavilion coordination",
      "Logistics",
      "Bilateral meeting coordination",
      "Stakeholder engagement facilitation",
      "Event management support",
      "Communications coordination",
    ],
    imageSide: "right",
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
        sizes: "(max-width: 640px) 100vw, 46vw",
      },
    ],
  },
  {
    id: "itu-submarine-cable-2025",
    title: "ITU Submarine Cable Summit",
    location: "Abuja, Nigeria",
    date: "February 2025",
    body: "International summit coordinated with government, development partners and global stakeholders.",
    delivered: [
      "Summit coordination",
      "Event production and delivery",
      "Logistics",
      "Scheduling",
      "Venue operations",
      "Participant registration",
      "Accommodation coordination",
      "Travel coordination",
      "Risk and safety planning",
      "Stakeholder communications",
      "Event materials and branding",
    ],
    imageSide: "left",
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
        sizes: "(max-width: 640px) 100vw, 46vw",
      },
    ],
  },
  {
    id: "nccide-12th-2024",
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
        sizes: "(max-width: 640px) 100vw, 46vw",
      },
    ],
  },
  {
    id: "nais-2024",
    title:
      "National Artificial Intelligence Strategy (NAIS) Stakeholder Engagement",
    location: "Abuja, Nigeria",
    date: "September 2024",
    body: "Coordinated national consultations supporting AI policy development, managing multi-sector stakeholder participation and event execution.",
    delivered: [
      "National stakeholder consultation coordination",
      "Multi-sector stakeholder participation",
      "Event planning and execution",
      "Stakeholder engagement",
      "Event logistics",
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
        sizes: "(max-width: 640px) 100vw, 46vw",
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
    lede: "Selected examples of institutional conferences, stakeholder engagements and programme delivery across national and international contexts.",
  },
  back: {
    href: "/projects",
    label: "← Back to Work",
  },
  featured: atuConference,
  selectedLabel: "Selected events",
  selectedIntroduction:
    "A selection of national and international stakeholder engagements, conferences and institutional programmes delivered by PayChex.",
  selected: selectedEventProjects,
} as const;

export const workPage = {
  hero: {
    label: "Work",
    headline: "What we've delivered.",
    lede: "Selected projects across infrastructure, technology, events and public-sector delivery — showing where PayChex has put its capabilities into practice.",
    /**
     * Asymmetric portfolio preview — breadth across delivery areas.
     * Not ATU-dominant; ATU remains the featured Events project below.
     */
    previews: [
      {
        id: "it-telecommunications",
        index: "01",
        category: "IT & Telecommunications",
        src: assets.images.home.catalogue.ict,
        alt: "Field deployment of telecommunications cabling and infrastructure materials",
        role: "secondary" as const,
      },
      {
        id: "construction-design",
        index: "02",
        category: "Construction & Design",
        src: assets.images.home.capabilities.infrastructure,
        alt: "Construction delivery on an active institutional building site",
        role: "primary" as const,
      },
      {
        id: "events-conference",
        index: "03",
        category: "Events & Conference Management",
        src: assets.images.work.ituSummit.floor,
        alt: "Institutional conference floor during international summit delivery",
        role: "accent" as const,
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
        label: "Explore our event delivery",
        description:
          "Explore selected national and international conferences, stakeholder engagements and institutional programmes delivered by PayChex.",
      },
      projects: [atuConference],
    },
    {
      id: "it-telecommunications",
      title: "IT & Telecommunications",
      introduction:
        "Selected technology, connectivity and digital identity programmes.",
      selectedLabel: "Selected programmes",
      projects: [
        {
          id: "identity",
          featured: true,
          title: "NIMC NIN Enrolment Centres",
          body: "Nationwide identity enrolment and field mobilisation delivered across multiple states for NIMC — coordinating technology deployment, field teams and operational execution so enrolment could be completed at institutional scale.",
          delivered: [
            "Field mobilisation for nationwide enrolment operations",
            "Data capture and enrolment process delivery",
            "Programme coordination across multiple states",
            "Training and knowledge transfer for sustaining field operations",
          ],
          imageSide: "right" as const,
          mediaFit: "contain" as const,
          media: {
            type: "image" as const,
            src: assets.images.work.nimcEnrolment,
            alt: "NIMC National Identification Number enrolment centre — powered by PayChex International Marketing Ltd.",
            sizes: "(max-width: 1024px) 100vw, 48vw",
          } satisfies MediaSource,
          gallery: null,
        },
        {
          id: "connectivity",
          title: "National Connectivity Programmes",
          body: "Broadband, campus connectivity and ICT rollout programmes delivered across universities, government institutions and regional initiatives — where reliable networks had to be designed, installed and left running.",
          delivered: [
            "Network and connectivity design for institutional sites",
            "Campus and institutional ICT rollout",
            "Supply, installation and commissioning of network environments",
            "Handover of systems ready for day-to-day institutional use",
          ],
          imageSide: "left" as const,
          media: null as MediaSource | null,
          gallery: null,
        },
      ],
    },
    {
      id: "facility-management",
      title: "Facility Management",
      introduction:
        "Selected facility operations and site support engagements.",
      selectedLabel: "Selected engagements",
      projects: [
        // Verified Facility Management projects can be added here.
      ],
    },
    {
      id: "construction-design",
      title: "Construction & Design",
      introduction:
        "Selected construction, fit-out and facilities delivery.",
      selectedLabel: "Selected projects",
      projects: [
        {
          id: "facilities",
          featured: true,
          title: "Digital Infrastructure & Smart Facilities",
          body: "Engineering, construction and commissioning of digital parks, institutional facilities and technology environments — physical spaces prepared for the systems and teams that must operate in them.",
          delivered: [
            "Digital park development",
            "Facility fit-out and readiness works",
            "Construction supervision through completion",
            "Civil works supporting institutional facilities",
          ],
          imageSide: "left" as const,
          media: null as MediaSource | null,
          gallery: null,
        },
      ],
    },
    {
      id: "consulting-professional",
      title: "Consulting & Professional Services",
      introduction:
        "Selected advisory, training and professional services engagements.",
      selectedLabel: "Selected engagements",
      projects: [
        // Verified Consulting & Professional Services projects can be added here.
      ],
    },
  ] as const satisfies readonly WorkArea[],
};
