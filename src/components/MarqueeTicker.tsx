// ── EDIT THIS LIST to add/remove universities ──────────────────────────────
// logo: path to image in /public  (e.g. "/assets/bubt.png")
// name: university short name shown below the logo
const universities = [
  { logo: "/assets/green.png",   name: "GUB" },
  { logo: "/assets/diu.webp",   name: "DIU" },
  { logo: "/assets/aiub.jpg",  name: "AIUB" },
  { logo: "/assets/aust.png",  name: "AUST" },
  { logo: "/assets/brac.png",  name: "BRAC University" },
  { logo: "/assets/nsu.png",   name: "NSU" },
  { logo: "/assets/bubt.png",  name: "BUBT" },
  { logo: "/assets/iubat.png",  name: "IUBAT" },
  { logo: "/assets/uap.png",   name: "UAP" },
  { logo: "/assets/uiu.svg",   name: "UIU" },
  { logo: "/assets/east.webp",  name: "East West Uni" },
  { logo: "/assets/uttara.png",   name: "Uttara University" },
  { logo: "/assets/wub.jpg",   name: "World University" },
  { logo: "/assets/iub.png",   name: "IUB" },
  { logo: "/assets/manarat.jpg",   name: "Manarat I. University"  },
  { logo: "/assets/gono.webp",   name: "Gono Bishwabidyalay" },
];
// ────────────────────────────────────────────────────────────────────────────

// Duplicate list so the seamless infinite scroll has enough cards
const marqueeItems = [...universities, ...universities];

function UniversityCard({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="bg-white border border-[rgba(226,232,240,0.6)] border-solid flex h-[112px] w-[200px] shrink-0 flex-col items-center justify-center gap-[10px] rounded-[16px] px-[20px] py-[12px] shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <img
        src={logo}
        alt={name}
        className="h-[52px] w-auto max-w-[140px] object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <p className="text-center text-[11px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold leading-[14px] text-[#475569] tracking-[0.3px]">
        {name}
      </p>
    </div>
  );
}

export default function MarqueeTicker() {
  return (
    <div className="bg-[#eef2f5] border-[rgba(226,235,235,0.6)] border-b border-solid border-t content-stretch flex flex-col items-start overflow-clip py-[49px] relative shrink-0 w-full" data-node-id="1:105">
      {/* Join Over badge */}
      <div className="flex flex-col items-center w-full pb-[36px] px-[24px]">
        <div className="bg-[rgba(255,255,255,0.9)] border border-[#cbd5e1] border-solid content-stretch flex gap-[6px] items-center justify-center px-[25px] py-[9px] relative rounded-[9999px] shrink-0">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Projects Delivered to Students over</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#18797d] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">30+</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Universities by </p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">University Projects Builder</p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="h-[120px] relative shrink-0 w-full overflow-clip">
        <div className="-translate-y-1/2 absolute top-1/2 left-0 flex gap-[24px] items-center py-[4px] animate-marquee" style={{ width: "max-content" }}>
          {marqueeItems.map((item, i) => (
            <UniversityCard key={i} logo={item.logo} name={item.name} />
          ))}
        </div>
        {/* Gradient fades */}
        <div className="absolute bg-gradient-to-r bottom-0 from-[#eef2f5] left-0 to-[rgba(238,242,245,0)] top-0 w-[144px] pointer-events-none z-10" />
        <div className="absolute bg-gradient-to-l bottom-0 from-[#eef2f5] right-0 to-[rgba(238,242,245,0)] top-0 w-[144px] pointer-events-none z-10" />
      </div>
    </div>
  );
}
