import type { EditorialPillar } from "@/types/content";
import type { MediaSource } from "@/types/media";
import type {
  CredibilityFact,
  EditorialTrustSignal,
} from "@/types/metrics";
import { assets } from "@/config/assets";

/**
 * Homepage content — Brand & Messaging Framework.
 * Grounded in the company profile: Nigerian engineering, construction
 * and technology services company (est. 2008). Execution first;
 * five complementary areas of expertise. Clients may engage one
 * capability or several.
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
    "PayChex is a Nigerian engineering, construction and technology services company. Since 2008, government institutions, development partners and enterprise clients have trusted us to deliver complex projects with clear accountability.",
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
  { title: "Engineering-led", label: "Disciplined delivery" },
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
        "Helping organisations improve how they work, make better decisions and execute more effectively.",
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
    "Since 2008, PayChex has delivered complex projects for government institutions, regulators, development organisations and enterprise clients — with engineering discipline, operational reach and clear accountability.",
  facts: [
    {
      label: "Established",
      value: "2008",
      emphasis: "figure" as const,
      detail: "Incorporated in Nigeria as an engineering, construction and technology services company.",
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
    "A disciplined delivery approach — clear enough to govern, practical enough for complex institutional projects.",
  stages: [
    {
      title: "Plan",
      description:
        "We define scope, success criteria and constraints; then programme the work, budget and procurement before mobilisation.",
    },
    {
      title: "Deliver",
      description:
        "We mobilise, build and implement — technology, infrastructure, events, logistics and field operations — with quality and schedule control.",
    },
    {
      title: "Enable",
      description:
        "We test, commission and hand over — then provide training, maintenance and operational support beyond completion.",
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
