import { useState } from "react";

const assetPathPrefix = "/assets";
const imgSvg8 = `${assetPathPrefix}/bf9ed.svg`;
const imgLogo = `${assetPathPrefix}/blogo.png`;
const imgSvg10 = `${assetPathPrefix}/3543d.svg`;
const imgSvg11 = `${assetPathPrefix}/75440.svg`;
const imgSvg12 = `${assetPathPrefix}/d9039.svg`;
const imgSvg13 = `${assetPathPrefix}/3feed.svg`;
const imgContainer22 = `${assetPathPrefix}/7a19c.svg`;
const imgContainer23 = `${assetPathPrefix}/d2c9e.svg`;
const imgContainer24 = `${assetPathPrefix}/5cb60.svg`;
const imgTopCTA = `${assetPathPrefix}/footer-cta2.png`;

interface LinkItem {
  label: string;
  badge?: boolean;
  action: () => void;
}

export default function Footer() {
  const [agreed, setAgreed] = useState(true);
  const [emailInput, setEmailInput] = useState("");

  const navigateTo = (targetId: string) => {
    const isHome = window.location.pathname === "/" || window.location.pathname === "";
    if (!isHome) {
      window.location.href = `/#${targetId}`;
    } else {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const servicesLinks: LinkItem[] = [
    { label: "Web Development", action: () => navigateTo("solutions") },
    { label: "AI & Machine Learning", action: () => navigateTo("solutions") },
    { label: "IoT & Embedded Systems", action: () => navigateTo("solutions") },
    { label: "Thesis & Research", action: () => navigateTo("solutions") },
    { label: "Viva & Defense Prep", action: () => navigateTo("solutions") },
    { label: "Documentation & Reports", action: () => navigateTo("solutions") },
  ];

  const resourcesLinks: LinkItem[] = [
    { label: "Contact Us", action: () => navigateTo("contact") },
    { label: "Student Reviews", action: () => navigateTo("reviews") },
    { label: "Project Portfolio", action: () => navigateTo("projects") },
    { label: "Read Our Blog", action: () => { window.location.href = "/blog"; } },
    { label: "FAQs & Pricing", action: () => navigateTo("contact") },
    {
      label: "Give Feedback",
      badge: true,
      action: () => {
        const url = `https://wa.me/8801788392063?text=${encodeURIComponent(
          "*Student Feedback - University Project Builder*\n\nHi! I'd like to share feedback about my project experience:"
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
      },
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Terms & Conditions first.");
      return;
    }

    const message = [
      `*Project Updates & WhatsApp Support Request*`,
      emailInput ? `*Email:* ${emailInput}` : null,
      `*Note:* Please keep me updated with project ideas, guidelines & student discounts!`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/8801788392063?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="footer" className="bg-[#eef3f2] flex flex-col items-start overflow-clip pt-[40px] pb-[32px] relative shrink-0 w-full" data-node-id="1:898">
      {/* The footer surface starts behind the overlapping CTA. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[10px] top-[150px] bottom-[10px] overflow-hidden rounded-[8px] bg-[#d8e6e7] pointer-events-none"
      >
        <div
          className="absolute left-0 top-0 h-[460px] w-[300px] opacity-60"
          style={{
            backgroundImage: "repeating-radial-gradient(ellipse at -160% -45%, transparent 0 10px, rgba(90,130,132,0.24) 11px 12px, transparent 13px 18px)",
            maskImage: "linear-gradient(120deg, black, transparent 72%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 h-[500px] w-[320px] opacity-60"
          style={{
            backgroundImage: "repeating-radial-gradient(ellipse at 260% 145%, transparent 0 10px, rgba(90,130,132,0.24) 11px 12px, transparent 13px 18px)",
            maskImage: "linear-gradient(300deg, black, transparent 72%)",
          }}
        />
      </div>

      <div className="flex flex-col items-start max-w-[1400px] mx-auto px-[24px] sm:px-[40px] relative shrink-0 w-full">
        {/* Top CTA Card */}
        <div
          className="bg-[#1e8a8a] isolate min-h-[300px] lg:min-h-[340px] overflow-hidden relative rounded-[8px] shrink-0 w-full"
        >
          {/* Left content */}
          <div className="relative z-10 w-full md:w-[58%] px-[24px] py-[32px] sm:px-[40px] lg:px-[52px] lg:py-[48px]">
            <div className="flex flex-col items-start pb-[22px]">
              <div className="font-['Plus_Jakarta_Sans:Medium'] font-medium leading-[1.12] text-[32px] sm:text-[40px] lg:text-[52px] xl:text-[60px] text-white tracking-normal">
                <p className="mb-0">Let's Build Projects</p>
                <p>Together.</p>
              </div>
            </div>
            <a
              href="https://wa.me/+8801788392063" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#081719] flex gap-[12px] items-center pl-[22px] pr-[4px] py-[4px] rounded-full hover:bg-[#0a1f23] transition-colors w-fit font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-[14px] leading-[22px] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get Started Now
              <span className="bg-white rounded-full shrink-0 size-[36px] flex items-center justify-center">
                <span className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg8} />
                </span>
              </span>
            </a>
          </div>

          <img
            alt=""
            src={imgTopCTA}
            className="block w-full aspect-[486/254] object-cover md:absolute md:inset-y-0 md:right-0 md:h-full md:w-1/2 md:aspect-auto pointer-events-none"
            style={{ maskImage: "linear-gradient(to right, transparent, black 16%)" }}
          />
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[32px] pt-[56px] md:pt-[80px] pb-[64px] w-full">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 flex flex-col items-start justify-between pr-[16px]">
            <div className="flex flex-col gap-[19px] items-start pb-[28px] w-full">
              <div className="flex gap-[12px] items-center">
                <img alt="University Project Builder" src={imgLogo} className="h-[84px] w-auto object-contain" />
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] tracking-[-0.4px]">
                  <p className="leading-[24px]">University Project<br />Builder</p>
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14.5px] max-w-[320px]">
                <p className="leading-[23.56px] mb-0">Building production-ready academic projects</p>
                <p className="leading-[23.56px] mb-0"> that exceed university standards &</p>
                <p className="leading-[23.56px]"> help students achieve distinction.</p>
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
              {servicesLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="[word-break:break-word] text-left font-['Plus_Jakarta_Sans:Regular'] font-normal text-[#475569] text-[14.5px] cursor-pointer hover:text-[#18797d] transition-colors bg-transparent border-0 p-0 outline-none"
                >
                  <span className="leading-[21.75px]">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 flex flex-col gap-[23px] items-start">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-full">
              <p className="leading-[28px]">Quick Links</p>
            </div>
            <div className="flex flex-col gap-[11px] items-start w-full">
              {resourcesLinks.map((item) => (
                <div key={item.label} className="flex gap-[8px] items-center">
                  <button
                    onClick={item.action}
                    className="[word-break:break-word] text-left font-['Plus_Jakarta_Sans:Regular'] font-normal text-[#475569] text-[14.5px] cursor-pointer hover:text-[#18797d] transition-colors bg-transparent border-0 p-0 outline-none"
                  >
                    <span className="leading-[21.75px]">{item.label}</span>
                  </button>
                  {item.badge && (
                    <div className="bg-[#18797d] flex flex-col items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.25px] uppercase whitespace-nowrap">
                        <p className="leading-[15px]">HOT</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Stay Connected on WhatsApp / Updates */}
          <div className="lg:col-span-4 flex flex-col gap-[24px] items-start">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[26px] w-full">
              <p className="leading-[35.75px] mb-0">Get Project Help &</p>
              <p className="leading-[35.75px]">Direct Updates.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-[16px] items-start w-full">
              <div className="flex flex-col items-start w-full">
                <div className="bg-white border border-[rgba(226,232,240,0.8)] border-solid flex h-[56px] items-center overflow-clip pl-[21px] pr-[57px] relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full focus-within:border-[#18797d] transition-colors">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter email for WhatsApp support"
                    className="flex-1 min-w-px bg-transparent font-['Plus_Jakarta_Sans:Regular'] font-normal text-[15px] text-[#0f172a] placeholder-[#94a3b8] outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Connect on WhatsApp"
                    className="-translate-y-1/2 absolute bg-[#18797d] hover:bg-[#1a8a8f] active:scale-95 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center right-[12px] rounded-[8px] size-[36px] top-1/2 transition-all cursor-pointer border-0"
                  >
                    <div className="flex items-center justify-center rotate-45 size-[16px]">
                      <img alt="" className="block size-full" src={imgSvg12} />
                    </div>
                  </button>
                </div>
              </div>
              <label className="flex gap-[8px] items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="size-[18px] rounded-[4px] border border-[#94a3b8] flex items-center justify-center transition-colors peer-checked:bg-[#18797d] peer-checked:border-[#18797d] bg-white">
                  {agreed && (
                    <svg className="w-3 h-3 text-white stroke-current stroke-2" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative min-w-0 text-[#475569] text-[13px]">
                  <p>
                    <span className="leading-[19.5px]">Agree to our </span>
                    <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[19.5px] text-[#1e293b]">Terms & Conditions</span>
                  </p>
                </div>
              </label>
            </form>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="border-[rgba(90,130,132,0.18)] border-solid border-y flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between py-[20px] gap-4 w-full">
          {/* Phone & Email */}
          <div className="flex flex-wrap gap-[24px] items-center">
            <div className="flex min-w-0 max-w-full gap-[10px] items-center cursor-pointer group">
              <div className="bg-[#18797d] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]">
                <div className="relative shrink-0 size-[12px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer22} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#334155] text-[14px] whitespace-nowrap group-hover:text-[#18797d] transition-colors">
                <a href="tel:+8801788392063" className="leading-[21px]">
                  +880 1788-392063
                </a>
              </div>
            </div>
            <div className="flex min-w-0 max-w-full gap-[10px] items-center cursor-pointer group">
              <div className="bg-[#18797d] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]">
                <div className="relative shrink-0" style={{ width: "13.333px", height: "10.667px" }}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer23} />
                </div>
              </div>
              <div className="[overflow-wrap:anywhere] min-w-0 flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative text-[#334155] text-[14px] group-hover:text-[#18797d] transition-colors">
                <a href="mailto:universityprojectbuilder@gmail.com" className="leading-[21px]">
                  universityprojectbuilder@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-[10px] items-center">
            <div className="bg-[#cbd5e1] flex items-center justify-center rounded-[9999px] shrink-0 size-[32px] cursor-pointer hover:bg-[#94a3b8] transition-colors">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#334155] text-[12px] text-center whitespace-nowrap">
                <a href="https://www.facebook.com/universityprojects" target="_blank" rel="noopener noreferrer" className="leading-[16px]">
                  f
                </a>
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
          <div className="flex max-w-full gap-[16px] items-center">
            <div className="[word-break:break-word] min-w-0 flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative text-[#475569] text-[14px]">
              <p className="whitespace-pre-wrap">
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
