import { motion, type Variants } from "framer-motion";

const assetPathPrefix = "/assets";
const imgSvg = `${assetPathPrefix}/2041d.svg`;
const imgSvg4 = `${assetPathPrefix}/eba4f.svg`;

interface ProcessCard {
  num: string;
  title: string;
  description: string;
  showArrow: boolean;
}

const cards: ProcessCard[] = [
  {
    num: "01",
    title: "Discovery & Planning",
    description: "The first step in our process is understanding your unique business needs, objectives, and academic challenges.",
    showArrow: true,
  },
  {
    num: "02",
    title: "Execution & Delivery",
    description: "Once the plan is in place, our team moves forward with execution, turning strategies into action to deliver production excellence.",
    showArrow: true,
  },
  {
    num: "03",
    title: "Review & Support",
    description: "After project completion, we conduct a thorough review to ensure everything aligns with your goals, criteria, and requirements.",
    showArrow: false,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55} },
};

export default function ProcessSection() {
  return (
    <div className="bg-[#dbe6e2] content-stretch flex flex-col items-start overflow-clip px-[24px] py-[80px] relative shrink-0 w-full" data-node-id="1:148">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1400px] mx-auto px-[24px] relative shrink-0 w-full">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative shrink-0 w-full"
        >
          <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[576px] pt-px relative shrink-0">
            <div className="bg-[rgba(255,255,255,0.8)] border border-[rgba(24,121,125,0.2)] border-solid content-stretch flex items-center px-[13px] py-[5px] relative rounded-[6px] shrink-0">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#18797d] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
                <p className="leading-[16.5px]">OUR PROCESS</p>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[clamp(36px,3.5vw,50px)] tracking-[-1.25px]">
              <p className="leading-[1.1] mb-0">Seamless Process,</p>
              <p className="leading-[1.1]">
                <span>Great </span>
                <span className="font-['Plus_Jakarta_Sans:Regular'] font-normal text-[#94a3b8]">Results.</span>
              </p>
            </div>
          </div>
          <div className="max-w-[384px] relative shrink-0">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[15px]">
              <p className="leading-[24.38px] mb-0">Developing personalized academic roadmaps and</p>
              <p className="leading-[24.38px] mb-0">customer journeys to increase satisfaction, project</p>
              <p className="leading-[24.38px]">precision, and defense loyalty.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="bg-[#18797d] content-stretch flex gap-[12px] items-center pl-[28px] pr-[10px] py-[10px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[#1a8a8f] transition-colors">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-white whitespace-nowrap">
                <p className="leading-[22.5px]">Request a Call</p>
              </div>
              <div className="bg-[#082b2f] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]">
                <div className="relative shrink-0 size-[16px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.14 }}
          className="content-stretch flex flex-col md:flex-row gap-[32px] items-stretch justify-center relative shrink-0 w-full"
        >
          {cards.map((card) => (
            <motion.div key={card.num} variants={cardVariants} className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start min-h-[340px] pb-[64px] pt-[40px] px-[40px] relative rounded-[16px] flex-1">
              <div className="content-stretch flex flex-col gap-[14.9px] items-start relative shrink-0 w-full">
                <div className="[word-break:break-word] bg-clip-text bg-gradient-to-b flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-black from-[rgba(24,121,125,0.5)] justify-center leading-[0] relative shrink-0 text-[96px] text-[transparent] to-[rgba(24,121,125,0)] via-1/2 via-[rgba(24,121,125,0.25)] whitespace-nowrap">
                  <p className="leading-[96px]">{card.num}</p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[9px] relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[24px] w-full">
                    <p className="leading-[32px]">{card.title}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[15px] w-full">
                    <p className="leading-[24.38px]">{card.description}</p>
                  </div>
                </div>
              </div>
              {card.showArrow && (
                <div className="-translate-y-1/2 absolute bg-white border border-[#e2e8f0] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center p-px right-[-24px] rounded-[9999px] size-[44px] top-[50%] z-10 hidden md:flex">
                  <div className="relative shrink-0 size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg4} />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
