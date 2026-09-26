const assetPathPrefix = "/assets";
const imgSvg8 = `${assetPathPrefix}/bf9ed.svg`;
const imgLogo = `${assetPathPrefix}/logo.png`;
const imgSvg10 = `${assetPathPrefix}/3543d.svg`;
const imgSvg11 = `${assetPathPrefix}/75440.svg`;
const imgSvg12 = `${assetPathPrefix}/d9039.svg`;
const imgSvg13 = `${assetPathPrefix}/3feed.svg`;
const imgContainer22 = `${assetPathPrefix}/7a19c.svg`;
const imgContainer23 = `${assetPathPrefix}/d2c9e.svg`;
const imgContainer24 = `${assetPathPrefix}/5cb60.svg`;
const imgHeroBg = `${assetPathPrefix}/87b36.png`;
const img1TopCTA = `${assetPathPrefix}/727f3.svg`;

const servicesLinks = [
  "Project Development",
  "Research Writing",
  "Technical Setup",
  "Data Analysis",
  "Academic Reporting",
  "System Architecture",
];

const resourcesLinks = [
  { label: "Contact Us", badge: false },
  { label: "Our Team", badge: false },
  { label: "Student Reviews", badge: false },
  { label: "Careers", badge: true },
  { label: "Blog", badge: false },
  { label: "Give Feedback", badge: false },
];

export default function Footer() {
  return (
    <div id="footer" className="bg-[#eef3f2] content-stretch flex flex-col items-start overflow-clip py-[48px] relative shrink-0 w-full" data-node-id="1:898">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(145.39deg, rgba(24,121,125,0.05) 0%, rgba(24,121,125,0.05) 2.95%, rgba(24,121,125,0) 2.95%, rgba(24,121,125,0) 47.14%, rgba(24,121,125,0.05) 47.14%, rgba(24,121,125,0.05) 50.09%, rgba(24,121,125,0) 50.09%, rgba(24,121,125,0) 94.28%, rgba(24,121,125,0.05) 94.28%, rgba(24,121,125,0.05) 97.23%, rgba(24,121,125,0) 97.23%, rgba(24,121,125,0) 100%)",
        }}
      />

      <div className="content-stretch flex flex-col items-start max-w-[1400px] mx-auto px-[40px] relative shrink-0 w-full">
        {/* Top CTA Card */}
        <div
          className="border border-[rgba(255,255,255,0.2)] border-solid flex flex-col md:flex-row items-center justify-between min-h-[300px] overflow-clip p-[49px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full gap-8"
          style={{ backgroundImage: "linear-gradient(to right, #14666a, #18797d 50%, #1e898e)" }}
        >
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.1)] inset-0 to-[rgba(255,255,255,0)]" />
          <img alt="" className="absolute block inset-0 max-w-none size-full object-cover pointer-events-none" src={img1TopCTA} />

          {/* Left content */}
          <div className="max-w-[576px] relative shrink-0">
            <div className="flex flex-col items-start pb-[32px]">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[clamp(32px,3vw,44px)] text-white tracking-[-1.1px]">
                <p className="leading-[1] mb-0">Let's Build Future</p>
                <p className="leading-[1]">Together.</p>
              </div>
            </div>
            <div className="bg-[#081719] border border-[rgba(255,255,255,0.1)] border-solid flex gap-[12px] items-center pl-[25px] pr-[9px] py-[9px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[#0a1f23] transition-colors w-fit">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
                <p className="leading-[22.5px]">Get Started Now</p>
              </div>
              <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[9999px] shrink-0 size-[36px] flex items-center justify-center">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg8} />
                </div>
              </div>
            </div>
          </div>

          {/* Right image card */}
          <div className="h-[250px] relative shrink-0 w-full md:w-[450px]">
            <div className="flex items-center justify-end h-full">
              <div className="bg-[rgba(8,43,47,0.3)] border-2 border-[rgba(255,255,255,0.3)] border-solid flex flex-1 flex-col h-full items-start justify-center overflow-clip p-[2px] relative rounded-bl-[16px] rounded-br-[50px] rounded-tl-[50px] rounded-tr-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
                <div className="flex-1 min-h-px relative w-full">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgHeroBg} />
                  </div>
                  <div className="absolute bg-gradient-to-t from-[rgba(19,78,74,0.4)] inset-0 to-[rgba(19,78,74,0)] via-1/2 via-[rgba(19,78,74,0)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[32px] py-[64px] w-full">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 flex flex-col items-start justify-between pr-[16px]">
            <div className="flex flex-col gap-[19px] items-start pb-[28px] w-full">
              <div className="flex gap-[12px] items-center">
                <img alt="University Project Builder" src={imgLogo} className="h-[44px] w-auto object-contain" />
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.4px]">
                  <p className="leading-[24px]">University Project<br />Builder</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14.5px] max-w-[320px]">
                <p className="leading-[23.56px] mb-0">Building production-ready academic projects that</p>
                <p className="leading-[23.56px] mb-0">exceed university standards & help students</p>
                <p className="leading-[23.56px]">achieve distinction.</p>
              </div>
            </div>

            {/* Awards */}
            <div className="flex items-center pt-[8px]">
              <div className="flex gap-[8px] items-center">
                <div className="relative shrink-0" style={{ width: "28px", height: "40px" }}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg10} />
                </div>
                <div className="flex flex-col items-start">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] whitespace-nowrap">
                    <p className="leading-[18px]">50+</p>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#64748b] text-[10px] tracking-[0.5px] uppercase pt-[2px]">
                    <p className="leading-[15px]">PROJECTS DONE</p>
                  </div>
                </div>
                <div className="-scale-y-100 rotate-180" style={{ width: "28px", height: "40px" }}>
                  <img alt="" className="block max-w-none size-full" src={imgSvg11} />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 flex flex-col gap-[23px] items-start">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-full">
              <p className="leading-[28px]">Services</p>
            </div>
            <div className="flex flex-col gap-[11px] items-start w-full">
              {servicesLinks.map((link) => (
                <div key={link} className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14.5px] cursor-pointer hover:text-[#18797d] transition-colors">
                  <p className="leading-[21.75px]">{link}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 flex flex-col gap-[23px] items-start">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-full">
              <p className="leading-[28px]">Resources</p>
            </div>
            <div className="flex flex-col gap-[11px] items-start w-full">
              {resourcesLinks.map((link) => (
                <div key={link.label} className="flex gap-[8px] items-center">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14.5px] cursor-pointer hover:text-[#18797d] transition-colors">
                    <p className="leading-[21.75px]">{link.label}</p>
                  </div>
                  {link.badge && (
                    <div className="bg-[#18797d] flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.25px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">NEW</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-[24px] items-start">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[26px] w-full">
              <p className="leading-[35.75px] mb-0">Subscribe to Our</p>
              <p className="leading-[35.75px]">Newsletter.</p>
            </div>
            <div className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex flex-col items-start w-full">
                <div className="bg-white border border-[rgba(226,232,240,0.8)] border-solid flex h-[56px] items-center overflow-clip pl-[21px] pr-[57px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 min-w-px bg-transparent font-['Plus_Jakarta_Sans:Regular'] font-normal text-[15px] text-[#0f172a] placeholder-[#94a3b8] outline-none"
                  />
                  <div className="-translate-y-1/2 absolute bg-[#18797d] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center right-[12px] rounded-[8px] size-[36px] top-1/2">
                    <div className="flex items-center justify-center rotate-45 size-[16px]">
                      <img alt="" className="block size-full" src={imgSvg12} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[8px] items-center">
                <div className="bg-white border border-[#cbd5e1] border-solid relative rounded-[4px] shrink-0 size-[16px]" />
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[13px] whitespace-nowrap">
                  <p>
                    <span className="leading-[19.5px]">Agree to our </span>
                    <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[19.5px] text-[#1e293b]">Terms & Condition?</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="border-[rgba(203,213,225,0.7)] border-solid border-t flex flex-col md:flex-row items-start md:items-center justify-between pt-[33px] gap-4 w-full">
          {/* Phone & Email */}
          <div className="flex flex-wrap gap-[24px] items-center">
            <div className="flex gap-[10px] items-center cursor-pointer group">
              <div className="bg-[#18797d] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[12px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer22} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap group-hover:text-[#18797d] transition-colors">
                <p className="leading-[21px]">+1 (009) 544-7818</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer group">
              <div className="bg-[#18797d] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]">
                <div className="relative shrink-0" style={{ width: "13.333px", height: "10.667px" }}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer23} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap group-hover:text-[#18797d] transition-colors">
                <p className="leading-[21px]">hello@universityprojectbuilder.com</p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-[10px] items-center">
            <div className="bg-[#cbd5e1] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] cursor-pointer hover:bg-[#94a3b8] transition-colors">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">f</p>
              </div>
            </div>
            <div className="bg-[#cbd5e1] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] cursor-pointer hover:bg-[#94a3b8] transition-colors">
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg13} />
              </div>
            </div>
            <div className="bg-[#cbd5e1] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] cursor-pointer hover:bg-[#94a3b8] transition-colors">
              <div className="[word-break:break-word] flex flex-col font-serif font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">𝕏</p>
              </div>
            </div>
            <div className="bg-[#cbd5e1] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] cursor-pointer hover:bg-[#94a3b8] transition-colors">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                <p className="leading-[16px]">in</p>
              </div>
            </div>
          </div>

          {/* Copyright + Scroll to top */}
          <div className="flex gap-[16px] items-center">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">
              <p className="whitespace-pre">
                <span className="leading-[21px]">© 2026 </span>
                <span className="font-['Plus_Jakarta_Sans:Regular'] font-medium leading-[21px]">University Project Builder</span>
                <span className="leading-[21px]">  .  All right reserved</span>
              </p>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white border border-[rgba(226,232,240,0.8)] border-solid flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[36px] cursor-pointer hover:bg-[#f1f5f9] transition-colors"
            >
              <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-[-1px] rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[36px] top-1/2" />
              <div className="relative shrink-0 size-[13.333px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer24} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
