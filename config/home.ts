import type { EditorialPillar } from "@/types/content";
import type { MediaSource } from "@/types/media";
import type {
  CredibilityFact,
  EditorialTrustSignal,
} from "@/types/metrics";
import { assets } from "@/config/assets";

/**
 * Homepage content — Brand & Messaging Framework.
 * Five complementary areas of expertise, brought together when the work
 * calls for it. Preserve verified company and project facts.
 */

export const homeHeroMedia = {
  type: "image",
  src: assets.images.home.hero,
  alt: "Telecom and ICT infrastructure delivery on a Nigerian project site",
  priority: true,
  sizes: "(max-width: 768px) 90vw, 42vw",
} as const satisfies MediaSource;

export const homeHeroMediaOverlay = 0.2;

export const homeHero = {
  title: {
    lead: "Ideas into reality.",
    emphasis: "Execution that lasts.",
  },
  subtitle:
    "PayChex is an integrated solutions partner. We bring together expertise in technology, infrastructure, facilities, professional services and institutional programmes to help organisations get important work done. Our experience dates back to 2008.",
  primary: {
    label: "Explore capabilities",
    href: "/solutions",
  },
  secondary: {
    label: "Start a conversation",
    href: "/contact",
  },
};

export const homeIdentity = {
  headline: {
    lead: "Five areas of expertise.",
    emphasis: "One integrated partner.",
  },
  supporting:
    "PayChex brings specialist capabilities together around complex programmes — engage one area, or several, under the same standard of ownership.",
};

export const homeHeroTrustSignals = [
  { title: "Accountable", label: "Clear ownership" },
  { title: "Integrated", label: "Specialists working together" },
  { title: "Nationwide", label: "Operational reach" },
  { title: "Reliable", label: "On schedule, on brief" },
  { title: "Disciplined", label: "Quality & control" },
] as const satisfies readonly EditorialTrustSignal[];

export const homeCapabilities = {
  headline: "Our capabilities.",
  supporting:
    "Specialist capability across technology, facilities, construction, professional services and institutional programmes — assembled to the work at hand.",
  catalogue: [
    {
      title: "IT & Telecommunications",
      description:
        "Technology, connectivity and digital infrastructure that keep organisations connected and operating.",
      href: "/solutions#it-telecommunications",
      image: {
        src: assets.images.home.catalogue.technology,
        alt: "Technology systems and digital operations",
      },
    },
    {
      title: "Facility Management",
      description:
        "Reliable management of the physical environments organisations depend on every day.",
      href: "/solutions#facility-management",
      image: {
        src: assets.images.home.catalogue.logistics,
        alt: "Facility and site support operations",
      },
    },
    {
      title: "Construction & Design",
      description:
        "From design and planning through construction, renovation and delivery.",
      href: "/solutions#construction-design",
      image: {
        src: assets.images.home.catalogue.construction,
        alt: "Construction support and field infrastructure",
      },
    },
    {
      title: "Consulting & Professional Services",
      description:
        "Practical advisory, stakeholder engagement, training and managed services that help organisations work more effectively.",
      href: "/solutions#consulting-professional",
      image: {
        src: assets.images.home.catalogue.training,
        alt: "Professional training and advisory workshop",
      },
    },
    {
      title: "Events & Conference Management",
      description:
        "Designing and delivering high-level events, conferences and institutional programmes.",
      href: "/solutions#events-conference",
      image: {
        src: assets.images.home.catalogue.events,
        alt: "Conference venue prepared for institutional delivery",
      },
    },
  ],
};

export const homeCredibility = {
  headline: "Proven at national scale.",
  supporting:
    "Since 2008, PayChex has supported complex projects for government institutions, regulators, development organisations and enterprise clients. Our work brings together specialist teams, operational reach and clear accountability.",
  facts: [
    {
      label: "Established",
      value: "2008",
      emphasis: "figure" as const,
      detail: "Year of incorporation in Nigeria.",
    },
    {
      label: "Operational Reach",
      value: "Nationwide",
      emphasis: "text" as const,
      detail:
        "Offices in Abuja, Lagos and Kaduna, with delivery capacity across all six geopolitical zones.",
    },
    {
      label: "Field Agents",
      value: "500",
      emphasis: "figure" as const,
      suffix: "+",
      detail:
        "Nationwide agent network deployed for large-scale public engagement programmes.",
    },
    {
      label: "Citizens Enrolled",
      value: "500000",
      emphasis: "figure" as const,
      suffix: "+",
      format: "comma" as const,
      detail:
        "National identity enrolment delivered for NIMC across the country.",
    },
  ] as const satisfies readonly CredibilityFact[],
  workPreview: {
    label: "Selected work",
    headline: "Flagship programmes.",
    supporting:
      "A curated look at the kinds of programmes we deliver—where execution, coordination and scale matter most.",
    viewAll: {
      label: "View all work",
      href: "/projects",
    },
    projects: [
      {
        id: "events",
        label: "Events & Conference Management",
        title: "ATU Conference of Plenipotentiaries 2026",
        description:
          "A major institutional conference for government representatives, industry stakeholders and senior participants within the African telecommunications ecosystem.",
        href: "/projects#events-conference",
        imageSide: "left" as const,
        media: {
          type: "image" as const,
          src: assets.images.home.catalogue.events,
          alt: "Conference venue prepared for institutional delivery",
          sizes: "(max-width: 1024px) 100vw, 48vw",
        } satisfies MediaSource,
      },
      {
        id: "facilities",
        label: "Construction & Design",
        title: "Digital Infrastructure & Smart Facilities",
        description:
          "Digital parks, institutional facilities and technology environments engineered, fitted out and commissioned for operational use.",
        href: "/projects#construction-design",
        imageSide: "right" as const,
        media: {
          type: "image" as const,
          src: assets.images.home.catalogue.construction,
          alt: "Construction and facilities delivery",
          sizes: "(max-width: 1024px) 100vw, 48vw",
        } satisfies MediaSource,
      },
      {
        id: "connectivity",
        label: "IT & Telecommunications",
        title: "National Connectivity Programmes",
        description:
          "Broadband, campus networks and ICT rollouts installed and commissioned for universities, government institutions and regional programmes.",
        href: "/projects#it-telecommunications",
        imageSide: "left" as const,
        media: {
          type: "image" as const,
          src: assets.images.home.catalogue.ict,
          alt: "ICT networking and connectivity infrastructure",
          sizes: "(max-width: 1024px) 100vw, 48vw",
        } satisfies MediaSource,
      },
    ],
  },
  audiencesLabel: "Who we serve",
  audiences: [
    {
      title: "Government Ministries",
      description:
        "Public-sector programmes where policy intent must become operational delivery.",
      mark: "gov" as const,
      image: {
        src: assets.images.home.audiences.government,
        alt: "Government and institutional environments",
      },
    },
    {
      title: "Regulatory Agencies",
      description:
        "ICT, connectivity and communications programmes that demand rigorous implementation.",
      mark: "reg" as const,
      image: {
        src: assets.images.home.audiences.regulatory,
        alt: "Regulatory and compliance institutions",
      },
    },
    {
      title: "Development Partners",
      description:
        "Programmes that require durable capability and disciplined nationwide delivery.",
      mark: "dev" as const,
      image: {
        src: assets.images.home.audiences.development,
        alt: "Development partnership collaboration",
      },
    },
    {
      title: "Enterprise Organisations",
      description:
        "Private-sector projects where standards, schedule and accountability are essential.",
      mark: "ent" as const,
      image: {
        src: assets.images.home.audiences.enterprise,
        alt: "Enterprise operations at institutional scale",
      },
    },
  ],
};

export const homeDeliveryModel = {
  headline: "How we execute.",
  supporting:
    "We start by understanding the work and the people it affects. Then we bring the right expertise together, deliver against clear milestones and help clients sustain the results.",
  stages: [
    {
      title: "Understand",
      description:
        "We listen, identify the people and institutions involved, and agree on the priorities, constraints and outcomes that matter.",
    },
    {
      title: "Deliver",
      description:
        "We bring together the right people and resources, coordinate the work and stay accountable for quality, timelines and communication.",
    },
    {
      title: "Strengthen",
      description:
        "We support handover, build the capacity of the teams involved and help put the arrangements in place for results to last.",
    },
  ] as const satisfies readonly EditorialPillar[],
};

export const homeCta = {
  headline: "Ready to discuss your next project?",
  supporting:
    "Whether you need one capability or several, we bring the experience and accountability complex delivery requires.",
  primary: {
    label: "Start a conversation",
    href: "/contact",
  },
  secondary: {
    label: "Explore capabilities",
    href: "/solutions",
  },
};
