const marqueeItems = [
  { name: "Influence", tag: "4You", type: "tagbadge" },
  { name: "tse", subtitle: "ÉNERGIE DE CONFIANCE", type: "stacked" },
  { name: "monceau", prefix: "m", type: "monogram" },
  { name: "coudac", suffix: "™", type: "wordmark" },
  { name: "flomodia", type: "serif" },
  { name: "Influence", tag: "4You", type: "tagbadge" },
  { name: "tse", subtitle: "ÉNERGIE DE CONFIANCE", type: "stacked" },
  { name: "monceau", prefix: "m", type: "monogram" },
  { name: "coudac", suffix: "™", type: "wordmark" },
  { name: "flomodia", type: "serif" },
];

function MarqueeCard({ item }: { item: typeof marqueeItems[0] }) {
  if (item.type === "tagbadge") {
    return (
      <div className="bg-white border border-[rgba(226,232,240,0.6)] border-solid content-stretch flex h-[112px] items-center justify-center px-[33px] py-px relative rounded-[16px] shrink-0 w-[256px]">
        <div className="relative shrink-0">
          <div className="flex gap-[8px] items-center">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.6px] whitespace-nowrap">
              <p className="leading-[32px]">{item.name}</p>
            </div>
            <div className="border-2 border-[#334155] border-solid content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">
                <p className="leading-[16px]">{item.tag}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (item.type === "stacked") {
    return (
      <div className="bg-white border border-[rgba(226,232,240,0.6)] border-solid content-stretch flex h-[112px] items-center justify-center px-[33px] py-px relative rounded-[16px] shrink-0 w-[256px]">
        <div className="flex flex-col items-center">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] lowercase relative shrink-0 text-[#1e293b] text-[30px] tracking-[-1.5px] whitespace-nowrap">
            <p className="leading-[30px]">{item.name}</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[9px] tracking-[0.9px] uppercase whitespace-nowrap pt-[2px]">
            <p className="leading-[13.5px]">{item.subtitle}</p>
          </div>
        </div>
      </div>
    );
  }

  if (item.type === "monogram") {
    return (
      <div className="bg-white border border-[rgba(226,232,240,0.6)] border-solid content-stretch flex h-[112px] items-center justify-center px-[33px] py-px relative rounded-[16px] shrink-0 w-[256px]">
        <div className="flex gap-[10px] items-center">
          <div className="bg-[#1e293b] content-stretch flex items-center justify-center pb-[4.5px] pt-[3.5px] relative rounded-[9999px] shrink-0 size-[32px]">
            <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Bold_Italic'] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
              <p className="leading-[24px]">{item.prefix}</p>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.6px] whitespace-nowrap">
            <p className="leading-[32px]">{item.name}</p>
          </div>
        </div>
      </div>
    );
  }

  if (item.type === "wordmark") {
    return (
      <div className="bg-white border border-[rgba(226,232,240,0.6)] border-solid content-stretch flex h-[112px] items-center justify-center px-[33px] py-px relative rounded-[16px] shrink-0 w-[256px]">
        <div className="relative flex items-baseline">
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-black justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[30px] tracking-[-0.75px] whitespace-nowrap">
            <p className="leading-[36px]">{item.name}</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap pl-[2px]">
            <p className="leading-[16px]">{item.suffix}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[rgba(226,232,240,0.6)] border-solid content-stretch flex h-[112px] items-center justify-center px-[33px] py-px relative rounded-[16px] shrink-0 w-[256px]">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Bold_Italic'] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[30px] whitespace-nowrap">
        <p className="leading-[36px]">{item.name}</p>
      </div>
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
            <p className="leading-[21px]">Join Over</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#18797d] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">30+</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Universities with</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">University Projects Builder</p>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Here</p>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="h-[120px] relative shrink-0 w-full overflow-clip">
        <div className="-translate-y-1/2 absolute top-1/2 left-0 flex gap-[24px] items-center py-[4px] animate-marquee" style={{ width: "max-content" }}>
          {marqueeItems.map((item, i) => (
            <MarqueeCard key={i} item={item} />
          ))}
        </div>
        {/* Gradient fades */}
        <div className="absolute bg-gradient-to-r bottom-0 from-[#eef2f5] left-0 to-[rgba(238,242,245,0)] top-0 w-[144px] pointer-events-none z-10" />
        <div className="absolute bg-gradient-to-l bottom-0 from-[#eef2f5] right-0 to-[rgba(238,242,245,0)] top-0 w-[144px] pointer-events-none z-10" />
      </div>
    </div>
  );
}
