const capabilities = [
  { number: "01", name: "IT & Telecommunications" },
  { number: "02", name: "Facility Management" },
  { number: "03", name: "Construction & Design" },
  { number: "04", name: "Consulting & Professional Services" },
  { number: "05", name: "Events & Conference Management" },
] as const;

export function CapabilitySystem() {
  return (
    <figure className="relative mx-auto w-full max-w-md border border-border-subtle bg-[#f3f2ef] p-3 shadow-soft sm:max-w-lg sm:p-3.5 md:mx-0 md:max-w-none lg:p-4">
      <div className="relative overflow-hidden border border-black/[0.055] bg-[#faf9f7] px-4 py-6 sm:px-6 sm:py-8 lg:px-7 lg:py-9">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(28,28,28,.035) 1px,transparent 1px),linear-gradient(to bottom,rgba(28,28,28,.035) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative flex items-center justify-between gap-2 border-b border-black/10 pb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[.15em] text-black/60">
            Areas of expertise
          </span>
          <span className="text-[10px] tracking-[.12em] text-black/45">
            EST. 2008
          </span>
        </div>

        <div className="relative mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              className={`flex min-h-32 flex-col justify-between border border-black/10 bg-white/95 p-3.5 sm:min-h-36 sm:p-4 ${
                index === 4 ? "col-span-2 min-h-24 sm:min-h-28" : ""
              }`}
            >
              <span className="text-[10px] font-medium tracking-[.16em] text-[#9a8015]">
                {item.number}
              </span>
              <span className="max-w-[16rem] text-[13px] font-semibold leading-snug text-[#242424] sm:text-[15px]">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <figcaption className="sr-only">
        PayChex offers five distinct service areas: IT and
        Telecommunications, Facility Management, Construction and
        Design, Consulting and Professional Services, and Events
        and Conference Management.
      </figcaption>
    </figure>
  );
}
