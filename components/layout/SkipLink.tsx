export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="bg-foreground text-background sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-control focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:shadow-soft focus:outline-2 focus:outline-offset-2 focus:outline-foreground"
    >
      Skip to main content
    </a>
  );
}
