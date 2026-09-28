import { motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";

const assetPathPrefix = "/assets";
const imgSvg5 = `${assetPathPrefix}/0aec9.svg`;
const projectsPerPage = 4;

const filters = [
  { key: "all", label: "All Fields" },
  { key: "web", label: "Web & Cloud" },
  { key: "ai", label: "AI & ML" },
  { key: "iot", label: "IoT & Hardware" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55} },
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activePage, setActivePage] = useState(0);
  const filtered = useMemo(
    () => (activeFilter === "all" ? projects : projects.filter((p) => p.filter === activeFilter)),
    [activeFilter],
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / projectsPerPage));
  const currentPage = Math.min(activePage, totalPages - 1);
  const visibleProjects = filtered.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  useEffect(() => {
    setActivePage(0);
  }, [activeFilter]);

  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = window.setInterval(() => {
      setActivePage((page) => (page + 1) % totalPages);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [totalPages]);

  return (
    <div id="projects" className="bg-[#f8faf9] content-stretch flex flex-col items-start py-[96px] relative shrink-0 w-full" data-node-id="1:384">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1280px] mx-auto px-[24px] relative shrink-0 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="content-stretch flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 relative shrink-0 w-full"
        >
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#005f62] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
              <p className="leading-[14px]">PROUD PROJECTS</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f1e36] text-[clamp(28px,3vw,40px)] tracking-[-0.8px]">
              <p className="leading-[1.2] mb-0">Breaking Boundaries, Building High-Impact</p>
              <p className="leading-[1.2]">Systems.</p>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-[8px] items-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-[20px] py-[8px] rounded-[9999px] text-[12px] font-['Plus_Jakarta_Sans:SemiBold'] font-semibold tracking-[0.48px] transition-colors cursor-pointer ${
                  activeFilter === f.key
                    ? "bg-[#083338] text-white"
                    : "bg-[#f2f4f3] text-[#3e4949] hover:bg-[#e5eaea]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.13 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] w-full"
        >
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-white border border-[#f1f5f9] border-solid content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-[24px] items-start p-[29px] relative rounded-[16px] hover:shadow-md transition-shadow"
            >
              {/* Project image */}
              <div className="bg-[#0f172a] h-[251px] md:h-full relative rounded-[12px] shrink-0 w-full md:w-[224px] overflow-clip">
                <img alt={project.title} className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={project.image} />
                {/* Date badge */}
                <div className="absolute backdrop-blur-[6px] bg-[rgba(15,23,42,0.75)] flex flex-col items-center justify-center left-[16px] min-w-[52px] px-[15px] py-[8px] rounded-[8px] top-[16px]">
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
                    <p className="leading-[28px]">{project.date}</p>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#cbd5e1] text-[10px] text-center tracking-[0.5px] uppercase whitespace-nowrap">
                    <p className="leading-[12.5px]">{project.month}</p>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="flex flex-col items-start justify-between flex-1 min-h-[251px]">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="flex gap-[8px] items-center w-full">
                    <div className="bg-[#f1f5f9] border border-[#e2e8f0] border-solid content-stretch flex items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#334155] text-[12px] whitespace-nowrap">
                        <p className="leading-[16px]">{project.category}</p>
                      </div>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">{project.university}</p>
                    </div>
                  </div>

                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[20px] w-full">
                    <p className="leading-[28px]">{project.title}</p>
                  </div>

                  <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px] w-full">
                    <p className="leading-[22.75px]">{project.description}</p>
                  </div>

                  <div className="flex gap-[6px] items-center pt-[3.5px]">
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#18797d] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">Tech:</p>
                    </div>
                    <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Medium'] font-medium justify-center leading-[0] relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">
                      <p className="leading-[16px]">{project.tech}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start pt-[8px] w-full">
                  <div className="border-[#f1f5f9] border-solid border-t flex items-center pt-[17px] w-full">
                    <div className="flex gap-[8px] items-center cursor-pointer group">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap group-hover:text-[#18797d] transition-colors">
                        <p className="leading-[20px]">Read More</p>
                      </div>
                      <div className="bg-[#0f172a] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[28px]">
                        <div className="relative shrink-0 size-[14px]">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination dots */}
        <div className="flex gap-[8px] items-center justify-center w-full pt-[8px]">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show project page ${index + 1}`}
              onClick={() => setActivePage(index)}
              className={
                currentPage === index
                  ? "bg-[#18797d] h-[8px] relative rounded-[9999px] shrink-0 w-[32px] cursor-pointer"
                  : "bg-[#cbd5e1] relative rounded-[9999px] shrink-0 size-[8px] cursor-pointer"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
