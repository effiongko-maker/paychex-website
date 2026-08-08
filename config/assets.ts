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
