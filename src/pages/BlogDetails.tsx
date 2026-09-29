import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, type BlogPost } from "../data/blogs";

interface BlogDetailsProps {
  slug: string;
}

const asset = (name: string) => `/assets/${name}`;

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8faf9] font-['Plus_Jakarta_Sans:Regular'] text-[#0f1e36]">
        <Navbar />
        <main className="pt-32 pb-24 px-5 sm:px-12 max-w-[800px] mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-[#e2e8f0]">
            <span className="text-4xl">🔍</span>
            <h1 className="text-2xl font-bold text-[#0f172a] mt-4">Article Not Found</h1>
            <p className="text-[#64748b] mt-2 text-sm">The blog post you are looking for might have been moved or updated.</p>
            <a
              href="/blog"
              className="mt-6 inline-block bg-[#18797d] hover:bg-[#1a8a8f] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition"
            >
              ← Back to All Blogs
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Related suggestions
  const relatedPosts: BlogPost[] = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 3);

  // If not enough related in same category, grab other posts
  const suggestions: BlogPost[] = relatedPosts.length > 0 
    ? relatedPosts 
    : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8faf9] font-['Plus_Jakarta_Sans:Regular'] text-[#0f1e36]">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Article Header & Hero */}
        <article className="px-5 sm:px-12">
          <div className="mx-auto max-w-[960px]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748b] mb-6">
              <a href="/" className="hover:text-[#18797d] transition">Home</a>
              <span>/</span>
              <a href="/blog" className="hover:text-[#18797d] transition">Blog</a>
              <span>/</span>
              <span className="text-[#0f172a] truncate max-w-[200px] sm:max-w-[350px]">{post.category}</span>
            </div>

            {/* Category badge & meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-[#d9eaeb] px-3.5 py-1 text-xs font-bold text-[#005f62]">
                {post.category}
              </span>
              <span className="text-xs font-medium text-[#64748b]">
                {post.day} {post.month}, 2026 • {post.time}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-['Plus_Jakarta_Sans:Bold'] text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.2] text-[#0f172a] tracking-tight mb-6">
              {post.title}
            </h1>

            {/* Author info card */}
            <div className="flex items-center justify-between border-y border-[#e2e8f0] py-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-full bg-[#18797d] text-white flex items-center justify-center font-bold text-sm">
                  {post.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-sm text-[#0f172a]">{post.author}</div>
                  <div className="text-xs text-[#64748b]">{post.authorRole}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`https://wa.me/8801788392063?text=${encodeURIComponent(`Hi, I was reading your blog: "${post.title}" and would like to ask a question.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#18797d] hover:bg-[#1a8a8f] text-white px-4 py-2 text-xs font-bold transition"
                >
                  <span>Ask a Question</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm mb-10 border border-[#e2e8f0] max-h-[460px] bg-[#081719]">
              <img
                src={asset(post.image)}
                alt={post.title}
                className="w-full h-full object-cover max-h-[460px]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = asset("916be.png");
                }}
              />
            </div>

            {/* Main Content Body */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-[#e2e8f0] text-[#334155] leading-relaxed">
              {/* Intro summary callout */}
              <div className="bg-[#eef6f6] border-l-4 border-[#18797d] p-5 rounded-r-xl mb-8">
                <p className="text-[16px] text-[#0f2e32] font-medium leading-relaxed italic">
                  "{post.content.introduction}"
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-10">
                {post.content.sections.map((section, idx) => (
                  <section key={idx} className="space-y-4">
                    <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] pt-2">
                      {section.heading}
                    </h2>
                    {section.body.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-[15.5px] leading-[26px] text-[#475569]">
                        {paragraph}
                      </p>
                    ))}

                    {/* Bullet tips if available */}
                    {section.tips && section.tips.length > 0 && (
                      <div className="bg-[#f8faf9] rounded-xl p-5 border border-[#e2e8f0] space-y-2 mt-4">
                        <div className="font-bold text-xs uppercase tracking-wider text-[#18797d] mb-2 flex items-center gap-1.5">
                          <span>💡</span> Key Takeaways & Viva Tips:
                        </div>
                        <ul className="space-y-2">
                          {section.tips.map((tip, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2 text-sm text-[#334155]">
                              <span className="text-[#18797d] font-bold text-base leading-4">•</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Conclusion */}
              <div className="mt-12 pt-8 border-t border-[#e2e8f0]">
                <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-xl font-bold text-[#0f172a] mb-3">
                  Summary & Next Steps
                </h3>
                <p className="text-[15.5px] leading-[26px] text-[#475569]">
                  {post.content.conclusion}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-[#e2e8f0] flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-[#64748b] mr-2">Tags:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-[#f1f5f9] text-[#475569] text-xs font-semibold px-3 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Quick Project CTA box inside article */}
              <div className="mt-10 rounded-xl bg-gradient-to-r from-[#0e2c30] to-[#18797d] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-lg mb-1">
                    Need Help With Your University Project?
                  </h4>
                  <p className="text-sm text-white/80 max-w-md">
                    We assist students across Bangladesh with topic selection, full code implementation, reports & defense prep.
                  </p>
                </div>
                <a
                  href="https://wa.me/8801788392063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-white text-[#0f2e32] hover:bg-slate-100 font-bold text-sm px-6 py-3 rounded-full shadow-lg transition"
                >
                  Chat with a Mentor
                </a>
              </div>
            </div>

            {/* Back to all blogs button */}
            <div className="mt-8 text-center">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#18797d] hover:text-[#0f2e32] transition"
              >
                <span>← Back to all articles</span>
              </a>
            </div>
          </div>
        </article>

        {/* Suggestions / Related Posts Section */}
        {suggestions.length > 0 && (
          <section className="mt-16 px-5 sm:px-12 bg-[#f2f4f3] py-16 border-t border-[#e2e8f0]">
            <div className="mx-auto max-w-[1280px]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
                    Recommended For You
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748b] mt-1">
                    Explore more guides and capstone walkthroughs
                  </p>
                </div>
                <a
                  href="/blog"
                  className="text-xs sm:text-sm font-bold text-[#18797d] hover:underline"
                >
                  View All →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {suggestions.map((item) => (
                  <motion.div
                    key={item.slug}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e8f0] flex flex-col justify-between"
                  >
                    <div className="relative h-44 overflow-hidden bg-[#081719]">
                      <img
                        src={asset(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = asset("916be.png");
                        }}
                      />
                      <span className="absolute top-3 left-3 bg-[#083338]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-semibold text-[#64748b] mb-1">
                          {item.day} {item.month} • {item.time}
                        </div>
                        <h3 className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[16px] leading-[22px] text-[#0f172a] line-clamp-2 mb-2">
                          <a href={`/blog/${item.slug}`} className="hover:text-[#18797d] transition">
                            {item.title}
                          </a>
                        </h3>
                        <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#f1f5f9] flex items-center justify-between">
                        <span className="text-xs text-[#64748b] truncate max-w-[140px]">{item.author}</span>
                        <a
                          href={`/blog/${item.slug}`}
                          className="text-xs font-bold text-[#18797d] hover:text-[#083338] transition flex items-center gap-1"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
