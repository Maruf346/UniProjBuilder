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

  const [activeTab, setActiveTab] = useState<string>("overview");

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
                className="px-3.5 py-1.5 rounded-full border border-[#cbd5e1] text-xs font-semibold text-[#475569] hover:bg-[#f1f5f9] transition"
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

          {/* Benchmark Metrics Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748b]">AVERAGE LATENCY</div>
              <div className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] mt-1">18.2 ms</div>
              <div className="text-[11px] text-[#10b981] font-semibold mt-0.5">↓ 74% vs unoptimized</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748b]">MEMORY HEAP</div>
              <div className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] mt-1">340 MB</div>
              <div className="text-[11px] text-[#64748b] font-medium mt-0.5">Zero-copy shared buffer</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748b]">POSE DRIFT ERROR</div>
              <div className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#005f62] mt-1">0.12%</div>
              <div className="text-[11px] text-[#10b981] font-semibold mt-0.5">Sub-cm trajectory drift</div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#64748b]">VIVA SUCCESS RATE</div>
              <div className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] mt-1">100%</div>
              <div className="text-[11px] text-[#005f62] font-bold mt-0.5">Grade A+ Commendation</div>
            </div>
          </div>

          {/* Main Grid: Left Article Content (8 cols) + Right Sidebar (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-10">
              {/* Featured Lab Image with Caption */}
              <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-sm">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#081719]">
                  <img
                    src={asset(post.image)}
                    alt={post.title}
                    className="size-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = asset("fb137.png");
                    }}
                  />
                  <div className="absolute bottom-3 left-3 bg-[#081719]/80 backdrop-blur text-white text-[11px] px-3 py-1.5 rounded-lg font-medium">
                    📍 Real-Time LiDAR point cloud testing session • Edge Lab
                  </div>
                </div>
                <div className="px-5 py-3 text-xs text-[#64748b] bg-[#f8faf9] border-t border-[#e2e8f0]">
                  Figure 1: Hardware setup showing live 3D sensor fusion and point cloud segmentation running on Jetson edge board.
                </div>
              </div>

              {/* Section 01: Executive Summary & Capstone Context */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">01. BACKGROUND</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Executive Summary & Capstone Context
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  Autonomous robotic platforms require millisecond-level environmental perception. For our senior undergraduate capstone, our team engineered a high-throughput 3D perception pipeline that merges raw spatial coordinates with inertial odometry while remaining within edge compute thermal envelopes.
                </p>

                {/* 3 Callout summary boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  <div className="bg-[#f8faf9] p-4 rounded-xl border border-[#e2e8f0]">
                    <span className="size-2 rounded-full bg-[#18797d] block mb-2" />
                    <b className="text-xs font-bold text-[#0f172a] block mb-1">Low-Latency Pipeline</b>
                    <p className="text-[12px] text-[#64748b] leading-relaxed">Achieved 54 FPS continuous point cloud voxel filtering on embedded Jetson.</p>
                  </div>
                  <div className="bg-[#f8faf9] p-4 rounded-xl border border-[#e2e8f0]">
                    <span className="size-2 rounded-full bg-[#d97706] block mb-2" />
                    <b className="text-xs font-bold text-[#0f172a] block mb-1">Zero-Copy Memory</b>
                    <p className="text-[12px] text-[#64748b] leading-relaxed">Eliminated IPC bottlenecks between PyTorch layers and CUDA buffers.</p>
                  </div>
                  <div className="bg-[#f8faf9] p-4 rounded-xl border border-[#e2e8f0]">
                    <span className="size-2 rounded-full bg-[#005f62] block mb-2" />
                    <b className="text-xs font-bold text-[#0f172a] block mb-1">Grade A+ Commendation</b>
                    <p className="text-[12px] text-[#64748b] leading-relaxed">Praised by external university evaluation jury for reproducible benchmark rigor.</p>
                  </div>
                </div>
              </section>

              {/* Section 02: System Architecture & Dataflow */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">02. SYSTEM DESIGN</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  System Architecture & Dataflow
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  The complete system design is broken into 4 synchronized pipelines: Sensor Ingestion, Voxel Grid Normalization, Deep Neural Inference, and Pose Graph Optimization.
                </p>

                {/* Visual Flowchart representation */}
                <div className="rounded-xl bg-[#081719] p-6 text-white overflow-x-auto shadow-inner">
                  <div className="text-xs font-bold text-[#2dd4bf] uppercase tracking-wider mb-4">Pipeline Execution Flow</div>
                  <div className="flex items-center gap-3 min-w-[500px]">
                    <div className="flex-1 bg-[#102b30] border border-[#1e5860] p-3 rounded-lg text-center">
                      <div className="text-[10px] text-slate-400">INPUT</div>
                      <div className="text-xs font-bold mt-1 text-white">LiDAR + IMU</div>
                    </div>
                    <span className="text-slate-400 font-bold">→</span>
                    <div className="flex-1 bg-[#102b30] border border-[#1e5860] p-3 rounded-lg text-center">
                      <div className="text-[10px] text-slate-400">FILTER</div>
                      <div className="text-xs font-bold mt-1 text-white">Voxel Grid (0.05m)</div>
                    </div>
                    <span className="text-slate-400 font-bold">→</span>
                    <div className="flex-1 bg-[#102b30] border border-[#1e5860] p-3 rounded-lg text-center">
                      <div className="text-[10px] text-slate-400">INFERENCE</div>
                      <div className="text-xs font-bold mt-1 text-[#2dd4bf]">TensorRT INT8</div>
                    </div>
                    <span className="text-slate-400 font-bold">→</span>
                    <div className="flex-1 bg-[#102b30] border border-[#1e5860] p-3 rounded-lg text-center">
                      <div className="text-[10px] text-slate-400">OUTPUT</div>
                      <div className="text-xs font-bold mt-1 text-white">Trajectory Pose</div>
                    </div>
                  </div>
                </div>

                {/* Code Block */}
                <div className="rounded-xl bg-[#071317] border border-[#1e293b] overflow-hidden text-slate-300 font-mono text-xs">
                  <div className="bg-[#0b1c20] px-4 py-2 border-b border-[#1e293b] flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">slam_pipeline_optimizer.py</span>
                    <span className="text-[10px] text-[#2dd4bf] uppercase">Python 3.11 • TensorRT</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-[11.5px] leading-relaxed">
{`# Memory-mapped zero copy inference pipeline
import torch
import tensorrt as trt

class FastSLAMInference:
    def __init__(self, engine_path: str):
        self.runtime = trt.Runtime(trt.Logger(trt.Logger.WARNING))
        self.engine = self.load_engine(engine_path)
        self.context = self.engine.create_execution_context()
        self.stream = torch.cuda.Stream()
        
    def process_point_cloud(self, raw_points: torch.Tensor):
        with torch.cuda.stream(self.stream):
            # Quantized zero-copy CUDA execution
            voxel_features = self.voxelize_cuda(raw_points)
            pose_estimate = self.context.execute_v2([voxel_features.data_ptr()])
            return pose_estimate`}
                  </pre>
                </div>
              </section>

              {/* Section 03: Empirical Performance Benchmarks */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">03. BENCHMARKS</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Empirical Performance Benchmarks
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  We systematically benchmarked our pipeline against standard PointNet++ and traditional ICP across 3 distinct test environments (indoor lab, outdoor courtyard, and dark corridors).
                </p>

                {/* Benchmark Table */}
                <div className="overflow-x-auto rounded-xl border border-[#e2e8f0]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-[#f8faf9] text-[#475569] font-bold border-b border-[#e2e8f0]">
                      <tr>
                        <th className="p-3.5">Architecture Model</th>
                        <th className="p-3.5">Precision (mAP)</th>
                        <th className="p-3.5">Latency (ms)</th>
                        <th className="p-3.5">RAM Usage</th>
                        <th className="p-3.5">Defense Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e2e8f0] text-[#334155]">
                      <tr>
                        <td className="p-3.5 font-medium">Standard PointNet++ (FP32)</td>
                        <td className="p-3.5">86.4%</td>
                        <td className="p-3.5">74.2 ms</td>
                        <td className="p-3.5">820 MB</td>
                        <td className="p-3.5 text-slate-500">B+</td>
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium">VoxelNet + ICP Baseline</td>
                        <td className="p-3.5">88.1%</td>
                        <td className="p-3.5">52.8 ms</td>
                        <td className="p-3.5">610 MB</td>
                        <td className="p-3.5 text-slate-500">A-</td>
                      </tr>
                      <tr className="bg-[#eef6f6]/60 font-semibold text-[#005f62]">
                        <td className="p-3.5">Our Proposed TRT-INT8 Pipeline</td>
                        <td className="p-3.5">92.7%</td>
                        <td className="p-3.5 font-bold">18.2 ms</td>
                        <td className="p-3.5">340 MB</td>
                        <td className="p-3.5 font-bold text-[#10b981]">A+ ⭐</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Progress bar comparisons */}
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>Baseline PyTorch (Standard Unoptimized)</span>
                      <span>74.2 ms</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400 rounded-full" style={{ width: "95%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>TensorRT FP16 Acceleration</span>
                      <span>36.5 ms</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#18797d] rounded-full" style={{ width: "50%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#005f62] font-bold">Our INT8 Quantized Zero-Copy Pipeline</span>
                      <span className="text-[#005f62] font-bold">18.2 ms (75% faster)</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#10b981] rounded-full" style={{ width: "25%" }} />
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 04: Top Viva Questions Defended */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">04. VIVA DEFENSE PREP</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Top Viva & Panel Inquiries Defended
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  Here are the exact questions our external examination committee asked, along with our proven answers:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="bg-[#f8faf9] p-5 rounded-xl border border-[#e2e8f0] space-y-2">
                    <div className="font-bold text-sm text-[#0f172a] flex items-start gap-2">
                      <span className="text-[#18797d]">Q1:</span>
                      <span>How did you guarantee that INT8 quantization did not cause geometric accuracy degradation?</span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed pl-6">
                      <b className="text-[#0f172a]">Answer:</b> We implemented post-training calibration with a representative dataset of 2,500 point cloud frames, monitoring Kullback-Leibler (KL) divergence to ensure maximum dynamic range preservation.
                    </p>
                  </div>

                  <div className="bg-[#f8faf9] p-5 rounded-xl border border-[#e2e8f0] space-y-2">
                    <div className="font-bold text-sm text-[#0f172a] flex items-start gap-2">
                      <span className="text-[#18797d]">Q2:</span>
                      <span>What happens if the LiDAR sensor experiences occlusion or intense sunlight blinding?</span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed pl-6">
                      <b className="text-[#0f172a]">Answer:</b> Our Kalman filter automatically falls back onto high-frequency IMU dead-reckoning and wheel odometry until point cloud confidence metrics recover above threshold.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 05: Project Artifacts & Verification */}
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e2e8f0] shadow-sm space-y-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#18797d]">05. ARTIFACTS</span>
                </div>
                <h2 className="font-['Plus_Jakarta_Sans:Bold'] text-2xl font-bold text-[#0f172a] tracking-tight">
                  Project Artifacts & Reproducibility
                </h2>
                <p className="text-[15px] leading-[26px] text-[#475569]">
                  All documentation adheres to formal IEEE formatting guidelines with reproducible Docker scripts.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8faf9] flex items-start gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <b className="text-xs font-bold text-[#0f172a] block">Complete Thesis PDF</b>
                      <p className="text-[11px] text-[#64748b]">78-page IEEE formatted capstone report with citations.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#e2e8f0] bg-[#f8faf9] flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <div>
                      <b className="text-xs font-bold text-[#0f172a] block">Source Code Repository</b>
                      <p className="text-[11px] text-[#64748b]">Documented GitHub repository with Docker setup.</p>
                    </div>
                  </div>
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
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">02. System Architecture & Dataflow</div>
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">03. Performance Benchmarks</div>
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">04. Top Viva Questions Defended</div>
                  <div className="hover:text-[#18797d] transition cursor-pointer font-medium">05. Artifacts & Deliverables</div>
                </nav>
              </div>

              {/* Project Quick Specs Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">
                  Capstone Specifications
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between border-b border-[#f1f5f9] pb-2">
                    <span className="text-[#64748b]">University:</span>
                    <b className="text-[#0f172a]">BUET / DU / BRACU</b>
                  </div>
                  <div className="flex justify-between border-b border-[#f1f5f9] pb-2">
                    <span className="text-[#64748b]">Domain:</span>
                    <b className="text-[#0f172a]">Autonomous Systems</b>
                  </div>
                  <div className="flex justify-between border-b border-[#f1f5f9] pb-2">
                    <span className="text-[#64748b]">Tech Stack:</span>
                    <b className="text-[#0f172a]">PyTorch, TensorRT, ROS2</b>
                  </div>
                  <div className="flex justify-between border-b border-[#f1f5f9] pb-2">
                    <span className="text-[#64748b]">Defense Grade:</span>
                    <b className="text-[#10b981] font-bold">Grade A+ (Distinction)</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748b]">Year:</span>
                    <b className="text-[#0f172a]">2026 Academic Batch</b>
                  </div>
                </div>
              </div>

              {/* Mentorship CTA Card matching reference design */}
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
                  href="https://wa.me/8801788392063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full bg-[#2dd4bf] hover:bg-[#14b8a6] text-[#081719] font-bold text-xs py-3 px-4 rounded-xl transition text-center block shadow-lg"
                >
                  Talk with Senior Mentor →
                </a>
              </div>

              {/* Related Read Cards */}
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

        {/* Global CTA Strip at bottom matching screenshot */}
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
