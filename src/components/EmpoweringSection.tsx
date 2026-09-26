import { motion, type Variants } from "framer-motion";

const assetPathPrefix = "/assets";
const imgBusinessTeam = `${assetPathPrefix}/b5b9c.png`;
const imgContainer12 = `${assetPathPrefix}/7ef9f.svg`;
const imgContainer13 = `${assetPathPrefix}/7853b.svg`;
const imgContainer14 = `${assetPathPrefix}/23d61.svg`;
const imgContainer15 = `${assetPathPrefix}/b7b77.svg`;
const imgVector = `${assetPathPrefix}/7ca28.svg`;
const imgVector1 = `${assetPathPrefix}/9d64c.svg`;
const imgVector2 = `${assetPathPrefix}/ab515.svg`;
const imgVector3 = `${assetPathPrefix}/97b18.svg`;
const imgVector4 = `${assetPathPrefix}/b4d25.svg`;

const features = [
  {
    icon: imgContainer13,
    iconSize: { w: "16.25px", h: "21.667px" },
    title: "Innovative Solutions",
    description: "Our team is always available to address your concerns, providing quick and effective solution to keep your business expert option.",
    divider: true,
  },
  {
    icon: imgContainer14,
    iconSize: { w: "10.833px", h: "21.667px" },
    title: "Winning Expertise",
    description: "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects base work",
    divider: true,
  },
  {
    icon: imgContainer15,
    iconSize: { w: "21.667px", h: "19.5px" },
    title: "Dedicated Support",
    description: "Our team is always available to address your concerns, providing quick and effective solution to keep your business for any business.",
    divider: false,
  },
];

const featureVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5} },
};

export default function EmpoweringSection() {
  return (
    <div className="bg-[#dbe6e2] content-stretch flex flex-col items-start overflow-clip px-[40px] py-[112px] relative shrink-0 w-full" data-node-id="1:534">
      {/* Background decorative vectors */}
      <div className="absolute flex flex-col inset-0 items-start opacity-40 overflow-clip pl-[590px] pointer-events-none">
        <div className="flex-1 min-h-px opacity-25 overflow-clip relative w-[850px]">
          <div className="absolute inset-[10%_-25.88%_10%_50.59%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
          <div className="absolute inset-[-5%_-40%_-5%_36.47%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
          </div>
          <div className="absolute inset-[-20%_-54.12%_-20%_22.35%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
          </div>
          <div className="absolute inset-[-35%_-68.24%_-35%_8.24%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
          </div>
          <div className="absolute inset-[-50%_-82.35%_-50%_-5.88%]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] max-w-[1400px] mx-auto relative shrink-0 w-full">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65}}
          className="bg-[#0f172a] lg:col-span-6 content-stretch flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 min-h-[400px]"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="Business team collaborating" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgBusinessTeam} />
          </div>
        </motion.div>

        {/* Right content */}
        <div className="lg:col-span-6 content-stretch flex flex-col items-start justify-center pl-[24px] relative self-center">
          {/* Section tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start pb-[16px] relative shrink-0 w-full"
          >
            <div className="flex gap-[8px] items-center">
              <div className="relative shrink-0" style={{ width: "13.5px", height: "15px" }}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer12} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#18797d] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
                <p className="leading-[16.5px]">CHOOSE THE BEST</p>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative shrink-0 w-full mb-[16px]"
          >
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[clamp(32px,3.5vw,48px)] tracking-[-1.2px]">
              <p className="leading-[1.12] mb-0">Empowering Business</p>
              <p className="leading-[1.12]">with Expertise.</p>
            </div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
            className="flex flex-col items-start w-full"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={featureVariants}>
                <div className="flex gap-[20px] items-start py-[28px] w-full">
                  <div className="bg-[#0f172a] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]">
                    <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[56px] top-0" />
                    <div className="relative shrink-0" style={{ width: feature.iconSize.w, height: feature.iconSize.h }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={feature.icon} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[3px] items-start min-w-px">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[18px] w-full">
                      <p className="leading-[28px]">{feature.title}</p>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px]">
                      <p className="leading-[22.75px]">{feature.description}</p>
                    </div>
                  </div>
                </div>
                {feature.divider && (
                  <div className="border-[rgba(203,213,225,0.7)] border-solid border-t h-px relative shrink-0 w-full" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
