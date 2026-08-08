/**
 * Work page — featured engagements as evidence of delivery.
 * Not a capabilities explainer. Not a public case archive.
 *
 * Narrative: breadth first (events → connectivity → infrastructure)
 * then public-sector operational programmes (identity).
 *
 * Add photography via `media` on each engagement when assets are ready.
 * Layout (imageSide) is already reserved — no redesign required.
 */

import type { MediaSource } from "@/types/media";

export const workPage = {
  hero: {
    label: "Work",
    headline: "Work that held.",
    lede: "Evidence of delivery across technology, infrastructure and operations—for government, enterprise and development partners since 2008.",
    body: "The work below represents the kinds of programmes PayChex delivers—from high-profile public events to nationwide technology deployments, infrastructure and complex operational programmes. Each reflects our approach to disciplined execution at scale.",
  },
  engagements: [
    {
      id: "events",
      label: "Events & Stakeholder Engagement",
      title: "National & International Events & Stakeholder Management",
      body: "Planning and delivery of government summits, international conferences, stakeholder forums, exhibitions and protocol-driven events involving senior public officials, development partners and enterprise leaders.",
      scope: [
        "Conference Management",
        "Stakeholder Engagement",
        "Delegate Services",
        "Exhibition Delivery",
        "Protocol & VIP Coordination",
        "Event Logistics",
      ],
      imageSide: "left" as const,
      media: null as MediaSource | null,
    },
    {
      id: "connectivity",
      label: "Technology",
      title: "National Connectivity Programmes",
      body: "Broadband, campus connectivity and ICT rollout programmes delivered across universities, government institutions and regional initiatives.",
      scope: [
        "Broadband Infrastructure",
        "Campus Networks",
        "ICT Rollouts",
        "Digital Platforms",
      ],
      imageSide: "right" as const,
      media: null as MediaSource | null,
    },
    {
      id: "facilities",
      label: "Infrastructure",
      title: "Digital Infrastructure & Smart Facilities",
      body: "Engineering, construction and commissioning of digital parks, institutional facilities and technology environments.",
      scope: [
        "Digital Parks",
        "Facility Fit-outs",
        "Construction Supervision",
        "Civil Works",
      ],
      imageSide: "left" as const,
      media: null as MediaSource | null,
    },
    {
      id: "identity",
      label: "Public programmes",
      title: "National Identity & Public Enrolment",
      body: "Nationwide identity enrolment and field mobilisation programmes delivered across multiple states through coordinated technology deployment and operational execution.",
      scope: [
        "Identity Systems",
        "Field Operations",
        "Programme Management",
        "Training",
      ],
      imageSide: "right" as const,
      media: null as MediaSource | null,
    },
  ],
};
