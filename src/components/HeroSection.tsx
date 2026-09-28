import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const assetPathPrefix = "/assets";
const imgArrow = `${assetPathPrefix}/2041d.svg`;

const slides = [
  {
    image: "Hero1.jpg",
    titleLine1: "Your Software Projects,",
    titleLine2: "From Idea to Execution.",
    description:
      "Stuck on a complex algorithm, AI model, or full-stack web app? We help you build clean, reliable software that runs flawlessly and truly stands out.",
    alt: "Computer science student coding on screen",
  },
  {
    image: "Hero2.jpg",
    titleLine1: "Turn Hardware Components ",
    titleLine2: "into Working Projects.",
    description:
      "From circuit design and breadboard wiring to microcontrollers and IoT sensors, we help you build physical prototypes that perform the first time you power on.",
    alt: "Electronics breadboard and hardware prototyping",
  },
  {
    image: "Hero3.jpg",
    titleLine1: "Attend Your Final Defense",
    titleLine2: "With Total Confidence.",
    description:
      "A great project deserves a great story. We help you create polished thesis reports, IEEE documentation, and captivating slides so you can present with clarity.",
    alt: "Student presenting project at university defense",
  },
  {
    image: "Hero4.jpg",
    titleLine1: "Your Final Year Project,",
    titleLine2: "Finished Without The Stress.",
    description:
      "Deadlines shouldn't keep you up at night. Get friendly 1-on-1 mentorship, clear explanations, and dependable support all the way to your graduation day.",
    alt: "Happy university student graduating with confidence",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  // Preload all hero images so transitions are instant
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = `${assetPathPrefix}/${slide.image}`;
    });
  }, []);

  // Reset the 6-second timer whenever the slide changes (auto or manual)
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [active]);

  const next = (direction = 1) => {
    setActive((value) => (value + direction + slides.length) % slides.length);
  };

  const currentSlide = slides[active];

  return (
    <section className="group relative flex min-h-[min(920px,100svh)] items-center overflow-hidden bg-[#071317]" data-node-id="1:5">
      {/* Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlide.image}
          initial={{ opacity: 0.3, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          src={`${assetPathPrefix}/${currentSlide.image}`}
          alt={currentSlide.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Gradient Overlays for optimal text contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,20,.96)_0%,rgba(6,16,20,.82)_40%,rgba(6,16,20,.12)_75%),linear-gradient(0deg,rgba(6,16,20,.94)_0%,transparent_45%)]" />

      {/* Main Content Area */}
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col justify-between px-6 pb-10 pt-32 sm:px-12 sm:pb-16 min-h-[min(920px,100svh)]">
        <div className="max-w-[720px] py-16 sm:py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Dynamic Title */}
              <h1 className="font-['Plus_Jakarta_Sans:Bold'] text-[clamp(2.6rem,5.5vw,5.2rem)] font-bold leading-[1.06] tracking-[-.05em] text-white">
                {currentSlide.titleLine1}
                <br />
                <span className="font-['Plus_Jakarta_Sans:SemiBold'] font-semibold text-white/70">
                  {currentSlide.titleLine2}
                </span>
              </h1>

              {/* Dynamic Description */}
              <p className="mt-5 max-w-xl text-base sm:text-lg leading-7 text-white/75 font-['Plus_Jakarta_Sans:Regular']">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#18797d] py-2.5 pl-7 pr-2.5 text-[15px] font-bold text-white transition hover:bg-[#1a8a8f] hover:shadow-[0_8px_32px_rgba(24,121,125,0.45)] cursor-pointer"
          >
            Get Started
            <span className="grid size-9 place-items-center rounded-full bg-[#082b2f]">
              <img alt="" className="block size-[16px]" src={imgArrow} />
            </span>
          </motion.button>
        </div>

        {/* Bottom Bar: Slide Indicators and Scroll Down button */}
        <div className="flex items-end justify-between gap-4">
          {/* Slide indicators for all 4 slides */}
          <div className="flex gap-2.5 items-center">
            {slides.map((_, i) => (
              <button
                aria-label={`Show slide ${i + 1}`}
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active ? "w-10 bg-[#35c3c8]" : "w-3 bg-white/35 hover:bg-white/60"
                }`}
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
              aria-label="Scroll to solutions"
              onClick={() => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })}
              className="grid size-[72px] place-items-center rounded-full border border-white/30 bg-black/35 text-2xl text-white backdrop-blur-sm transition hover:bg-black/55 hover:border-white/50 cursor-pointer"
            >
              ↓
            </button>
          </div>
        </div>
      </div>

      {/* Carousel navigation arrows - Centered SVG icons inside blurred circle, visible only on hover */}
      <button
        aria-label="Previous slide"
        onClick={() => next(-1)}
        className="absolute left-4 sm:left-8 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-black/75 hover:scale-110 cursor-pointer shadow-lg"
      >
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        aria-label="Next slide"
        onClick={() => next()}
        className="absolute right-4 sm:right-8 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-black/75 hover:scale-110 cursor-pointer shadow-lg"
      >
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
