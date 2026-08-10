/**
 * Central asset registry.
 *
 * Replace files under /public without changing component code —
 * only update paths here if filenames or folders change.
 */
export const assets = {
  brand: {
    /** Primary mark (charcoal badge) */
    logo: "/brand/logo.png",
    /** For light UI surfaces — dark/charcoal treatment */
    logoDark: "/brand/logo-dark.png",
    /** For dark UI surfaces — light treatment */
    logoLight: "/brand/logo-light.png",
    favicon: {
      ico: "/brand/favicon/favicon.ico",
    },
  },
  logos: {
    /** Partner / client marks — add entries as assets arrive */
  },
  images: {
    home: {
      hero: "/images/home/hero.jpg",
    capabilities: {
      infrastructure: "/images/home/capabilities/infrastructure.jpg",
      technology: "/images/home/capabilities/technology.jpg",
      strategy: "/images/home/capabilities/strategy.jpg",
    },
    capabilitiesPage: {
      hero: "/images/capabilities/hero.jpg",
      /** ATU Conference of Plenipotentiaries — Work project photography only */
      eventsFeature: "/images/capabilities/events-atu-hall.jpg",
      eventsPanel: "/images/capabilities/events-atu-panel.jpg",
      eventsStage: "/images/capabilities/events-atu-stage.jpg",
    },
    catalogue: {
        technology: "/images/home/catalogue/technology.jpg",
        ict: "/images/home/catalogue/ict.jpg",
        events: "/images/home/catalogue/events.jpg",
        training: "/images/home/catalogue/training.jpg",
        bpo: "/images/home/catalogue/bpo.jpg",
        procurement: "/images/home/catalogue/procurement.jpg",
        logistics: "/images/home/catalogue/logistics.jpg",
        identity: "/images/home/catalogue/identity.jpg",
        construction: "/images/home/catalogue/construction.jpg",
      },
      audiences: {
        government: "/images/home/audiences/government.jpg",
        regulatory: "/images/home/audiences/regulatory.jpg",
        development: "/images/home/audiences/development.jpg",
        enterprise: "/images/home/audiences/enterprise.jpg",
      },
    },
    about: {
      /** Editorial hero — engineering planning and programme coordination */
      hero: "/images/about/hero.jpg",
    },
    work: {
      /** NIMC NIN Enrolment Centre — Work project evidence only */
      nimcEnrolment: "/images/work/nimc-nin-enrolment.jpg",
      /** Event project evidence — Work + /projects/events only */
      unga80: {
        banner: "/images/work/unga80/banner.jpg",
        assembly: "/images/work/unga80/assembly.jpg",
      },
      vivatech: {
        hall: "/images/work/vivatech/hall.jpg",
        banner: "/images/work/vivatech/banner.jpg",
      },
      ituSummit: {
        plenary: "/images/work/itu-summit/plenary.jpg",
        floor: "/images/work/itu-summit/floor.jpg",
      },
      nccide: {
        assembly: "/images/work/nccide/assembly.jpg",
        stakeholders: "/images/work/nccide/stakeholders.jpg",
      },
      nais: {
        workshop: "/images/work/nais/workshop.jpg",
        engagement: "/images/work/nais/engagement.jpg",
      },
    },
  },
  videos: {
    home: {
      /** Phase 2 cinematic reel */
      hero: "/videos/home/hero.mp4",
    },
  },
  icons: {
    /** UI / brand icons — add entries as assets arrive */
  },
} as const;

export type BrandLogoVariant = "logo" | "logoDark" | "logoLight";

export function brandLogo(variant: BrandLogoVariant = "logo") {
  return assets.brand[variant];
}
