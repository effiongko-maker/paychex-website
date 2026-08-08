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
 * capabilities as specialist disciplines. Clients may engage one
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
    lead: "Specialist disciplines.",
    emphasis: "Disciplined execution.",
  },
  supporting:
    "Technology, operations and stakeholder engagement — each a capability in its own right. Engage one, or several, under the same standard of ownership.",
  pillars: [
    {
      title: "Technology",
      description:
        "ICT infrastructure, software, digital identity and platforms that keep institutions connected and operating.",
    },
    {
      title: "Operations",
      description:
        "Procurement, logistics, BPO, construction support and field delivery that keep projects on schedule.",
    },
    {
      title: "People & Experiences",
      description:
        "Training, capacity development and events & conference management for effective stakeholder engagement.",
    },
  ] as const satisfies readonly EditorialPillar[],
};

export const homeHeroTrustSignals = [
  { title: "Accountable", label: "Clear ownership" },
  { title: "Engineering-led", label: "Disciplined delivery" },
  { title: "Nationwide", label: "Operational reach" },
  { title: "Reliable", label: "On schedule, on brief" },
  { title: "Disciplined", label: "Quality & control" },
] as const satisfies readonly EditorialTrustSignal[];

export const homeCapabilities = {
  headline: "What we deliver.",
  supporting:
    "Specialist capability across engineering, technology, infrastructure, operations and stakeholder engagement — the disciplines behind complex project delivery.",
  stories: [
    {
      index: "01",
      title: "Technology & ICT Infrastructure",
      description:
        "We design, deploy and support networks, platforms and digital systems for institutions that need reliable connectivity and control.",
      href: "/solutions/technology",
      linkLabel: "Explore technology",
      layout: "text-start" as const,
      frame: "landscape" as const,
      media: {
        type: "image" as const,
        src: assets.images.home.capabilities.technology,
        alt: "ICT infrastructure and technology implementation",
        sizes: "(max-width: 1024px) 100vw, 58vw",
      },
    },
    {
      index: "02",
      title: "Events & Conference Management",
      description:
        "We design and deliver conferences, summits and stakeholder gatherings — from concept and logistics to on-site implementation.",
      href: "/solutions/events",
      linkLabel: "Explore events",
      layout: "media-start" as const,
      frame: "wide" as const,
      media: {
        type: "image" as const,
        src: assets.images.home.capabilities.strategy,
        alt: "Stakeholder conference and event delivery",
        sizes: "(max-width: 1024px) 100vw, 58vw",
      },
    },
    {
      index: "03",
      title: "Infrastructure & Construction Support",
      description:
        "We deliver facilities, fit-outs and construction support with engineering-led project control — from planning through handover.",
      href: "/solutions/construction",
      linkLabel: "Explore infrastructure",
      layout: "text-start" as const,
      frame: "portrait" as const,
      media: {
        type: "image" as const,
        src: assets.images.home.capabilities.infrastructure,
        alt: "Construction and infrastructure project delivery",
        sizes: "(max-width: 1024px) 100vw, 42vw",
      },
    },
  ],
  catalogueLabel: "Our capabilities",
  catalogue: [
    {
      title: "Technology",
      description:
        "Software and digital systems that improve how institutions operate.",
      image: {
        src: assets.images.home.catalogue.technology,
        alt: "Technology systems and digital operations",
      },
    },
    {
      title: "ICT Infrastructure",
      description:
        "Connectivity and technology environments built and sustained for reliability.",
      image: {
        src: assets.images.home.catalogue.ict,
        alt: "ICT networking and connectivity infrastructure",
      },
    },
    {
      title: "Events & Conference Management",
      description:
        "High-level conferences, summits and stakeholder engagement programmes.",
      image: {
        src: assets.images.home.catalogue.events,
        alt: "Conference and stakeholder event delivery",
      },
    },
    {
      title: "Training & Capacity Development",
      description:
        "Technical training that transfers capability to the teams who must sustain results.",
      image: {
        src: assets.images.home.catalogue.training,
        alt: "Technical training and capacity development",
      },
    },
    {
      title: "Business Process Outsourcing",
      description:
        "Contact centres, data capture and managed operations for institutional clients.",
      image: {
        src: assets.images.home.catalogue.bpo,
        alt: "Business process outsourcing operations",
      },
    },
    {
      title: "Procurement",
      description:
        "Sourcing and supply chain management that keep projects stocked and on schedule.",
      image: {
        src: assets.images.home.catalogue.procurement,
        alt: "Procurement and supply chain operations",
      },
    },
    {
      title: "Logistics",
      description:
        "Warehousing, transport and field logistics across people, materials and sites.",
      image: {
        src: assets.images.home.catalogue.logistics,
        alt: "Logistics and field transport operations",
      },
    },
    {
      title: "Digital Identity",
      description:
        "Data capture and enrolment services for large-scale identity programmes.",
      image: {
        src: assets.images.home.catalogue.identity,
        alt: "Digital identity enrolment and data capture",
      },
    },
    {
      title: "Construction Support",
      description:
        "Civil works, facilities and construction support for institutional projects.",
      image: {
        src: assets.images.home.catalogue.construction,
        alt: "Construction support and field infrastructure",
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
        label: "Events & Stakeholder Engagement",
        title: "International Events & Stakeholder Management",
        description:
          "Government summits, international conferences and protocol-driven events delivered for senior public officials, development partners and enterprise leaders.",
        href: "/projects#events",
        imageSide: "left" as const,
        media: null as MediaSource | null,
      },
      {
        id: "facilities",
        label: "Infrastructure",
        title: "Digital Infrastructure & Smart Facilities",
        description:
          "Engineering, construction and commissioning of digital parks, institutional facilities and technology environments built to last.",
        href: "/projects#facilities",
        imageSide: "right" as const,
        media: null as MediaSource | null,
      },
      {
        id: "connectivity",
        label: "Technology",
        title: "National Connectivity Programmes",
        description:
          "Broadband, campus networks and ICT rollouts delivered across universities, government institutions and regional initiatives.",
        href: "/projects#connectivity",
        imageSide: "left" as const,
        media: null as MediaSource | null,
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
