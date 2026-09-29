import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
import { faqs } from "../data/faqs";

const assetPathPrefix = "/assets";
const imgHeroBg = `${assetPathPrefix}/help.png`;
const imgContainer18 = `${assetPathPrefix}/b0f01.svg`;
const imgContainer19 = `${assetPathPrefix}/f8f74.svg`;
const imgContainer20 = `${assetPathPrefix}/2e6fe.svg`;
const imgSvg = `${assetPathPrefix}/2041d.svg`;

const faqItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45} },
};

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceLabels: Record<string, string> = {
      web: "Web Development",
      ai: "AI/ML",
      iot: "IoT & Hardware",
      thesis: "Thesis & Research",
      app: "Mobile App Development",
      other: "Other Academic Project",
    };

    const selectedService = serviceLabels[formData.option] || formData.option || "Not specified";

    const text = [
      `*New Project Inquiry - University Project Builder*`,
      `*Name:* ${formData.name || "N/A"}`,
      `*Email:* ${formData.email || "N/A"}`,
      `*Phone:* ${formData.phone || "N/A"}`,
      `*Service:* ${selectedService}`,
      formData.message ? `*Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `https://wa.me/8801788392063?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-[#eef3f2] content-stretch flex flex-col items-start px-[24px] py-[80px] relative shrink-0 w-full" data-node-id="1:672">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(420px,644px)_minmax(480px,700px)] gap-[48px] lg:gap-[96px] justify-center max-w-[1450px] mx-auto relative shrink-0 w-full">
        {/* FAQ accordion */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="content-stretch flex flex-col gap-[16px] lg:gap-[20px] items-start relative order-2 lg:order-2"
        >
          {faqs.map((faq) => (
            <motion.div key={faq.id} variants={faqItemVariants} className="bg-white border border-[rgba(226,232,240,0.8)] border-solid content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full overflow-hidden">
              <button
                className="flex min-h-[88px] items-center justify-between px-[32px] py-[22px] w-full text-left"
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              >
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[#1e293b] text-[19px]">
                  <p className="leading-[26px]">{faq.question}</p>
                </div>
                <div className="border-2 border-[#2f999c] border-solid content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[40px] ml-4">
                  <div className="relative shrink-0 size-[10.5px]">
                    <img
                      alt=""
                      className="absolute block inset-0 max-w-none size-full"
                      src={imgContainer18}
                      style={{ transform: openFaq === faq.id ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}
                    />
                  </div>
                </div>
              </button>
              <AnimatePresence>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden w-full"
                  >
                    <div className="px-[29px] pb-[21px]">
                      <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Regular'] font-normal justify-center leading-[0] relative shrink-0 text-[#475569] text-[14px]">
                        <p className="leading-[22px]">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Left card */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65}}
          className="bg-[rgba(255,255,255,0)] h-[560px] lg:h-[690px] overflow-clip relative rounded-[10px] order-1 lg:order-1 w-full max-w-[1800px] mx-auto"
        >
          {/* Background image with overlay */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-full object-cover" src={imgHeroBg} />
            </div>
            <div className="absolute bg-[#e5e5e5] inset-0 mix-blend-multiply" />
          </div>
          <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] inset-0 to-[rgba(0,0,0,0.3)] via-1/2 via-[rgba(0,0,0,0)]" />

          <div className="[word-break:break-word] absolute flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] left-[36px] md:left-[42px] text-[clamp(34px,3.6vw,52px)] text-white top-[48px] md:top-[504px] tracking-[-1.05px] bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="leading-[1.15] mb-0">Need Help?</p>
            <p className="leading-[1.15]">Start Here...</p>
          </div>

          {/* Bottom teal card */}
          <div className="absolute bottom-0 right-0 bg-white pl-[14px] pt-[14px] rounded-tl-[18px]">
            <div className="bg-[#389392] flex flex-col gap-[38px] items-start px-[24px] py-[32px] rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] w-[246px]">
              <div className="flex flex-col items-start relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
                  <p className="leading-[30px] mb-0">Get Started</p>
                  <p className="leading-[30px]">Free Call?</p>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                <div className="bg-[#082b2f] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]">
                  <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[56px] top-0" />
                  <div className="relative shrink-0 size-[18px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer19} />
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.4px] w-full">
                  <a href="tel:+8801788392063" className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-[1px] decoration-solid leading-[28px] underline">
                    +880 1788-392063
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Us - full width contact form below */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65}}
        className="bg-[#081719] content-stretch flex flex-col items-start overflow-clip px-[24px] md:px-[48px] py-[80px] md:py-[112px] relative shrink-0 w-full mt-[80px] rounded-[16px]"
      >
        {/* Left SVG decorations */}
        <div className="absolute inset-0 overflow-clip pointer-events-none">
          <div className="absolute h-[775.5px] left-0 top-0 w-[450px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${assetPathPrefix}/03e20.svg`} />
          </div>
          <div className="absolute h-[775.5px] right-0 top-0 w-[450px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${assetPathPrefix}/e32bd.svg`} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] relative w-full">
          {/* Left: map/visual */}
          <div className="lg:col-span-6 flex h-[400px] lg:h-[500px] items-center justify-center relative">
            <div className="flex-1 h-full min-w-px opacity-70 overflow-clip relative">
              <div className="absolute inset-[30.63%_21.22%_29.11%_9.05%]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={`${assetPathPrefix}/b3838.svg`} />
              </div>
            </div>
            {/* Map location dots */}
            {[
              { inset: "36%_70.43%_60%_26%" },
              { inset: "30%_42.43%_66%_54%" },
              { inset: "66%_65.43%_30%_31%" },
            ].map((dot, i) => (
              <div key={i} className="absolute flex flex-col items-start" style={{ inset: dot.inset }}>
                <div className="flex items-center justify-center relative w-full">
                  <div className="absolute bg-[rgba(24,121,125,0.4)] left-[-8px] rounded-[9999px] size-[36px] top-[-8px]" />
                  <div className="bg-white flex items-center justify-center relative rounded-[9999px] shrink-0 size-[20px]">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(24,121,125,0.3),0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[20px] top-1/2" />
                    <div className="bg-[#18797d] relative rounded-[9999px] shrink-0 size-[8px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: contact form */}
          <div className="backdrop-blur-[6px] bg-[rgba(18,38,41,0.88)] border border-[rgba(255,255,255,0.1)] border-solid lg:col-span-6 flex flex-col gap-[32px] items-start overflow-clip p-[32px] md:p-[49px] relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.7)]">
            {/* Tag */}
            <div className="bg-[#0e272b] border border-[#1d575c] border-solid relative rounded-[6px] shrink-0">
              <div className="flex gap-[8px] items-center px-[13px] py-[7px]">
                <div className="relative shrink-0" style={{ width: "12px", height: "13.333px" }}>
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer20} />
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[#2dd4bf] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">
                  <p className="leading-[16.5px]">GET IN TOUCH</p>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="relative shrink-0 w-full">
              <div className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:Bold'] font-bold justify-center leading-[0] relative shrink-0 text-[clamp(32px,3vw,48px)] text-white tracking-[-1.2px] w-full">
                <p>
                  <span className="leading-[1]">Contact </span>
                  <span className="font-['Plus_Jakarta_Sans:Bold'] font-bold leading-[1] text-[#2dd4bf]">Us.</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSendMessage} className="flex flex-col gap-[32px] items-start pt-[8px] w-full">
              {/* Row 1: Name + Email */}
              <div className="flex flex-col md:flex-row gap-[32px] items-start justify-center w-full">
                <div className="border-[rgba(255,255,255,0.2)] border-b border-solid flex flex-1 items-start justify-center overflow-clip pb-[16px] pt-[10px] px-[12px] w-full focus-within:border-[#2dd4bf] transition-colors">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="flex-1 min-w-px bg-transparent font-['Plus_Jakarta_Sans:Regular'] font-normal text-[15px] text-white placeholder-[#94a3b8] outline-none"
                  />
                </div>
                <div className="border-[rgba(255,255,255,0.2)] border-b border-solid flex flex-1 items-start justify-center overflow-clip pb-[16px] pt-[10px] px-[12px] w-full focus-within:border-[#2dd4bf] transition-colors">
                  <input
                    type="email"
                    placeholder="Email Address (optional)"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="flex-1 min-w-px bg-transparent font-['Plus_Jakarta_Sans:Regular'] font-normal text-[15px] text-white placeholder-[#94a3b8] outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Phone + Option */}
              <div className="flex flex-col md:flex-row gap-[32px] items-start justify-center w-full">
                <div className="border-[rgba(255,255,255,0.2)] border-b border-solid flex flex-1 items-start justify-center overflow-clip pb-[16px] pt-[10px] px-[12px] w-full focus-within:border-[#2dd4bf] transition-colors">
                  <input
                    type="tel"
                    placeholder="Phone number / WhatsApp *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 min-w-px bg-transparent font-['Plus_Jakarta_Sans:Regular'] font-normal text-[15px] text-white placeholder-[#94a3b8] outline-none"
                  />
                </div>
                <div className="border-[rgba(255,255,255,0.2)] border-b border-solid flex flex-1 items-center overflow-clip pb-[13px] pl-[12px] pr-[12px] pt-[8px] w-full relative focus-within:border-[#2dd4bf] transition-colors">
                  <select
                    value={formData.option}
                    onChange={(e) => setFormData({ ...formData, option: e.target.value })}
                    className={`flex-1 min-w-px bg-transparent font-['Plus_Jakarta_Sans:Regular'] font-normal text-[15px] outline-none appearance-none cursor-pointer pr-6 ${
                      formData.option ? "text-white" : "text-[#94a3b8]"
                    }`}
                  >
                    <option value="" disabled className="bg-[#0f2a2e] text-[#94a3b8]">Choose a Service / Project Type *</option>
                    <option value="web" className="bg-[#0f2a2e] text-white py-2">Web Development</option>
                    <option value="ai" className="bg-[#0f2a2e] text-white py-2">AI / Machine Learning</option>
                    <option value="iot" className="bg-[#0f2a2e] text-white py-2">IoT & Hardware</option>
                    <option value="thesis" className="bg-[#0f2a2e] text-white py-2">Thesis & Documentation</option>
                    <option value="app" className="bg-[#0f2a2e] text-white py-2">Mobile App</option>
                    <option value="other" className="bg-[#0f2a2e] text-white py-2">Other Project</option>
                  </select>
                  <div className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#2dd4bf] flex items-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="border-[rgba(255,255,255,0.2)] border-b border-solid flex items-start justify-center overflow-clip pb-[16px] pt-[10px] px-[12px] w-full focus-within:border-[#2dd4bf] transition-colors">
                <textarea
                  placeholder="Tell us about your project, deadline & university requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="flex-1 min-w-px bg-transparent font-['Plus_Jakarta_Sans:Regular'] font-normal text-[15px] text-white placeholder-[#94a3b8] outline-none resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="flex flex-col items-start pt-[16px] w-full">
                <button
                  type="submit"
                  className="bg-[#18797d] content-stretch flex gap-[12px] items-center pl-[28px] pr-[10px] py-[10px] relative rounded-[9999px] shrink-0 cursor-pointer hover:bg-[#1a8a8f] active:scale-[0.98] transition-all"
                >
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
                  <span className="[word-break:break-word] flex flex-col font-['Plus_Jakarta_Sans:SemiBold'] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
                    Send Message
                  </span>
                  <div className="bg-[#082b2f] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]">
                    <div className="relative shrink-0 size-[16px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSvg} />
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
