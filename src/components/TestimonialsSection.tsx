import { motion, type Variants } from "framer-motion";
import { testimonials } from "../data/testimonials";

const assetPathPrefix = "/assets";
const imgContainer16 = `${assetPathPrefix}/c0efd.svg`;
const imgContainer17 = `${assetPathPrefix}/816a4.svg`;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52} },
};

export default function TestimonialsSection() {
  return (
    <div className="bg-[#f2f4f3] content-stretch flex flex-col items-start overflow-clip py-[80px] relative shrink-0 w-full" data-node-id="1:588">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1600px] mx-auto px-[24px] relative shrink-0 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          <div className="flex flex-col items-start pb-[16px] relative shrink-0">
            <div className="flex gap-[6px] items-center">
              <div className="relative shrink-0" style={{ width: "12px", height: "13.333px" }}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer16} />
              </div>
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#18797d] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
                <p className="leading-[16px]">CHOOSE THE BEST</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[clamp(32px,3.5vw,48px)] text-center tracking-[-1.2px]">
            <p className="leading-[1] mb-0">Our Clients Share Their</p>
            <p className="leading-[1]">Success Stories.</p>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] w-full"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className={`bg-white border border-[rgba(226,232,240,0.8)] border-solid content-stretch flex flex-col items-start justify-between p-[33px] relative rounded-[16px] ${i === 1 ? "shadow-[0px_0px_0px_1px_rgba(24,121,125,0.1),0px_1px_2px_0px_rgba(0,0,0,0.05)]" : "drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]"}`}
            >
              <div className="flex flex-col gap-[22px] items-start pb-[32px] relative shrink-0 w-full">
                {/* 5 stars */}
                <div className="flex gap-[4px] items-center">
                  {[...Array(5)].map((_, si) => (
                    <div key={si} className="relative shrink-0" style={{ width: "15px", height: "14.25px" }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer17} />
                    </div>
                  ))}
                </div>
                {/* Review text */}
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14.5px] w-full">
                  <p className="leading-[23.56px]">{t.text}</p>
                </div>
              </div>

              {/* Author */}
              <div className="border-[#e2e8f0] border-dashed border-t relative shrink-0 w-full">
                <div className="flex gap-[14px] items-center pt-[25px]">
                  <div className="relative rounded-[9999px] shrink-0 size-[48px] overflow-hidden">
                    <img alt={t.name} className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={t.avatar} />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[15px] whitespace-nowrap">
                      <p className="leading-[22.5px]">{t.name}</p>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination dots */}
        <div className="flex gap-[8px] items-center justify-center w-full">
          <div className="bg-[#18797d] h-[8px] relative rounded-[9999px] shrink-0 w-[32px]" />
          <div className="bg-[#cbd5e1] relative rounded-[9999px] shrink-0 size-[8px]" />
          <div className="bg-[#cbd5e1] relative rounded-[9999px] shrink-0 size-[8px]" />
        </div>
      </div>
    </div>
  );
}
