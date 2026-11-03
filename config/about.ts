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
    "PayChex helps governments, regulators, development organisations and enterprises turn initiatives into operational reality, through specialist capability, clear ownership and delivery that holds.",
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
    "PayChex is a Nigerian integrated solutions partner. Since 2008, our work has spanned technology, telecommunications, facilities, construction, professional services and institutional programmes. We bring these capabilities together around the needs of each engagement.",
    "Good ideas need more than a plan. They need the right expertise, people who understand the context and a team willing to see the work through.",
    "Some clients come to us for a single service. Others need several teams working together. In both cases, we focus on clear responsibilities, good coordination and work that stands up beyond handover.",
  ],
};

export const aboutApproach = {
  headline: "How we approach execution.",
  supporting:
    "A practical way of working, from the first conversation to lasting results.",
  principles: [
    {
      index: "01",
      title: "Understand",
      description:
        "We listen first. We look at the people, institutions, systems and practical constraints involved before agreeing on an approach.",
    },
    {
      index: "02",
      title: "Mobilise",
      description:
        "We bring together the right specialists, resources and partners, and make sure everyone understands their role.",
    },
    {
      index: "03",
      title: "Deliver",
      description:
        "We manage the work against agreed milestones, keep stakeholders informed and address problems as they arise.",
    },
    {
      index: "04",
      title: "Strengthen",
      description:
        "We plan for what happens after delivery, including knowledge transfer, operational support and the relationships needed to sustain progress.",
    },
  ],
};

export const aboutCapabilities = {
  headline: "Specialist capability.",
  supporting:
    "Five areas of expertise. Each stands on its own. Together they show the range of work we take on.",
  pillars: [
    {
      title: "IT & Telecoms",
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
        "Advisory, stakeholder engagement, procurement, training and managed services that support better decisions and delivery.",
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
        "Supporting public institutions with planning, coordination and practical programme delivery.",
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
      title: "Stakeholder engagement",
      icon: "government" as const,
      description:
        "Bringing public institutions, partners and communities into productive dialogue throughout a programme.",
    },
    {
      title: "Capacity development",
      icon: "training" as const,
      description:
        "Practical learning that helps teams build the skills to sustain their work.",
    },
  ],
};

export const aboutThinking = {
  headline: "How we think about the work.",
  supporting:
    "The principles that shape how we work with clients, partners and the people affected by a project.",
  beliefs: [
    {
      title: "Execution creates confidence.",
      description:
        "Trust grows when institutions see work progressing with clarity, ownership and measurable control.",
    },
    {
      title: "Capability must remain after projects end.",
      description:
        "Delivery that leaves no lasting operational strength is incomplete, regardless of what was installed.",
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

export const aboutCta = {
  headline: "Let's discuss your next programme.",
  supporting:
    "One capability or several, if the work matters and it needs to get done, we should talk.",
  primary: {
    label: "Start a conversation",
    href: "/contact",
  },
  secondary: {
    label: "Explore capabilities",
    href: "/solutions",
  },
};
