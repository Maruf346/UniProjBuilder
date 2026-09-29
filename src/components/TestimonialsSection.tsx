import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

const assetPathPrefix = "/assets";
const imgContainer16 = `${assetPathPrefix}/c0efd.svg`;
const imgContainer17 = `${assetPathPrefix}/816a4.svg`;

const CARD_WIDTH = 380;   // px — visible card width
const GAP = 32;            // px — gap between cards
const STEP = CARD_WIDTH + GAP;
const AUTO_SCROLL_MS = 3500;

export default function TestimonialsSection() {
  const total = testimonials.length;

  // We duplicate the list so we can loop seamlessly
  const doubled = [...testimonials, ...testimonials];

  const [index, setIndex] = useState(0);          // logical index (0 – total-1)
  const [offset, setOffset] = useState(0);        // pixel offset
  const [animated, setAnimated] = useState(true); // enable CSS transition
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Advance one card forward
  const advance = (next: number) => {
    const nextOffset = next * STEP;
    setAnimated(true);
    setOffset(nextOffset);
    setIndex(next % total);
  };

  // When the transition ends on the "duplicated" half, silently jump back
  const handleTransitionEnd = () => {
    if (index >= total) {
      setAnimated(false);
      const resetIndex = index % total;
      setOffset(resetIndex * STEP);
      setIndex(resetIndex);
    }
  };

  // Auto-scroll timer
  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = index + 1 >= total ? 0 : index + 1;
      // Use the doubled array trick: jump to index + total to animate out, then reset
      const rawNext = offset / STEP + 1;
      advance(rawNext);
    }, AUTO_SCROLL_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, offset]);

  // Dot navigation
  const goTo = (dotIndex: number) => {
    setAnimated(true);
    setOffset(dotIndex * STEP);
    setIndex(dotIndex);
  };

  return (
    <div
      className="bg-[#f2f4f3] content-stretch flex flex-col items-start overflow-clip py-[80px] relative shrink-0 w-full"
      data-node-id="1:588"
    >
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
                <p className="leading-[16px]">WHAT STUDENTS SAY</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:ExtraBold'] font-extrabold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[clamp(32px,3.5vw,48px)] text-center tracking-[-1.2px]">
            <p className="leading-[1] mb-0">Real Students, Real Results.</p>
            <p className="leading-[1]">No Fake Stories.</p>
          </div>
        </motion.div>

        {/* Carousel viewport */}
        <div className="w-full overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${offset}px)`,
              transition: animated ? "transform 0.55s cubic-bezier(0.4,0,0.2,1)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {doubled.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="bg-white border border-[rgba(226,232,240,0.8)] border-solid content-stretch flex flex-col items-start justify-between p-[33px] relative rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] shrink-0"
                style={{ width: `${CARD_WIDTH}px` }}
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
                    <div className="relative rounded-[9999px] shrink-0 size-[48px] overflow-hidden bg-[#dbe6e2]">
                      <img
                        alt={t.name}
                        className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
                        src={t.avatar}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
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
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex gap-[8px] items-center justify-center w-full">
          {testimonials.map((_, di) => (
            <button
              key={di}
              onClick={() => goTo(di)}
              aria-label={`Go to review ${di + 1}`}
              className={`rounded-[9999px] shrink-0 transition-all duration-300 cursor-pointer border-0 outline-none ${
                di === index
                  ? "bg-[#18797d] h-[8px] w-[32px]"
                  : "bg-[#cbd5e1] size-[8px]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
