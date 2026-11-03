/**
 * Brand-native, image-free homepage visual.
 * Five capabilities connected by one integrated delivery model.
 */
const capabilities = [
  { number: "01", title: "IT &", detail: "Telecommunications", position: "top-left" },
  { number: "02", title: "Facility", detail: "Management", position: "top-right" },
  { number: "03", title: "Construction", detail: "& Design", position: "middle-left" },
  { number: "04", title: "Consulting &", detail: "Professional Services", position: "middle-right" },
  { number: "05", title: "Events &", detail: "Conference Management", position: "bottom" },
] as const;

export function CapabilitySystem() {
  return (
    <figure className="relative mx-auto w-full max-w-md border border-border-subtle bg-[#f3f2ef] p-3 shadow-soft sm:max-w-lg sm:p-3.5 md:mx-0 md:max-w-none lg:p-4">
      <div className="relative isolate aspect-[4/5] w-full overflow-hidden border border-black/[0.055] bg-[#f9f8f5] md:aspect-[3/4] lg:min-h-[28rem] xl:min-h-[32rem]">
        <div className="absolute inset-0 opacity-60" aria-hidden="true" style={{ backgroundImage: "linear-gradient(to right, rgba(28,28,28,.035) 1px, transparent 1px),linear-gradient(to bottom, rgba(28,28,28,.035) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3 border-b border-black/10 pb-3 sm:inset-x-7 sm:top-7" aria-hidden="true">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-[10px]">The PayChex System</span>
          <span className="flex items-center gap-1.5 text-[9px] font-medium tracking-[0.12em] text-black/45 sm:text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-[#e1bc19]" /> INTEGRATED DELIVERY</span>
        </div>
        <div className="absolute inset-x-[7%] bottom-[8%] top-[15%]">
          <svg className="absolute inset-0 h-full w-full text-[#c4a318]" viewBox="0 0 400 480" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.65" strokeDasharray="4 7">
              <path d="M200 235 L100 90 M200 235 L300 90 M200 235 L95 248 M200 235 L305 248 M200 235 L200 415" />
            </g>
            <g fill="#c4a318"><circle cx="100" cy="90" r="3"/><circle cx="300" cy="90" r="3"/><circle cx="95" cy="248" r="3"/><circle cx="305" cy="248" r="3"/><circle cx="200" cy="415" r="3"/></g>
          </svg>
          <div className="absolute left-1/2 top-[49%] z-10 flex h-[24%] w-[46%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center border border-[#bba028] bg-[#e5c52f] px-2 text-center shadow-[0_12px_28px_-16px_rgba(0,0,0,.3)] sm:w-[43%]">
            <span className="mb-2 flex h-8 w-8 items-center justify-center border border-black/25 text-lg font-light text-black" aria-hidden="true">+</span>
            <span className="text-[13px] font-semibold leading-tight text-[#171717] sm:text-base">Integrated<br/>Solutions</span>
            <span className="mt-1.5 text-[8px] font-medium uppercase tracking-[0.13em] text-black/65 sm:text-[9px]">One partner</span>
          </div>
          {capabilities.map((item) => {
            const positions = {
              "top-left": "left-0 top-[5%]",
              "top-right": "right-0 top-[5%]",
              "middle-left": "left-0 top-[39%]",
              "middle-right": "right-0 top-[39%]",
              bottom: "left-1/2 bottom-0 -translate-x-1/2",
            };
            return (
              <div key={item.number} className={`absolute z-10 flex min-h-[18%] w-[37%] flex-col justify-center border border-black/10 bg-white/95 px-2.5 py-2.5 shadow-[0_6px_20px_-16px_rgba(0,0,0,.25)] sm:px-4 ${positions[item.position]}`}>
                <span className="mb-2 text-[9px] font-medium tracking-[0.15em] text-[#9c8422]">{item.number}</span>
                <span className="text-[11px] font-semibold leading-[1.2] text-[#242424] sm:text-[13px]">{item.title}</span>
                <span className="text-[10px] leading-[1.25] text-[#545454] sm:text-xs">{item.detail}</span>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-3 right-4 text-[9px] font-medium uppercase tracking-[0.16em] text-black/35 sm:bottom-5 sm:right-6" aria-hidden="true">Five disciplines · One standard</div>
      </div>
      <figcaption className="sr-only">PayChex's five areas of expertise connect through a central integrated solutions model: IT and Telecommunications, Facility Management, Construction and Design, Consulting and Professional Services, and Events and Conference Management.</figcaption>
    </figure>
  );
}
