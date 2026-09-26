import { motion, type Variants } from "framer-motion";
import { services } from "../data/services";

const assetPathPrefix = "/assets";
const imgContainer6 = `${assetPathPrefix}/be708.svg`;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5} },
};

export default function SolutionsSection() {
  return (
    <div id="solutions" className="bg-[rgba(242,244,243,0.5)] content-stretch flex flex-col items-center py-[96px] relative shrink-0 w-full" data-node-id="1:277">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] mx-auto px-[24px] relative w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="content-stretch flex flex-col lg:flex-row items-end justify-between gap-8 relative shrink-0 w-full"
        >
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#005f62] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
              <p className="leading-[14px]">OUR SOLUTIONS</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f1e36] text-[clamp(28px,3vw,40px)] tracking-[-0.8px]">
              <p className="leading-[1.2] mb-0">Solutions to Transform Your Project Idea</p>
              <p className="leading-[1.2]">Into Reality.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#4d6266] text-[15px]">
              <p className="leading-[24px] mb-0">End-to-end technical execution tailored specifically to meet</p>
              <p className="leading-[24px] mb-0">external review standards, academic rubrics, and modern</p>
              <p className="leading-[24px]">technology enterprise baselines.</p>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-start justify-between p-[40px] relative rounded-[16px] hover:shadow-md transition-shadow"
            >
              <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                <div
                  className="content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]"
                  style={{ backgroundColor: service.iconBg }}
                >
                  <div className="relative shrink-0" style={{ width: "20px", height: "18px" }}>
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={service.icon} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#0f1e36] text-[18px] tracking-[-0.09px] w-full">
                    <p className="leading-[26px]">{service.title}</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#4d6266] text-[15px] w-full">
                    <p className="leading-[24px]">{service.description}</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#4d6266] text-[11px] tracking-[0.55px] uppercase whitespace-nowrap">
                    <p className="leading-[14px]">{service.tag}</p>
                  </div>
                  <div className="bg-[#edeeed] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]">
                    <div className="relative shrink-0 size-[10.667px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
