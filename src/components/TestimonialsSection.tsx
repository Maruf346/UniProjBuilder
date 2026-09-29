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

  // Quadruple items to ensure seamless infinite looping on all screen sizes
  const items = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  // We start at index = total (the second copy) so we can smoothly slide left/right
  const [currIndex, setCurrIndex] = useState(total);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll loop
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, AUTO_SCROLL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  // Handle seamless infinite reset on transition end
  const handleTransitionEnd = () => {
    // If we've scrolled past the 3rd set, seamlessly snap back to the 2nd set
    if (currIndex >= total * 2) {
      setIsTransitioning(false);
      setCurrIndex(currIndex - total);
    } else if (currIndex < total) {
      setIsTransitioning(false);
      setCurrIndex(currIndex + total);
    }
  };

  const activeDotIndex = ((currIndex % total) + total) % total;

  const goToDot = (dotIndex: number) => {
    setIsTransitioning(true);
    // Find the closest equivalent index in the middle range
    const base = Math.floor(currIndex / total) * total;
    setCurrIndex(base + dotIndex);
  };

  return (
    <div
      id="reviews"
      className="bg-[#f2f4f3] content-stretch flex flex-col items-start overflow-clip py-[80px] relative shrink-0 w-full scroll-mt-20"
      data-node-id="1:588"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
            <p className="leading-[1] mb-0">Our Clients Share Their</p>
            <p className="leading-[1]"> Success Stories.</p>
          </div>
        </motion.div>

        {/* Carousel viewport */}
        <div className="w-full overflow-hidden select-none">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${currIndex * STEP}px)`,
              transition: isTransitioning ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {items.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="bg-white border border-[rgba(226,232,240,0.8)] border-solid content-stretch flex flex-col items-start justify-between p-[33px] relative rounded-[16px] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] shrink-0 transition-shadow duration-300 hover:shadow-[0px_10px_25px_-5px_rgba(0,0,0,0.08)]"
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
                    <div className="relative rounded-[9999px] shrink-0 size-[48px] overflow-hidden bg-[#e2e8f0] flex items-center justify-center">
                      <img
                        alt={t.name}
                        className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
                        src={t.avatar}
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = "none";
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `<span class="font-bold text-[#18797d] text-sm">${t.name.slice(0, 2).toUpperCase()}</span>`;
                          }
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
              onClick={() => goToDot(di)}
              aria-label={`Go to review ${di + 1}`}
              className={`rounded-[9999px] shrink-0 transition-all duration-300 cursor-pointer border-0 outline-none p-0 ${
                di === activeDotIndex
                  ? "bg-[#18797d] h-[8px] w-[32px]"
                  : "bg-[#cbd5e1] size-[8px] hover:bg-[#94a3b8]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
