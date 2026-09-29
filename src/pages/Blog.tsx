import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogFilters, blogPosts, type BlogPost } from "../data/blogs";

const asset = (name: string) => `/assets/${name}`;

/* SVG Icons */
const SearchIcon = () => (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);
const CloseIcon = () => (
  <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);
const ArrowRightIcon = ({ className = "size-3.5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);
const StarIcon = () => (
  <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.040.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);
const GraduationIcon = () => (
  <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg className="size-5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

/* Motion Variants */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Blog() {
  const [selectedFilter, setSelectedFilter] = useState("All Stories");
  const [searchQuery, setSearchQuery] = useState(
    new URLSearchParams(window.location.search).get("q") ?? ""
  );

  const featuredPost = useMemo(() => {
    return blogPosts.find((p) => p.featured) || blogPosts[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesFilter =
        selectedFilter === "All Stories" ||
        post.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        selectedFilter.toLowerCase().includes(post.category.toLowerCase());
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query));
      return matchesFilter && matchesQuery;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#f8faf9] font-['Plus_Jakarta_Sans:Regular'] text-[#0f1e36]">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="px-5 py-16 sm:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col items-start justify-between gap-8 border-b border-[#e4e8e7] pb-8 lg:flex-row lg:items-end">
              <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full bg-[#d9eaeb] px-3.5 py-1.5 text-[11px] font-bold tracking-[.05em] text-[#005f62]"
                >
                  <GraduationIcon />
                  STUDENT PROJECT GUIDES &amp; BLOGS
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="mt-4 font-['Plus_Jakarta_Sans:Bold'] text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-tight text-[#0f172a]"
                >
                  Capstone Insights &amp; <span className="font-normal text-[#4d6266]">Project Guides.</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-[16px] leading-relaxed text-[#4d6266]">
                  Simple, practical guides on project selection, defense preparation, documentation, and tech stacks for university students.
                </motion.p>
              </motion.div>
            </div>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pt-8"
            >
              <div className="relative">
                <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#64748b]">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-[60px] w-full rounded-xl bg-white py-4 pl-14 pr-12 text-[15px] shadow-sm outline-none border border-[#e2e8f0] ring-[#18797d] focus:ring-2 transition"
                  placeholder="Search project guides, viva questions, IEEE reports, AI, IoT, Web..."
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748b] bg-[#f1f5f9] px-2 py-1 rounded flex items-center gap-1 hover:bg-[#e2e8f0] transition"
                  >
                    <CloseIcon />
                    Clear
                  </button>
                )}
              </div>
              <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {blogFilters.map((filter, i) => (
                  <motion.button
                    key={filter}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    onClick={() => setSelectedFilter(filter)}
                    className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold transition cursor-pointer ${
                      selectedFilter === filter
                        ? "bg-[#083338] text-white shadow-sm"
                        : "bg-white text-[#4d6266] border border-[#e2e8f0] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <AnimatePresence>
          {!searchQuery && selectedFilter === "All Stories" && featuredPost && (
            <section className="px-5 pb-16 sm:px-12">
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto grid max-w-[1280px] overflow-hidden rounded-2xl bg-white shadow-md border border-[#e2e8f0] lg:grid-cols-2"
              >
                <div className="relative min-h-[340px] overflow-hidden bg-[#081719]">
                  <motion.img
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                    src={asset(featuredPost.image)}
                    alt={featuredPost.title}
                    className="absolute inset-0 size-full object-cover"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = asset("916be.png"); }}
                  />
                  <div className="absolute left-5 top-5 rounded-xl bg-[#083338]/85 px-3 py-2 text-center text-white backdrop-blur">
                    <b className="block text-2xl leading-6">{featuredPost.day}</b>
                    <span className="text-[10px] font-bold tracking-wider text-[#d9eaeb]">{featuredPost.month}</span>
                  </div>
                  <span className="absolute right-5 top-5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#005f62] shadow-sm flex items-center gap-1.5">
                    <StarIcon />
                    Featured Guide
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div className="flex gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-[#d9eaeb] px-3 py-1 text-[#005f62]">{featuredPost.category}</span>
                    <span className="rounded-full bg-[#edeeed] px-3 py-1 text-[#4d6266]">{featuredPost.time}</span>
                  </div>
                  <h2 className="mt-4 font-['Plus_Jakarta_Sans:Bold'] text-[clamp(1.6rem,2.5vw,2.2rem)] font-bold leading-[1.3] text-[#0f172a] tracking-tight">
                    <a href={`/blog/${featuredPost.slug}`} className="hover:text-[#18797d] transition">{featuredPost.title}</a>
                  </h2>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-[#4d6266]">{featuredPost.summary}</p>
                  <div className="mt-6 flex items-center justify-between pt-6 border-t border-[#f1f5f9]">
                    <div>
                      <b className="text-sm text-[#0f172a] block">{featuredPost.author}</b>
                      <p className="text-xs text-[#64748b]">{featuredPost.authorRole}</p>
                    </div>
                    <motion.a
                      href={`/blog/${featuredPost.slug}`}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full bg-[#18797d] hover:bg-[#1a8a8f] px-6 py-2.5 text-xs font-bold text-white transition shadow-sm flex items-center gap-1.5"
                    >
                      Read Guide <ArrowRightIcon />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </section>
          )}
        </AnimatePresence>

        {/* All Articles */}
        <section className="bg-[#f2f4f3] px-5 py-16 sm:px-12 border-t border-[#e2e8f0]">
          <div className="mx-auto max-w-[1280px]">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-end justify-between pb-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                  {selectedFilter === "All Stories" ? "All Project Articles & Guides" : `${selectedFilter} Guides`}
                </h2>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#64748b]">
                  Showing {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
                </p>
              </div>
            </motion.div>
            <AnimatePresence mode="wait">
              {filteredPosts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl p-12 text-center border border-[#e2e8f0]"
                >
                  <div className="flex justify-center mb-4 text-[#64748b]"><SearchIcon /></div>
                  <p className="text-base text-[#64748b]">No articles match your search query.</p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedFilter("All Stories"); }}
                    className="mt-4 text-xs font-bold text-[#18797d] underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Viva Callout */}
        <section className="px-5 py-16 sm:px-12">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.9fr_1.1fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="rounded-full bg-[#fef3c7] px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-[#d97706] inline-flex items-center gap-1.5">
                <StarIcon />
                ACADEMIC RIGOR &amp; VIVA DEFENSE
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-[#0f172a] tracking-tight">
                How We Prepare Students For Flawless Project Submissions.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4d6266]">
                Writing code is only part of getting an A+. We help students understand system design trade-offs, write formal IEEE-grade reports, and practice defending their work under pressure.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Clean Architecture & Clear Code Explanations",
                  "Structured Academic Report with IEEE Referencing",
                  "Mock Viva Defense Sessions & Supervisor Question Prep",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.45 }}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm"
                  >
                    <span className="text-[#18797d] shrink-0"><CheckCircleIcon /></span>
                    <span className="text-sm font-semibold text-[#0f172a]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl bg-[#081719] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 size-48 rounded-full bg-[#18797d]/20 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4bf]">GET PERSONALIZED SUPPORT</span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-snug">Have a Project Deadline Approaching?</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-md">
                  Whether you are starting from scratch or need help fixing bugs before defense, talk directly with an experienced project mentor.
                </p>
                <div className="mt-6">
                  <motion.a
                    href="https://wa.me/8801788392063"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#081719] font-bold text-sm px-6 py-3 rounded-full transition shadow-lg"
                  >
                    <WhatsAppIcon />
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="flex flex-col justify-between rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden bg-[#081719]">
        <img
          src={`/assets/${post.image}`}
          alt={post.title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/assets/916be.png"; }}
        />
        <div className="absolute left-3 top-3 rounded-lg bg-[#083338]/90 px-2.5 py-1 text-center text-white backdrop-blur">
          <b className="block text-base leading-4">{post.day}</b>
          <small className="text-[9px] uppercase tracking-wider">{post.month}</small>
        </div>
        <span className="absolute right-3 top-3 rounded-md bg-white/90 text-[#0f2e32] px-2.5 py-1 text-[11px] font-bold">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#64748b] mb-2 font-medium">
            <span>{post.author}</span>
            <span>• {post.time}</span>
          </div>
          <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-[17px] font-bold leading-[1.38] text-[#0f172a] hover:text-[#18797d] transition line-clamp-2 mb-2">
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </h3>
          <p className="text-[13px] leading-relaxed text-[#64748b] line-clamp-3">{post.summary}</p>
        </div>
        <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
          <div className="flex gap-1.5 flex-wrap">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] bg-[#f1f5f9] text-[#475569] font-medium px-2 py-0.5 rounded">#{tag}</span>
            ))}
          </div>
          <a
            href={`/blog/${post.slug}`}
            className="text-xs font-bold text-[#18797d] hover:text-[#083338] transition flex items-center gap-1 shrink-0 group/link"
          >
            Read Guide
            <span className="transition-transform group-hover/link:translate-x-0.5">
              <ArrowRightIcon className="size-3" />
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
