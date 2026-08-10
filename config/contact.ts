/**
 * Contact page — start a conversation.
 * Editorial close, not a support form.
 */

import { siteConfig } from "@/config/site";

export const contactPage = {
  hero: {
    label: "Contact",
    headline: "Start a conversation.",
    supporting:
      "Whether you're planning a national programme, a technology deployment, major infrastructure project or international event, we'd like to understand what you're trying to achieve.",
  },
  talk: {
    title: "Talk to us",
    items: [
      {
        label: "Email",
        value: siteConfig.footer.contact.email,
        href: `mailto:${siteConfig.footer.contact.email}`,
      },
      {
        label: "Location",
        value: siteConfig.footer.contact.location,
        href: null as string | null,
      },
      {
        label: "LinkedIn",
        value: siteConfig.footer.contact.linkedIn.label,
        href: siteConfig.footer.contact.linkedIn.href,
      },
    ],
  },
  brief: {
    title: "A good brief includes",
    points: [
      "What you're trying to achieve",
      "Timeline",
      "Location",
      "Key stakeholders",
      "Any important constraints",
    ],
  },
  form: {
    submitLabel: "Start the conversation",
    recipient: siteConfig.footer.contact.email,
    messageLabel: "Tell us about your project",
  },
};
