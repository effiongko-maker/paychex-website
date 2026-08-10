import { FooterLink } from "@/components/layout/FooterLink";
import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-inverse text-inverse-foreground">
      <Container className="pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-14">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1.5fr)] lg:items-start lg:gap-14 xl:gap-16">
          <div className="flex max-w-[26rem] flex-col gap-5">
            <Logo
              variant="logoLight"
              size="footer"
              className="opacity-100 transition-opacity duration-(--duration-base) ease-(--ease-out) hover:opacity-70"
            />
            <Text className="text-base leading-[1.7] text-inverse-foreground/50">
              {footer.positioning}
            </Text>
          </div>

          <div className="flex flex-col gap-4 lg:pt-1">
            <Text
              variant="caption"
              as="p"
              className="tracking-[0.12em] text-inverse-foreground/40"
            >
              Capabilities
            </Text>
            <ul className="flex list-none flex-col gap-2.5">
              {footer.capabilities.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:pt-1">
            <Text
              variant="caption"
              as="p"
              className="tracking-[0.12em] text-inverse-foreground/40"
            >
              Contact
            </Text>
            <ul className="flex list-none flex-col gap-2.5">
              <li>
                <Text className="text-[15px] tracking-[0.02em] text-inverse-foreground/60">
                  {footer.contact.location}
                </Text>
              </li>
              <li>
                <FooterLink href={`mailto:${footer.contact.email}`}>
                  {footer.contact.email}
                </FooterLink>
              </li>
              <li className="pt-2">
                <FooterLink href={footer.contact.linkedIn.href} external>
                  {footer.contact.linkedIn.label}
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-inverse pt-5 md:mt-14">
          <Text className="text-sm tracking-[0.02em] text-inverse-foreground/30">
            © {year} {siteConfig.legalName}
          </Text>
        </div>
      </Container>
    </footer>
  );
}
