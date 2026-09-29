import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, type BlogPost } from "../data/blogs";

interface BlogDetailsProps { slug: string; }
const asset = (name: string) => `/assets/${name}`;

const HomeIcon = () => (<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>);
const ChevronRightIcon = () => (<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>);
const ShareIcon = () => (<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" /></svg>);
const WhatsAppIcon = ({ className = "size-3.5" }: { className?: string }) => (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>);
const ArrowLeftIcon = () => (<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>);
const ArrowRightIcon = () => (<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>);
const MapPinIcon = () => (<svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>);
const LightbulbIcon = () => (<svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>);
const DocumentIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>);
const CodeBracketIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>);
const BeakerIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15a2.25 2.25 0 0 1 .45 1.317c0 1.243-1.007 2.25-2.25 2.25H5.85A2.25 2.25 0 0 1 3.6 16.317c0-.485.155-.935.45-1.317M19.8 15H4.2" /></svg>);
const AcademicCapIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>);
const BriefcaseIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006-3.75 1.5-3.75-1.5m-6.75 0-3.75 1.5-3.75-1.5m0 0v-3.75m0 3.75 3.75-1.5 3.75 1.5m-7.5 0a8.25 8.25 0 0 0 4.5 7.35m0-7.35 3.75 1.5 3.75-1.5M12 5.25v-.75A2.25 2.25 0 0 0 9.75 2.25H9a2.25 2.25 0 0 0-2.25 2.25v.75" /></svg>);
const CheckBadgeIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>);
const BookOpenIcon = () => (<svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>);
const CpuIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /></svg>);
const ChatBubbleIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>);
const MapIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>);
const ShieldCheckIcon = () => (<svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>);

function ArtifactIcon({ title }: { title: string }) {
  const t = title.toLowerCase();
  if (t.includes("code") || t.includes("firmware") || t.includes("pipeline") || t.includes("notebook")) return <CodeBracketIcon />;
  if (t.includes("report") || t.includes("document") || t.includes("thesis") || t.includes("template")) return <DocumentIcon />;
  if (t.includes("dataset") || t.includes("data") || t.includes("train")) return <BeakerIcon />;
  if (t.includes("viva") || t.includes("defense") || t.includes("presentation") || t.includes("deck")) return <AcademicCapIcon />;
  if (t.includes("schematic") || t.includes("pcb") || t.includes("circuit")) return <CpuIcon />;
  if (t.includes("mentor") || t.includes("consult") || t.includes("session")) return <ChatBubbleIcon />;
  if (t.includes("matrix") || t.includes("domain") || t.includes("selection")) return <MapIcon />;
  if (t.includes("plagiarism") || t.includes("turnitin") || t.includes("originality")) return <ShieldCheckIcon />;
  return <BriefcaseIcon />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};
const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogDetails({ slug }: BlogDetailsProps) {
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [slug]);
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const recommendedPosts: BlogPost[] = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8faf9] font-['Plus_Jakarta_Sans:Regular'] text-[#0f1e36]">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex items-center gap-1.5 text-[12px] font-semibold text-[#64748b] mb-6">
            <a href="/" className="hover:text-[#18797d] transition flex items-center gap-1"><HomeIcon />Home</a>
            <ChevronRightIcon />
            <a href="/blog" className="hover:text-[#18797d] transition">Build Stories</a>
            <ChevronRightIcon />
            <span className="text-[#0f172a] truncate max-w-[300px] sm:max-w-[500px]">{post.title}</span>
          </motion.div>

          {/* Badges */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="rounded-full bg-[#d9eaeb] px-3.5 py-1 text-[11px] font-bold tracking-wider text-[#005f62] uppercase">{post.category}</span>
            {post.subCategory && <span className="rounded-full bg-[#f1f5f9] px-3.5 py-1 text-[11px] font-bold text-[#475569]">{post.subCategory}</span>}
            <span className="text-xs font-semibold text-[#94a3b8]">• {post.time}</span>
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="font-['Plus_Jakarta_Sans:Bold'] text-[clamp(2.1rem,3.8vw,3.3rem)] font-bold leading-[1.18] text-[#0f172a] tracking-[-0.03em] max-w-[1080px] mb-5">
            {post.title}
          </motion.h1>

          {/* Summary */}
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="text-[16px] sm:text-[17px] leading-[26px] text-[#4d6266] max-w-[960px] mb-8">
            {post.summary}
          </motion.p>

          {/* Author bar */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-[#e2e8f0] py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#18797d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                {post.author.replace(/^(By\s+|Engr\.\s+|Dr\.\s+)/i, "").slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-['Plus_Jakarta_Sans:Bold'] font-bold text-[14px] text-[#0f172a]">{post.author}</div>
                <div className="text-[12px] text-[#64748b]">{post.authorRole} • Published on {post.day} {post.month}, 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { if (navigator.share) { navigator.share({ title: post.title, url: window.location.href }); } else { navigator.clipboard.writeText(window.location.href); alert("Link copied!"); } }} className="px-3.5 py-1.5 rounded-full border border-[#cbd5e1] text-xs font-semibold text-[#475569] hover:bg-[#f1f5f9] transition cursor-pointer flex items-center gap-1.5">
                <ShareIcon />Share
              </button>
              <a href={`https://wa.me/8801788392063?text=${encodeURIComponent(`Hi, I'm inquiring about project support after reading your blog: "${post.title}"`)}`} target="_blank" rel="noopener noreferrer" className="bg-[#18797d] hover:bg-[#1a8a8f] text-white px-4 py-1.5 rounded-full text-xs font-bold transition shadow-sm flex items-center gap-1.5">
                <WhatsAppIcon />Ask Mentor
              </a>
            </div>
          </motion.div>

          {/* Metrics */}
          {post.metrics && post.metrics.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {post.metrics.map((m, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.08 }} whileHover={{ y: -2 }} className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748b]">{m.label}</div>
                  <div className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold mt-1" style={{ color: m.color || "#0f172a" }}>{m.value}</div>
                  {m.subtext && <div className="text-[11px] text-[#64748b] font-medium mt-0.5">{m.subtext}</div>}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Image */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#081719]">
                  <motion.img initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} src={asset(post.image)} alt={post.title} className="size-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = asset("viva.jpg"); }} />
                  <div className="absolute bottom-3 left-3 bg-[#081719]/80 backdrop-blur text-white text-[11px] px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5">
                    <MapPinIcon />{post.category} • University Project Builder Lab
                  </div>
                </div>
                <div className="px-5 py-3 text-xs text-[#64748b] bg-[#f8faf9] border-t border-[#e2e8f0]">{post.figureCaption}</div>
              </motion.div>

              {/* Section 01 */}
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-[#18797d]"><DocumentIcon /><span className="text-xs font-bold uppercase tracking-widest">01. BACKGROUND</span></div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">Executive Summary &amp; Problem Statement</h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">{post.content.introduction}</p>
                {post.content.sections[0] && (
                  <div className="space-y-4 pt-2">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold text-[#0f172a]">{post.content.sections[0].heading}</h3>
                    {post.content.sections[0].body.map((p, i) => <p key={i} className="text-[15px] leading-[26px] text-[#475569]">{p}</p>)}
                    {post.content.sections[0].tips && post.content.sections[0].tips.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                        {post.content.sections[0].tips.map((tip, i) => (
                          <div key={i} className="bg-[#f8faf9] p-4 rounded-xl border border-[#e2e8f0]">
                            <span className="size-2 rounded-full bg-[#18797d] block mb-2" />
                            <p className="text-[12px] text-[#334155] leading-relaxed font-medium">{tip}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.section>

              {/* Section 02 */}
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-[#18797d]"><CodeBracketIcon /><span className="text-xs font-bold uppercase tracking-widest">02. SYSTEM DESIGN &amp; ARCHITECTURE</span></div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">System Architecture &amp; Implementation Steps</h2>
                {post.content.sections[1] && (
                  <div className="space-y-4">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold text-[#0f172a]">{post.content.sections[1].heading}</h3>
                    {post.content.sections[1].body.map((p, i) => <p key={i} className="text-[15px] leading-[26px] text-[#475569]">{p}</p>)}
                  </div>
                )}
                {post.pipeline && post.pipeline.length > 0 && (
                  <div className="rounded-xl bg-[#081719] p-6 text-white overflow-x-auto shadow-inner">
                    <div className="text-xs font-bold text-[#2dd4bf] uppercase tracking-wider mb-4">Execution &amp; Defense Flow</div>
                    <div className="flex items-center gap-3 min-w-[520px]">
                      {post.pipeline.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3 flex-1">
                          <div className={`flex-1 p-3.5 rounded-lg text-center border ${step.highlight ? "bg-[#143d42] border-[#2dd4bf]" : "bg-[#102b30] border-[#1e5860]"}`}>
                            <div className="text-[10px] text-slate-400">STEP {step.step}</div>
                            <div className={`text-xs font-bold mt-1 ${step.highlight ? "text-[#2dd4bf]" : "text-white"}`}>{step.title}</div>
                          </div>
                          {sIdx < post.pipeline!.length - 1 && <span className="text-slate-500"><ArrowRightIcon /></span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {post.codeSnippet && (
                  <div className="rounded-xl bg-[#071317] border border-[#1e293b] overflow-hidden text-slate-300 font-mono text-xs">
                    <div className="bg-[#0b1c20] px-4 py-2 border-b border-[#1e293b] flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">{post.codeSnippet.filename}</span>
                      <span className="text-[10px] text-[#2dd4bf] uppercase">{post.codeSnippet.language}</span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-[11.5px] leading-relaxed">{post.codeSnippet.code}</pre>
                  </div>
                )}
              </motion.section>

              {/* Section 03 */}
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-[#18797d]"><BeakerIcon /><span className="text-xs font-bold uppercase tracking-widest">03. EVALUATION &amp; METHODOLOGY</span></div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">Experimental Evaluation &amp; Academic Standards</h2>
                {post.content.sections[2] ? (
                  <div className="space-y-4">
                    <h3 className="font-['Plus_Jakarta_Sans:Bold'] text-lg font-bold text-[#0f172a]">{post.content.sections[2].heading}</h3>
                    {post.content.sections[2].body.map((p, i) => <p key={i} className="text-[15px] leading-[26px] text-[#475569]">{p}</p>)}
                    {post.content.sections[2].tips && (
                      <div className="bg-[#f8faf9] rounded-xl p-5 border border-[#e2e8f0] space-y-2 mt-4">
                        <div className="font-bold text-xs uppercase tracking-wider text-[#18797d] mb-2 flex items-center gap-2"><LightbulbIcon />Key Recommendations:</div>
                        <ul className="space-y-2">
                          {post.content.sections[2].tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#334155]"><span className="text-[#18797d] font-bold mt-0.5">•</span><span>{tip}</span></li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (<p className="text-[15px] leading-[26px] text-[#475569]">{post.content.conclusion}</p>)}
              </motion.section>

              {/* Section 04: Viva */}
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-[#18797d]"><AcademicCapIcon /><span className="text-xs font-bold uppercase tracking-widest">04. VIVA DEFENSE PREP</span></div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">Top Viva &amp; Panel Inquiries For This Topic</h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">Here are the exact questions supervisors and examination committees ask during defense, with sample high-scoring answers:</p>
                <div className="space-y-4 pt-2">
                  {post.vivaQuestions.map((v, vIdx) => (
                    <motion.div key={vIdx} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: vIdx * 0.1 }} className="bg-[#f8faf9] p-5 rounded-xl border border-[#e2e8f0] space-y-2">
                      <div className="font-bold text-sm text-[#0f172a] flex items-start gap-2"><span className="text-[#18797d] font-bold shrink-0">Q{vIdx + 1}:</span><span>{v.question}</span></div>
                      <p className="text-xs text-[#475569] leading-relaxed pl-6"><b className="text-[#0f172a]">Answer: </b>{v.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Section 05: Artifacts */}
              <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-[#18797d]"><BriefcaseIcon /><span className="text-xs font-bold uppercase tracking-widest">05. ARTIFACTS</span></div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">Project Artifacts &amp; Student Deliverables</h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">Standard deliverables included in our university project guidance packages:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {post.artifacts.map((a, aIdx) => (
                    <motion.div key={aIdx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: aIdx * 0.1 }} className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8faf9] flex items-start gap-3">
                      <span className="text-[#18797d] mt-0.5 shrink-0"><ArtifactIcon title={a.title} /></span>
                      <div><b className="text-xs font-bold text-[#0f172a] block">{a.title}</b><p className="text-[11px] text-[#64748b] mt-0.5">{a.description}</p></div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Prev/Next */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e2e8f0]">
                {prevPost ? (
                  <a href={`/blog/${prevPost.slug}`} className="flex-1 w-full p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#18797d] transition text-left group">
                    <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider flex items-center gap-1"><ArrowLeftIcon />Previous Article</div>
                    <div className="font-bold text-xs text-[#0f172a] mt-1 line-clamp-1 group-hover:text-[#18797d] transition">{prevPost.title}</div>
                  </a>
                ) : <div className="flex-1" />}
                {nextPost ? (
                  <a href={`/blog/${nextPost.slug}`} className="flex-1 w-full p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#18797d] transition text-right group">
                    <div className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider flex items-center gap-1 justify-end">Next Article<ArrowRightIcon /></div>
                    <div className="font-bold text-xs text-[#0f172a] mt-1 line-clamp-1 group-hover:text-[#18797d] transition">{nextPost.title}</div>
                  </a>
                ) : <div className="flex-1" />}
              </div>
            </div>

            {/* Sidebar */}
            <motion.aside variants={slideLeft} initial="hidden" animate="visible" className="lg:col-span-4 space-y-6 sticky top-28">
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2"><BookOpenIcon />Article Contents</div>
                <nav className="space-y-2.5 text-xs text-[#64748b]">
                  {["01. Executive Summary & Context","02. System Architecture & Flow","03. Evaluation & Standards","04. Top Viva Questions Defended","05. Artifacts & Deliverables"].map((item) => (
                    <div key={item} className="hover:text-[#18797d] transition cursor-pointer font-medium flex items-center gap-1.5">
                      <span className="size-1 rounded-full bg-[#18797d]/40 shrink-0" />{item}
                    </div>
                  ))}
                </nav>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2"><CheckBadgeIcon />Capstone Specifications</div>
                <div className="space-y-3 text-xs">
                  {post.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between border-b border-[#f1f5f9] pb-2 last:border-0 last:pb-0">
                      <span className="text-[#64748b]">{spec.label}</span>
                      <b className={`text-right ${spec.highlight ? "text-[#005f62] font-bold" : "text-[#0f172a]"}`}>{spec.value}</b>
                    </div>
                  ))}
                </div>
              </div>
              <motion.div whileHover={{ y: -2 }} className="bg-[#081719] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 size-36 rounded-full bg-[#18797d]/20 blur-2xl pointer-events-none" />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2dd4bf]">NEED ACADEMIC PROJECT HELP?</span>
                  <h3 className="mt-2 text-xl font-bold leading-snug">Have an Engineering Project or Thesis Due?</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">We assist students with topic feasibility, complete code implementation, formal report writing &amp; viva preparation.</p>
                  <a href={`https://wa.me/8801788392063?text=${encodeURIComponent(`Hi! I'm reading the guide "${post.title}" and would like to discuss my project.`)}`} target="_blank" rel="noopener noreferrer" className="mt-5 w-full bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#081719] font-bold text-xs py-3 px-4 rounded-xl transition text-center flex items-center justify-center gap-2 shadow-lg">
                    <WhatsAppIcon className="size-4" />Talk with Senior Mentor
                  </a>
                </div>
              </motion.div>
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4 flex items-center gap-2"><BookOpenIcon />More Build Stories</div>
                <div className="space-y-4">
                  {recommendedPosts.map((r) => (
                    <a key={r.slug} href={`/blog/${r.slug}`} className="group block border-b border-[#f1f5f9] pb-3 last:border-0 last:pb-0">
                      <div className="text-[10px] font-bold uppercase text-[#18797d] mb-1">{r.category}</div>
                      <div className="text-xs font-bold text-[#0f172a] group-hover:text-[#18797d] transition line-clamp-2">{r.title}</div>
                      <div className="text-[11px] text-[#94a3b8] mt-1">{r.time}</div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-[#081719] rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 size-64 rounded-full bg-[#18797d]/15 blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2dd4bf]">PUBLISH YOUR CAPSTONE STORY</span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight">Have an Engineering Project or Thesis Worth Documenting?</h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">Join our university project showcase and get your build retrospective featured for thousands of students and recruiters across Bangladesh.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a href="https://wa.me/8801788392063" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#081719] font-bold text-xs px-6 py-3 rounded-full transition shadow-lg flex items-center gap-2">
                  <WhatsAppIcon />Submit Your Build Story
                </motion.a>
                <a href="/#solutions" className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-6 py-3 rounded-full transition">Explore Services</a>
              </div>
            </div>
            <div className="bg-[#122e33] border border-[#1e5860] p-6 rounded-2xl max-w-xs shrink-0 text-center relative z-10">
              <div className="size-12 rounded-full bg-[#2dd4bf] text-[#081719] flex items-center justify-center mx-auto mb-3"><CheckBadgeIcon /></div>
              <div className="font-bold text-sm text-white">98.4% Defense Approval</div>
              <p className="text-xs text-slate-400 mt-1">Across BUET, DU, IUT, BRACU, NSU &amp; leading universities.</p>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
