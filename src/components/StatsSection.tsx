import { motion, type Variants } from "framer-motion";

const assetPathPrefix = "/assets";
const imgResearchEngineeringLab = `${assetPathPrefix}/fb137.png`;
const imgResearcher1 = `${assetPathPrefix}/952f2.png`;
const imgResearcher2 = `${assetPathPrefix}/3c623.png`;
const imgResearcher3 = `${assetPathPrefix}/c0a09.png`;
const imgContainer = `${assetPathPrefix}/66f34.svg`;
const imgContainer1 = `${assetPathPrefix}/712f9.svg`;
const imgContainer2 = `${assetPathPrefix}/060df.svg`;
const imgContainer3 = `${assetPathPrefix}/bd8a7.svg`;
const imgContainer4 = `${assetPathPrefix}/f26a3.svg`;
const imgIcon = `${assetPathPrefix}/faa59.svg`;

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55} },
};

export default function StatsSection() {
  return (
    <div className="bg-[#eef2f5] content-stretch flex flex-col items-start overflow-clip px-[40px] py-[80px] relative shrink-0 w-full" data-node-id="1:197">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1340px] mx-auto px-[24px] relative shrink-0 w-full">
        {/* Top row: stats card + center content + image card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] w-full"
        >
          {/* 98% Card */}
          <motion.div variants={statCardVariants} className="bg-white border border-[rgba(226,232,240,0.6)] border-solid lg:col-span-4 content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start justify-between min-h-[300px] p-[33px] relative rounded-[16px]">
            <div className="flex items-start justify-between w-full">
              <div className="bg-[#d9eaeb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]">
                <div className="h-[24.5px] relative shrink-0 w-[25.667px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] tracking-[-0.5px] whitespace-nowrap">
                <p className="leading-[28px]">01.</p>
              </div>
            </div>
            <div className="flex flex-col items-start pt-[32px] w-full">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-full">
                  <p className="leading-[24px]">Projects Completed.</p>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[72px] tracking-[-1.8px] w-full">
                  <p className="leading-[72px]">98%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center text + heading */}
          <motion.div variants={statCardVariants} className="lg:col-span-5 content-stretch flex flex-col items-start justify-center px-[24px] py-[16px] relative">
            <div className="pb-[16px] w-full">
              <div className="pt-[2px]">
                <div className="bg-[rgba(217,234,235,0.8)] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-fit">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#18797d] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                    <p className="leading-[16.5px]">GET TO KNOW US</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full mb-[16px]">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[clamp(28px,3vw,42px)] tracking-[-1.05px]">
                <p className="leading-[1.15] mb-0">Driving into</p>
                <p className="leading-[1.15] mb-0">Excellence &</p>
                <p className="leading-[1.15] mb-0">Innovation: Your</p>
                <p className="leading-[1.15] mb-0">Trusted Partner for</p>
                <p className="leading-[1.15] mb-0">Sustainable Academic</p>
                <p className="leading-[1.15]">Success.</p>
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="flex gap-[12px] items-center cursor-pointer group">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap group-hover:text-[#18797d] transition-colors">
                  <p className="leading-[22.5px]">Learn More</p>
                </div>
                <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]">
                  <div className="relative shrink-0 size-[10px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div variants={statCardVariants} className="lg:col-span-3 content-stretch flex h-[420px] items-start justify-end relative">
            <div className="bg-[#0f172a] content-stretch flex flex-col h-[300px] items-start justify-center max-w-[240px] overflow-clip relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-full">
              <div className="flex-1 min-h-px opacity-85 relative w-full">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgResearchEngineeringLab} />
                </div>
              </div>
              <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
              <div className="absolute flex inset-0 items-center justify-center">
                <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.4)] border-solid content-stretch flex items-center justify-center pl-[16px] pr-[14px] py-px relative rounded-[9999px] shrink-0 size-[56px]">
                  <div className="relative shrink-0" style={{ width: "11.917px", height: "15.167px" }}>
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom row: 3 stat cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="content-stretch flex flex-col md:flex-row gap-[24px] items-stretch justify-center w-full"
        >
          {/* Teal card with researchers */}
          <motion.div variants={statCardVariants} className="content-stretch flex flex-1 flex-col items-start justify-between min-h-[300px] min-w-px overflow-clip p-[32px] relative rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" style={{ backgroundImage: "linear-gradient(142deg, rgb(24,121,125) 0%, rgb(18,96,99) 50%, rgb(8,51,56) 100%)" }}>
            <div className="absolute bottom-[25.67%] right-[-16px] top-[25.67%]">
              <div className="relative shrink-0 size-[128px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
            </div>
            {/* Researcher avatars */}
            <div className="flex items-center relative shrink-0 w-full">
              <div className="max-w-[320px] mr-[-8px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[48px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0 object-cover" src={imgResearcher1} />
                </div>
              </div>
              <div className="max-w-[312px] mr-[-8px] relative shrink-0 size-[48px]">
                <div className="max-w-[320px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[48px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                    <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgResearcher2} />
                  </div>
                </div>
              </div>
              <div className="max-w-[312px] mr-[-8px] relative shrink-0 size-[48px]">
                <div className="max-w-[320px] relative rounded-[9999px] shadow-[0px_0px_0px_2px_white] shrink-0 size-[48px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9999px]">
                    <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgResearcher3} />
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[48px]">
                <div className="bg-[rgba(15,23,42,0.9)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]">
                  <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_0px_0px_2px_white] size-[48px] top-1/2" />
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                    <p className="leading-[20px]">+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pt-[32px] w-full">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.6px]">
                <p className="leading-[33px] mb-0">We have 100+ happy</p>
                <p className="leading-[33px] mb-0">researchers &</p>
                <p className="leading-[33px]">customer.</p>
              </div>
            </div>
          </motion.div>

          {/* 20M Card */}
          <motion.div variants={statCardVariants} className="bg-white border border-[rgba(226,232,240,0.6)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-start justify-between min-h-[300px] min-w-px p-[33px] relative rounded-[16px]">
            <div className="flex items-start justify-between w-full">
              <div className="bg-[#d9eaeb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]">
                <div className="relative shrink-0 size-[23px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] tracking-[-0.5px] whitespace-nowrap">
                <p className="leading-[28px]">02.</p>
              </div>
            </div>
            <div className="flex flex-col items-start pt-[32px] w-full">
              <div className="flex flex-col gap-[4px] items-start w-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-full">
                  <p className="leading-[24px]">Reach Worldwide</p>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[72px] tracking-[-1.8px] w-full">
                  <p className="leading-[72px]">20M</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 8.5X Card */}
          <motion.div variants={statCardVariants} className="bg-white border border-[rgba(226,232,240,0.6)] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-1 flex-col items-start justify-between min-h-[300px] min-w-px p-[33px] relative rounded-[16px]">
            <div className="flex items-start justify-between w-full">
              <div className="bg-[#d9eaeb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]">
                <div className="relative shrink-0 size-[21px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                </div>
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[20px] tracking-[-0.5px] whitespace-nowrap">
                <p className="leading-[28px]">03.</p>
              </div>
            </div>
            <div className="flex flex-col items-start pt-[32px] w-full">
              <div className="flex flex-col gap-[4px] items-start w-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[16px] w-full">
                  <p className="leading-[24px]">Faster Growth</p>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[72px] tracking-[-1.8px] w-full">
                  <p className="leading-[72px]">8.5X</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
