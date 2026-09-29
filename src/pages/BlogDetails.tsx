import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, type BlogPost } from "../data/blogs";

interface BlogDetailsProps {
  slug: string;
}

const asset = (name: string) => `/assets/${name}`;

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  // Find previous and next articles
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Other recommendations
  const recommendedPosts: BlogPost[] = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8faf9] font-['Plus_Jakarta_Sans:Regular'] text-[#0f1e36]">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb row */}
          <div className="flex items-center gap-2 text-[12px] font-semibold text-[#64748b] mb-6">
            <a href="/" className="hover:text-[#18797d] transition">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-[#18797d] transition">Build Stories</a>
            <span>/</span>
            <span className="text-[#0f172a] truncate max-w-[300px] sm:max-w-[500px]">
              {post.title}
            </span>
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="rounded-full bg-[#d9eaeb] px-3.5 py-1 text-[11px] font-bold tracking-wider text-[#005f62] uppercase">
              {post.category}
            </span>
            {post.subCategory && (
              <span className="rounded-full bg-[#f1f5f9] px-3.5 py-1 text-[11px] font-bold text-[#475569]">
                {post.subCategory}
              </span>
            )}
            <span className="text-xs font-semibold text-[#94a3b8]">
              • {post.time}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-['Plus_Jakarta_Sans:Bold'] text-[clamp(2.1rem,3.8vw,3.3rem)] font-bold leading-[1.18] text-[#0f172a] tracking-[-0.03em] max-w-[1080px] mb-5">
            {post.title}
          </h1>

          {/* Subtitle / Intro summary */}
          <p className="text-[16px] sm:text-[17px] leading-[26px] text-[#4d6266] max-w-[960px] mb-8">
            {post.summary}
          </p>

          {/* Author & Meta bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-[#e2e8f0] py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#18797d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                {post.author.replace(/^(By\s+|Engr\.\s+|Dr\.\s+)/i, "").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] text-[#0f172a]">
                  {post.author}
                </div>
                <div className="text-[12px] text-[#64748b]">
                  {post.authorRole} • Published on {post.day} {post.month}, 2026
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: post.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="px-3.5 py-1.5 rounded-full border border-[#cbd5e1] text-xs font-semibold text-[#475569] hover:bg-[#f1f5f9] transition cursor-pointer"
              >
                Share
              </button>
              <a
                href={`https://wa.me/8801788392063?text=${encodeURIComponent(`Hi, I'm inquiring about project support after reading your blog: "${post.title}"`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#18797d] hover:bg-[#1a8a8f] text-white px-4 py-1.5 rounded-full text-xs font-bold transition shadow-sm"
              >
                Ask Mentor →
              </a>
            </div>
          </div>

          {/* Dynamic Benchmark Metrics Cards Row */}
          {post.metrics && post.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {post.metrics.map((m, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748b]">
                    {m.label}
                  </div>
                  <div
                    className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold mt-1"
                    style={{ color: m.color || "#0f172a" }}
                  >
                    {m.value}
                  </div>
                  {m.subtext && (
                    <div className="text-[11px] text-[#64748b] font-medium mt-0.5">
                      {m.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Main Grid: Left Article Content (8 cols) + Right Sidebar (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Lab Image with Dynamic Caption */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#081719]">
                  <img
                    src={asset(post.image)}
                    alt={post.title}
                    className="size-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = asset("viva.jpg");
                    }}
                  />
                  <div className="absolute bottom-3 left-3 bg-[#081719]/80 backdrop-blur text-white text-[11px] px-3 py-1.5 rounded-lg font-medium">
                    📍 {post.category} • University Project Builder Lab
                  </div>
                </div>
                <div className="px-5 py-3 text-xs text-[#64748b] bg-[#f8faf9] border-t border-[#e2e8f0]">
                  {post.figureCaption}
                </div>
              </div>

              {/* Section 01: Executive Summary & Capstone Context */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">01. BACKGROUND</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Executive Summary & Problem Statement
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  {post.content.introduction}
                </p>

                {/* Content sections intro */}
                {post.content.sections[0] && (
                  <div className="space-y-4 pt-2">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold text-[#0f172a]">
                      {post.content.sections[0].heading}
                    </h3>
                    {post.content.sections[0].body.map((p, pIdx) => (
                      <p key={pIdx} className="text-[15px] leading-[26px] text-[#475569]">
                        {p}
                      </p>
                    ))}
                    {post.content.sections[0].tips && post.content.sections[0].tips.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                        {post.content.sections[0].tips.map((tip, tIdx) => (
                          <div key={tIdx} className="bg-[#f8faf9] p-4 rounded-xl border border-[#e2e8f0]">
                            <span className="size-2 rounded-full bg-[#18797d] block mb-2" />
                            <p className="text-[12px] text-[#334155] leading-relaxed font-medium">{tip}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </section>

              {/* Section 02: System Architecture / Pipeline */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">02. SYSTEM DESIGN & ARCHITECTURE</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  System Architecture & Implementation Steps
                </h2>
                
                {post.content.sections[1] && (
                  <div className="space-y-4">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold text-[#0f172a]">
                      {post.content.sections[1].heading}
                    </h3>
                    {post.content.sections[1].body.map((p, pIdx) => (
                      <p key={pIdx} className="text-[15px] leading-[26px] text-[#475569]">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {/* Dynamic Visual Pipeline if available */}
                {post.pipeline && post.pipeline.length > 0 && (
                  <div className="rounded-xl bg-[#081719] p-6 text-white overflow-x-auto shadow-inner">
                    <div className="text-xs font-bold text-[#2dd4bf] uppercase tracking-wider mb-4">
                      Execution & Defense Flow
                    </div>
                    <div className="flex items-center gap-3 min-w-[520px]">
                      {post.pipeline.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3 flex-1">
                          <div className={`flex-1 p-3.5 rounded-lg text-center border ${step.highlight ? "bg-[#143d42] border-[#2dd4bf]" : "bg-[#102b30] border-[#1e5860]"}`}>
                            <div className="text-[10px] text-slate-400">STEP {step.step}</div>
                            <div className={`text-xs font-bold mt-1 ${step.highlight ? "text-[#2dd4bf]" : "text-white"}`}>
                              {step.title}
                            </div>
                          </div>
                          {sIdx < post.pipeline!.length - 1 && (
                            <span className="text-slate-500 font-bold">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dynamic Code Snippet if present */}
                {post.codeSnippet && (
                  <div className="rounded-xl bg-[#071317] border border-[#1e293b] overflow-hidden text-slate-300 font-mono text-xs">
                    <div className="bg-[#0b1c20] px-4 py-2 border-b border-[#1e293b] flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">{post.codeSnippet.filename}</span>
                      <span className="text-[10px] text-[#2dd4bf] uppercase">{post.codeSnippet.language}</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-[11.5px] leading-relaxed">
                      {post.codeSnippet.code}
                    </pre>
                  </div>
                )}
              </section>

              {/* Section 03: Performance Benchmarks & Results */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">03. EVALUATION & METHODOLOGY</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Experimental Evaluation & Academic Standards
                </h2>
                
                {post.content.sections[2] ? (
                  <div className="space-y-4">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold text-[#0f172a]">
                      {post.content.sections[2].heading}
                    </h3>
                    {post.content.sections[2].body.map((p, pIdx) => (
                      <p key={pIdx} className="text-[15px] leading-[26px] text-[#475569]">
                        {p}
                      </p>
                    ))}
                    {post.content.sections[2].tips && (
                      <div className="bg-[#f8faf9] rounded-xl p-5 border border-[#e2e8f0] space-y-2 mt-4">
                        <div className="font-bold text-xs uppercase tracking-wider text-[#18797d] mb-2">
                          💡 Key Recommendations:
                        </div>
                        <ul className="space-y-2">
                          {post.content.sections[2].tips.map((tip, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-sm text-[#334155]">
                              <span className="text-[#18797d] font-bold">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-[15px] leading-[26px] text-[#475569]">
                    {post.content.conclusion}
                  </p>
                )}
              </section>

              {/* Section 04: Top Viva Questions Defended (Dynamic per blog) */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">04. VIVA DEFENSE PREP</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Top Viva & Panel Inquiries For This Topic
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  Here are the exact questions supervisors and examination committees ask during defense, with sample high-scoring answers:
                </p>

                <div className="space-y-4 pt-2">
                  {post.vivaQuestions.map((v, vIdx) => (
                    <div key={vIdx} className="bg-[#f8faf9] p-5 rounded-xl border border-[#e2e8f0] space-y-2">
                      <div className="font-bold text-sm text-[#0f172a] flex items-start gap-2">
                        <span className="text-[#18797d]">Q{vIdx + 1}:</span>
                        <span>{v.question}</span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed pl-6">
                        <b className="text-[#0f172a]">Answer: </b>
                        {v.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 05: Project Artifacts & Deliverables (Dynamic per blog) */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">05. ARTIFACTS</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Project Artifacts & Student Deliverables
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  Standard deliverables included in our university project guidance packages:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {post.artifacts.map((a, aIdx) => (
                    <div key={aIdx} className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8faf9] flex items-start gap-3">
                      <span className="text-2xl">{a.icon}</span>
                      <div>
                        <b className="text-xs font-bold text-[#0f172a] block">{a.title}</b>
                        <p className="text-[11px] text-[#64748b] mt-0.5">{a.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Previous / Next Article Navigation */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e2e8f0]">
                {prevPost ? (
                  <a
                    href={`/blog/${prevPost.slug}`}
                    className="flex-1 w-full p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#18797d] transition text-left"
                  >
                    <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider">← Previous Article</div>
                    <div className="font-bold text-xs text-[#0f172a] mt-1 line-clamp-1">{prevPost.title}</div>
                  </a>
                ) : <div className="flex-1" />}

                {nextPost ? (
                  <a
                    href={`/blog/${nextPost.slug}`}
                    className="flex-1 w-full p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#18797d] transition text-right"
                  >
                    <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider">Next Article →</div>
                    <div className="font-bold text-xs text-[#0f172a] mt-1 line-clamp-1">{nextPost.title}</div>
                  </a>
                ) : <div className="flex-1" />}
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <aside className="lg:col-span-4 space-y-6 sticky top-28">
              {/* Table of Contents card */}
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">
                  Article Contents
                </div>
                <nav className="space-y-2.5 text-xs text-[#64748b]">
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">01. Executive Summary & Context</div>
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">02. System Architecture & Flow</div>
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">03. Evaluation & Standards</div>
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">04. Top Viva Questions Defended</div>
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">05. Artifacts & Deliverables</div>
                </nav>
              </div>

              {/* Dynamic Capstone Specs Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">
                  Capstone Specifications
                </div>
                <div className="space-y-3 text-xs">
                  {post.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between border-b border-[#f1f5f9] pb-2 last:border-0 last:pb-0">
                      <span className="text-[#64748b]">{spec.label}</span>
                      <b className={`text-right ${spec.highlight ? "text-[#005f62] font-bold" : "text-[#0f172a]"}`}>
                        {spec.value}
                      </b>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentorship CTA Card */}
              <div className="bg-[#081719] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2dd4bf]">
                  NEED ACADEMIC PROJECT HELP?
                </span>
                <h3 className="mt-2 text-xl font-bold leading-snug">
                  Have an Engineering Project or Thesis Due?
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  We assist students with topic feasibility, complete code implementation, formal report writing & viva preparation.
                </p>
                <a
                  href={`https://wa.me/8801788392063?text=${encodeURIComponent(`Hi! I'm reading the guide "${post.title}" and would like to discuss my project.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#081719] font-bold text-xs py-3 px-4 rounded-xl transition text-center block shadow-lg"
                >
                  Talk with Senior Mentor →
                </a>
              </div>

              {/* More Build Stories */}
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">
                  More Build Stories
                </div>
                <div className="space-y-4">
                  {recommendedPosts.map((r) => (
                    <a
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group block border-b border-[#f1f5f9] pb-3 last:border-0 last:pb-0"
                    >
                      <div className="text-[10px] font-bold uppercase text-[#18797d] mb-1">
                        {r.category}
                      </div>
                      <div className="text-xs font-bold text-[#0f172a] group-hover:text-[#18797d] transition line-clamp-2">
                        {r.title}
                      </div>
                      <div className="text-[11px] text-[#94a3b8] mt-1">
                        {r.time}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Global CTA Strip at bottom */}
        <section className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-[#081719] rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2dd4bf]">
                PUBLISH YOUR CAPSTONE STORY
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight">
                Have an Engineering Project or Thesis Worth Documenting?
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Join our university project showcase and get your build retrospective featured for thousands of students and recruiters across Bangladesh.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/8801788392063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#081719] font-bold text-xs px-6 py-3 rounded-full transition shadow-lg"
                >
                  Submit Your Build Story →
                </a>
                <a
                  href="/#solutions"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-6 py-3 rounded-full transition"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="bg-[#122e33] border border-[#1e5860] p-6 rounded-2xl max-w-xs shrink-0 text-center">
              <div className="size-12 rounded-full bg-[#2dd4bf] text-[#081719] flex items-center justify-center font-bold text-xl mx-auto mb-3">
                ✓
              </div>
              <div className="font-bold text-sm text-white">98.4% Defense Approval</div>
              <p className="text-xs text-slate-400 mt-1">Across BUET, DU, IUT, BRACU, NSU & leading universities.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
