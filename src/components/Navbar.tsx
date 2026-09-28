import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const assetPathPrefix = "/assets";
const logo = `${assetPathPrefix}/logo.png`;
const imgArrow = `${assetPathPrefix}/2041d.svg`;
const navItems = ["Home", "Services", "Portfolio", "Blog", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => { if (searchOpen) input.current?.focus(); }, [searchOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (item: string) => {
    setOpen(false);
    const isHome = window.location.pathname === "/" || window.location.pathname === "";

    if (item === "Blog") {
      window.location.href = "/blog";
    } else if (item === "Home") {
      if (!isHome) {
        window.location.href = "/";
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (item === "Services") {
      if (!isHome) {
        window.location.href = "/#solutions";
      } else {
        document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item === "Portfolio") {
      if (!isHome) {
        window.location.href = "/#projects";
      } else {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item === "Contact") {
      if (!isHome) {
        window.location.href = "/#footer";
      } else {
        document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-[10px] pt-[10px]">
      <nav
        className={`relative mx-auto flex h-[72px] max-w-[1879px] items-center justify-between rounded-[14px] border px-[18px] sm:px-[20px] transition-all duration-500 overflow-hidden ${
          scrolled
            ? "border-white/[.12] bg-[#0b1c1f]/96 shadow-[0_20px_60px_rgba(0,0,0,.4),0_1px_0_rgba(255,255,255,.08)_inset] backdrop-blur-[28px]"
            : "border-white/[.08] bg-[#17272a]/60 shadow-[0_12px_40px_rgba(0,0,0,.18),0_1px_0_rgba(255,255,255,.07)_inset] backdrop-blur-xl"
        }`}
      >
        {/* Glossy sheen overlay */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] rounded-t-[14px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-gradient-to-b from-white/[.07] via-transparent to-transparent" />

        <button onClick={() => go("Home")} className="relative flex items-center gap-2 text-left">
          <img src={logo} alt="University Project Builder" className="h-10 w-auto object-contain" />
          <span className="hidden font-['Plus_Jakarta_Sans:ExtraBold'] text-[12px] uppercase leading-[14px] tracking-[1px] text-white/100 sm:block">
            University project<br />Builder
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className="group relative flex items-center text-[14px] font-semibold text-white/85 transition hover:text-white cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="relative flex items-center gap-3">
          {/* <div className="relative hidden md:block">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="grid size-[44px] place-items-center rounded-full bg-white/95 text-[#06333a] shadow-sm transition hover:scale-105 hover:bg-white"
            >
              <span className="text-xl leading-none">⌕</span>
            </button>
            <AnimatePresence>
              {searchOpen && (
                <motion.form
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (query.trim()) window.location.href = `/blog?q=${encodeURIComponent(query)}`;
                  }}
                  className="absolute right-0 top-[54px] flex w-[300px] rounded-xl bg-white p-2 shadow-2xl"
                >
                  <input
                    ref={input}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-[#0f1e36] outline-none"
                    placeholder="Search stories…"
                  />
                  <button className="rounded-lg bg-[#18797d] px-3 text-sm font-bold text-white">Go</button>
                </motion.form>
              )}
            </AnimatePresence>
          </div> */}
          <button
            onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden items-center gap-2 rounded-full bg-[#12999c] py-2 pl-5 pr-2 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#18a9ac] sm:flex"
          >
            < a href="https://wa.me/+8801788392063" target="_blank" rel="noopener noreferrer">
              Let's Talk
            </a>
            <span className="grid size-8 place-items-center rounded-full bg-[#06333a]">
              <img alt="" className="block size-[14px]" src={imgArrow} />
            </span>
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center text-2xl text-white lg:hidden"
          >
            ☰
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto max-w-[1879px] rounded-b-xl border border-t-0 border-white/[.08] bg-[#0f1e22]/96 p-5 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button key={item} onClick={() => go(item)} className="text-left text-sm font-semibold text-white/90 hover:text-white transition">
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
