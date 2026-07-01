export type Certificate = {
  desc: string;
  title: string;
  org: string;
  year: string;
  link?: string;
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function CertificateCard({
  item,
  className = "",
  size = "card",
}: {
  item: Certificate;
  className?: string;
  size?: "card" | "large";
}) {
  const isLarge = size === "large";

  const sealSize = isLarge ? "w-28 h-28" : "w-20 h-20";
  const innerSealSize = isLarge ? "w-24 h-24" : "w-16 h-16";
  const yearSize = isLarge ? "text-2xl" : "text-lg";
  const titleSize = isLarge ? "text-4xl" : "text-2xl";
  const descSize = isLarge ? "text-xl" : "text-[13px]";
  const ribbonW = isLarge ? "w-5" : "w-3.5";
  const ribbonH = isLarge ? "h-14" : "h-10";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl bg-[#F8F4EC] shadow-[0_18px_45px_rgba(42,61,99,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(42,61,99,0.18)] ${className}`}
    >
      {/* decorative corners */}
      <div className="pointer-events-none absolute top-5 left-5 h-6 w-6 border-l border-t border-[#2A3D63]/25" />
      <div className="pointer-events-none absolute top-5 right-5 h-6 w-6 border-r border-t border-[#2A3D63]/25" />
      <div className="pointer-events-none absolute bottom-5 left-5 h-6 w-6 border-b border-l border-[#2A3D63]/25" />
      <div className="pointer-events-none absolute right-5 bottom-5 h-6 w-6 border-r border-b border-[#2A3D63]/25" />

      {/* tiny sparkles */}
      <span className="absolute left-8 top-8 text-xs opacity-25">✦</span>
      <span className="absolute right-8 bottom-8 text-xs opacity-25">✦</span>

      <div className="relative z-10 flex flex-col items-center p-7 text-center sm:p-8">
        {/* seal */}
        <div className="relative mb-6">
          <div
            className={`${sealSize} relative flex items-center justify-center rounded-full border border-[#2A3D63]/20 bg-[#FDFBF7] shadow-inner`}
          >
            <div
              className={`${innerSealSize} flex flex-col items-center justify-center rounded-full bg-[#2A3D63] text-white shadow-lg`}
            >
              <span className={`font-display ${yearSize} leading-none`}>
                {item.year}
              </span>
            </div>
          </div>

          {/* ribbon */}
          <div className="absolute -bottom-3 left-1/2 -z-10 flex -translate-x-1/2 gap-1">
            <div
              className={`${ribbonW} ${ribbonH} bg-[#2A3D63]`}
              style={{
                clipPath: "polygon(0 0,100% 0,100% 100%,50% 84%,0 100%)",
              }}
            />
            <div
              className={`${ribbonW} ${ribbonH} bg-[#2A3D63]`}
              style={{
                clipPath: "polygon(0 0,100% 0,100% 100%,50% 84%,0 100%)",
              }}
            />
          </div>
        </div>

        <span className="mb-4 rounded-full bg-[#2A3D63]/6 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-[#2A3D63]/70">
          {item.desc}
        </span>

        <h3
          className={`font-display ${titleSize} italic leading-tight text-[#2A3D63]`}
        >
          {item.title}
        </h3>

        <div className="my-5 h-px w-14 bg-[#2A3D63]/25" />

        <p className={`${descSize} max-w-xs leading-relaxed text-zinc-600`}>
          {item.org}
        </p>
      </div>
    </div>
  );
}
