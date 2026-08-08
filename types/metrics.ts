/** Evergreen organisational trust signal — not a project-specific statistic. */
export type EditorialTrustSignal = {
  title: string;
  label: string;
};

/**
 * Editorial credibility fact — label leads, value follows.
 * Use `emphasis: "figure"` only for true numerals (e.g. 2008).
 * Optional `detail` adds verified supporting context beneath the value.
 * Optional `suffix` / `format` support animated numeric figures.
 */
export type CredibilityFact = {
  label: string;
  value: string;
  detail?: string;
  emphasis?: "figure" | "text";
  suffix?: string;
  format?: "comma" | "plain";
};

/** @deprecated Use CredibilityFact */
export type CredibilityMetric = CredibilityFact & {
  /** @deprecated */
  span?: "sm" | "md" | "lg";
};

/** @deprecated Prefer EditorialTrustSignal for homepage credibility. */
export type EditorialMetric = {
  value: number;
  suffix?: string;
  format?: "comma" | "plain";
  label: string;
};
