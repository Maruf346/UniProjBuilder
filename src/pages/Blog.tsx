import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogFilters, blogPosts, type BlogPost } from "../data/blogs";

const asset = (name: string) => `/assets/${name}`;

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
        selectedFilter === "All Stories" || post.category.toLowerCase().includes(selectedFilter.toLowerCase()) || selectedFilter.toLowerCase().includes(post.category.toLowerCase());

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
        {/* Header Section */}
        <section className="px-5 py-16 sm:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col items-start justify-between gap-8 border-b border-[#e4e8e7] pb-8 lg:flex-row lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#d9eaeb] px-3.5 py-1.5 text-[11px] font-bold tracking-[.05em] text-[#005f62]">
                  <i className="size-1.5 rounded-full bg-[#005f62]" />
                  STUDENT PROJECT GUIDES & BLOGS
                </div>
                <h1 className="mt-4 font-['Plus_Jakarta_Sans:Bold'] text-[clamp(2.5rem,4.5vw,3.5rem)] font-bold leading-[1.2] tracking-tight text-[#0f172a]">
                  Capstone Insights & <span className="font-normal text-[#4d6266]">Project Guides.</span>
                </h1>
                <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-[#4d6266]">
                  Simple, practical guides on project selection, defense preparation, documentation, and tech stacks for university students.
                </p>
              </div>
            </div>

            {/* Search Bar & Category Filters */}
            <div className="pt-8">
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-[#4d6266]">
                  🔍
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-[60px] w-full rounded-xl bg-white py-4 pl-14 pr-12 text-[15px] shadow-sm outline-none border border-[#e2e8f0] ring-[#18797d] focus:ring-2"
                  placeholder="Search project guides, viva questions, IEEE reports, AI, IoT, Web..."
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748b] bg-[#f1f5f9] px-2 py-1 rounded"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Filter Pills */}
              <div className="mt-5 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {blogFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`shrink-0 rounded-full px-5 py-2 text-xs font-bold transition cursor-pointer ${
                      selectedFilter === filter
                        ? "bg-[#083338] text-white shadow-sm"
                        : "bg-white text-[#4d6266] border border-[#e2e8f0] hover:bg-[#f1f5f9]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post Hero (shown when no search active) */}
        {!searchQuery && selectedFilter === "All Stories" && featuredPost && (
          <section className="px-5 pb-16 sm:px-12">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto grid max-w-[1280px] overflow-hidden rounded-2xl bg-white shadow-sm border border-[#e2e8f0] lg:grid-cols-2"
            >
              <div className="relative min-h-[340px] overflow-hidden bg-[#081719]">
                <img
                  src={asset(featuredPost.image)}
                  alt={featuredPost.title}
                  className="absolute inset-0 size-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = asset("916be.png");
                  }}
                />
                <div className="absolute left-5 top-5 rounded-xl bg-[#083338]/85 px-3 py-2 text-center text-white backdrop-blur">
                  <b className="block text-2xl leading-6">{featuredPost.day}</b>
                  <span className="text-[10px] font-bold tracking-wider text-[#d9eaeb]">{featuredPost.month}</span>
                </div>
                <span className="absolute right-5 top-5 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#005f62] shadow-sm">
                  ✦ Featured Guide
                </span>
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="flex gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-[#d9eaeb] px-3 py-1 text-[#005f62]">
                    {featuredPost.category}
                  </span>
                  <span className="rounded-full bg-[#edeeed] px-3 py-1 text-[#4d6266]">
                    {featuredPost.time}
                  </span>
                </div>

                <h2 className="mt-4 font-['Plus_Jakarta_Sans:Bold'] text-[clamp(1.6rem,2.5vw,2.2rem)] font-bold leading-[1.3] text-[#0f172a] tracking-tight">
                  <a href={`/blog/${featuredPost.slug}`} className="hover:text-[#18797d] transition">
                    {featuredPost.title}
                  </a>
                </h2>

                <p className="mt-3 text-[14.5px] leading-relaxed text-[#4d6266]">
                  {featuredPost.summary}
                </p>

                <div className="mt-6 flex items-center justify-between pt-6 border-t border-[#f1f5f9]">
                  <div>
                    <b className="text-sm text-[#0f172a] block">{featuredPost.author}</b>
                    <p className="text-xs text-[#64748b]">{featuredPost.authorRole}</p>
                  </div>
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="rounded-full bg-[#18797d] hover:bg-[#1a8a8f] px-6 py-2.5 text-xs font-bold text-white transition shadow-sm"
                  >
                    Read Guide →
                  </a>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* All Articles Grid */}
        <section className="bg-[#f2f4f3] px-5 py-16 sm:px-12 border-t border-[#e2e8f0]">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex items-end justify-between pb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                  {selectedFilter === "All Stories" ? "All Project Articles & Guides" : `${selectedFilter} Guides`}
                </h2>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-[#64748b]">
                  Showing {filteredPosts.length} article{filteredPosts.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#e2e8f0]">
                <p className="text-base text-[#64748b]">No articles match your search query.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedFilter("All Stories");
                  }}
                  className="mt-4 text-xs font-bold text-[#18797d] underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    key={post.slug}
                    className="flex flex-col justify-between rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden bg-[#081719]">
                      <img
                        src={asset(post.image)}
                        alt={post.title}
                        className="size-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = asset("916be.png");
                        }}
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

                        <p className="text-[13px] leading-relaxed text-[#64748b] line-clamp-3">
                          {post.summary}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                        <div className="flex gap-1.5 flex-wrap">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="text-[10px] bg-[#f1f5f9] text-[#475569] font-medium px-2 py-0.5 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={`/blog/${post.slug}`}
                          className="text-xs font-bold text-[#18797d] hover:text-[#083338] transition flex items-center gap-1 shrink-0"
                        >
                          Read Guide →
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Viva Readiness Callout matching home theme */}
        <section className="px-5 py-16 sm:px-12">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[.9fr_1.1fr] items-center">
            <div>
              <span className="rounded-full bg-[#fef3c7] px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-[#d97706]">
                ✦ ACADEMIC RIGOR & VIVA DEFENSE
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
                  <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm">
                    <span className="size-6 rounded-full bg-[#18797d] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm font-semibold text-[#0f172a]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#081719] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4bf]">
                  GET PERSONALIZED SUPPORT
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-snug">
                  Have a Project Deadline Approaching?
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-md">
                  Whether you are starting from scratch or need help fixing bugs before defense, talk directly with an experienced project mentor.
                </p>
                <div className="mt-6">
                  <a
                    href="https://wa.me/8801788392063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#081719] font-bold text-sm px-6 py-3 rounded-full transition shadow-lg"
                  >
                    <span>Chat on WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
