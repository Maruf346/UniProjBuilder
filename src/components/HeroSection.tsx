import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const assetPathPrefix = "/assets";
const imgArrow = `${assetPathPrefix}/2041d.svg`;

const slides = ["87b36.png", "fb137.png", "916be.png"];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const next = (direction = 1) => setActive((value) => (value + direction + slides.length) % slides.length);
  useEffect(() => {
    const timer = window.setInterval(() => next(), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="group relative flex min-h-[min(920px,100svh)] items-center overflow-hidden bg-[#071317]" data-node-id="1:5">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[active]}
          initial={{ opacity: 0.35, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          src={`/assets/${slides[active]}`}
          alt="Engineering workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,20,.96)_0%,rgba(6,16,20,.8)_38%,rgba(6,16,20,.08)_75%),linear-gradient(0deg,rgba(6,16,20,.92)_0%,transparent_45%)]" />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col justify-between px-6 pb-10 pt-32 sm:px-12 sm:pb-16 min-h-[min(920px,100svh)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-[672px] py-20"
        >
          <h1 className="font-['Plus_Jakarta_Sans:Bold'] text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-[-.06em] text-white">
            Leading Future<br />
            <span className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-white/60">for Students.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-7 text-white/70">
            Committed to delivering innovative solutions that drive success. With a focus on quality.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#18797d] py-2.5 pl-7 pr-2.5 text-[15px] font-bold text-white transition hover:bg-[#1a8a8f] hover:shadow-[0_8px_32px_rgba(24,121,125,0.45)]"
          >
            Get Started
            <span className="grid size-9 place-items-center rounded-full bg-[#082b2f]">
              <img alt="" className="block size-[16px]" src={imgArrow} />
            </span>
          </motion.button>
        </motion.div>

        <div className="flex items-end justify-between">
          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                aria-label={`Show slide ${i + 1}`}
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-white" : "w-3 bg-white/40"}`}
              />
            ))}
          </div>

          {/* Scroll button with rotating text ring */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute size-[116px] pointer-events-none select-none"
            >
              <svg viewBox="0 0 116 116" className="w-full h-full">
                <defs>
                  <path
                    id="heroTextCircle"
                    d="M 58,58 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                  />
                </defs>
                <text fill="rgba(255,255,255,0.72)" fontSize="9.2" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="700" letterSpacing="4.1">
                  <textPath href="#heroTextCircle">SCROLL DOWN • EXPLORE MORE • </textPath>
                </text>
              </svg>
            </motion.div>
            <button
              aria-label="Scroll to footer"
              onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
              className="grid size-[72px] place-items-center rounded-full border border-white/30 bg-black/35 text-2xl text-white backdrop-blur-sm transition hover:bg-black/55 hover:border-white/50"
            >
              ↓
            </button>
          </div>
        </div>
      </div>

      {/* Carousel navigation arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => next(-1)}
        className="absolute left-6 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-2xl text-white opacity-0 backdrop-blur transition group-hover:opacity-100 focus:opacity-100"
      >‹</button>
      <button
        aria-label="Next slide"
        onClick={() => next()}
        className="absolute right-6 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/40 text-2xl text-white opacity-0 backdrop-blur transition group-hover:opacity-100 focus:opacity-100"
      >›</button>
    </section>
  );
}
