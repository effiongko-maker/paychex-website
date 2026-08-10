import { assets } from "@/config/assets";

/**
 * About page content — institutional refinement.
 * Answers: why trust PayChex with important work?
 */

export const aboutHero = {
  headline: {
    lead: "Execution is built,",
    emphasis: "not assumed.",
  },
  supporting:
    "PayChex helps governments, regulators, development organisations and enterprises turn initiatives into operational reality — through specialist capability, clear ownership and delivery that holds.",
  media: {
    src: assets.images.about.hero,
    alt: "Engineering planning and programme coordination for institutional delivery",
  },
};

export const aboutIdentity = {
  statement: {
    lead: "We get important work done.",
    emphasis: "That is the whole story.",
  },
  paragraphs: [
    "PayChex is a Nigerian engineering, construction and technology services company. Since 2008 we have delivered specialist capability across IT & telecommunications, facilities, construction, professional services and institutional engagements — for organisations that cannot afford vague outcomes.",
    "Ambition is rarely the problem. Work stalls when ownership is unclear, specialist capacity is missing, or delivery stops at installation.",
    "Clients engage us for one service or several. We work with ministries, regulators, development partners and enterprises that need reliable delivery — and accountability that holds until results do.",
  ],
};

export const aboutApproach = {
  headline: "How we approach execution.",
  supporting:
    "Four stages on every engagement — practical, sequential and owned.",
  principles: [
    {
      index: "01",
      title: "Understand",
      description:
        "We begin with operational realities — constraints, stakeholders, systems and field conditions — before proposing a path.",
    },
    {
      index: "02",
      title: "Mobilise",
      description:
        "We put the right specialists, resources and field capacity on the work — one capability or several.",
    },
    {
      index: "03",
      title: "Deliver",
      description:
        "Clear ownership, measurable milestones and disciplined follow-through from mobilisation to handover.",
    },
    {
      index: "04",
      title: "Strengthen",
      description:
        "Engagements should leave institutions stronger — through training, transfer and lasting operational support.",
    },
  ],
};

export const aboutCapabilities = {
  headline: "Specialist capability.",
  supporting:
    "Five areas of expertise. Each stands on its own. Together they show the range of work we take on.",
  pillars: [
    {
      title: "IT & Telecommunications",
      description:
        "Technology, connectivity and digital infrastructure institutions can depend on.",
    },
    {
      title: "Facility Management",
      description:
        "Reliable management of the physical environments organisations depend on every day.",
    },
    {
      title: "Construction & Design",
      description:
        "From design and planning through construction, renovation and delivery.",
    },
    {
      title: "Consulting & Professional Services",
      description:
        "Advisory, procurement, training and managed services that improve execution.",
    },
    {
      title: "Events & Conference Management",
      description:
        "High-level events, conferences and institutional programmes delivered to brief.",
    },
  ],
};

export const aboutValue = {
  headline: "Where we deliver value.",
  supporting:
    "Domains where our delivery has a direct effect on institutional outcomes.",
  areas: [
    {
      title: "Government Programmes",
      icon: "government" as const,
      description:
        "Moving public institutions from policy intent to operational delivery.",
    },
    {
      title: "ICT infrastructure",
      icon: "infrastructure" as const,
      description:
        "Connectivity and technology environments built and sustained at scale.",
    },
    {
      title: "Digital identity",
      icon: "identity" as const,
      description:
        "Data capture and enrolment for trusted identity programmes.",
    },
    {
      title: "Events & conference management",
      icon: "events" as const,
      description:
        "Summits, conferences and stakeholder gatherings to institutional standards.",
    },
    {
      title: "Procurement & logistics",
      icon: "procurement" as const,
      description:
        "Sourcing, movement and field support that keep programmes on schedule.",
    },
    {
      title: "Engineering & Construction",
      icon: "construction" as const,
      description:
        "Infrastructure and facilities work that enables institutional operations.",
    },
    {
      title: "Managed Operations",
      icon: "operations" as const,
      description:
        "Contact centres, data capture and back-office support to defined standards.",
    },
    {
      title: "Capacity development",
      icon: "training" as const,
      description:
        "Practical learning that transfers capability to the teams who sustain results.",
    },
  ],
};

export const aboutThinking = {
  headline: "How we think about the work.",
  supporting:
    "Operating principles that guide decisions on every engagement.",
  beliefs: [
    {
      title: "Execution creates confidence.",
      description:
        "Trust grows when institutions see work progressing with clarity, ownership and measurable control.",
    },
    {
      title: "Capability must remain after projects end.",
      description:
        "Delivery that leaves no lasting operational strength is incomplete — regardless of what was installed.",
    },
    {
      title: "Technology succeeds only when operations support it.",
      description:
        "Systems perform when people, processes and field realities are designed around them.",
    },
    {
      title: "Long-term partnerships outperform short transactions.",
      description:
        "Institutional work improves when accountability continues beyond a single mobilisation cycle.",
    },
  ],
};

export const aboutCredibility = {
  facts: [
    { label: "Since", value: "2008" },
    { label: "Delivery", value: "Nationwide" },
    { label: "Clients", value: "Government & Enterprise" },
    { label: "Approach", value: "Engineering-led" },
  ],
};

export const aboutCta = {
  headline: "Let's discuss your next programme.",
  supporting:
    "One capability or several — if the work matters and it needs to get done, we should talk.",
  primary: {
    label: "Start a conversation",
    href: "/contact",
  },
  secondary: {
    label: "Explore capabilities",
    href: "/solutions",
  },
};
