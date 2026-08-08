"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/cn";
import { motionTokens } from "@/lib/motion";

const fieldClassName = cn(
  "w-full bg-transparent px-0 py-4",
  "text-base md:text-lg text-foreground placeholder:text-placeholder",
  "border-0 border-b border-border-subtle",
  "rounded-none outline-none",
  "transition-[border-color,box-shadow] duration-(--duration-base) ease-(--ease-out)",
  "hover:border-border-strong",
  "focus-visible:border-foreground focus-visible:shadow-[0_1px_0_0_var(--foreground)]",
);

const labelClassName =
  "text-[11px] tracking-[0.14em] text-label uppercase";

type ContactFormProps = {
  recipient: string;
  submitLabel: string;
  messageLabel: string;
};

export function ContactForm({
  recipient,
  submitLabel,
  messageLabel,
}: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const prefersReducedMotion = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      organisation
        ? `Conversation with ${name} · ${organisation}`
        : `Conversation with ${name}`,
    );

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Organisation: ${organisation}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        "",
        "About the project",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  const fields = [
    {
      id: "contact-name",
      name: "name",
      label: "Name",
      type: "text" as const,
      autoComplete: "name",
      required: true,
    },
    {
      id: "contact-organisation",
      name: "organisation",
      label: "Organisation",
      type: "text" as const,
      autoComplete: "organization",
      required: true,
    },
    {
      id: "contact-email",
      name: "email",
      label: "Email",
      type: "email" as const,
      autoComplete: "email",
      required: true,
    },
    {
      id: "contact-phone",
      name: "phone",
      label: "Phone",
      optional: true,
      type: "tel" as const,
      autoComplete: "tel",
      required: false,
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-10 md:gap-12"
    >
      {fields.map((field, index) => (
        <motion.div
          key={field.id}
          className="flex flex-col gap-2.5"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: motionTokens.duration.slow,
            delay: 0.04 + index * motionTokens.stagger.sm,
            ease: motionTokens.ease,
          }}
        >
          <label htmlFor={field.id} className={labelClassName}>
            {field.label}
            {"optional" in field && field.optional ? (
              <span className="normal-case tracking-normal text-placeholder">
                {" "}
                (optional)
              </span>
            ) : null}
          </label>
          <input
            id={field.id}
            name={field.name}
            type={field.type}
            required={field.required}
            autoComplete={field.autoComplete}
            className={fieldClassName}
          />
        </motion.div>
      ))}

      <motion.div
        className="flex flex-col gap-2.5"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: motionTokens.duration.slow,
          delay: 0.28,
          ease: motionTokens.ease,
        }}
      >
        <label htmlFor="contact-message" className={labelClassName}>
          {messageLabel}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={8}
          className={cn(fieldClassName, "min-h-[12rem] resize-y md:min-h-[14rem]")}
        />
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: motionTokens.duration.slow,
          delay: 0.34,
          ease: motionTokens.ease,
        }}
      >
        <Button type="submit" variant="primary" size="lg">
          {submitLabel}
        </Button>
        {status === "ready" ? (
          <Text className="text-sm text-muted-foreground">
            Opening your email client…
          </Text>
        ) : null}
      </motion.div>
    </form>
  );
}
