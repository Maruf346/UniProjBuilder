export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

// ─── Edit your reviews here ───────────────────────────────────────────────────
// avatar: drop your image into /public/ and set the path like "/rev1.png"
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rafiul Islam",
    role: "CSE Final Year, BRACU",
    text: "I was totally lost with my thesis topic and had no idea where to start. The team helped me pick a practical idea, set it up properly, and even guided me through the documentation. Submitted on time and my supervisor was actually impressed!",
    avatar: "/assets/rev2.jpg?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Nusrat Khanam",
    role: "EEE Student, GUB",
    text: "Honestly didn't think I'd find anyone who understood what my project actually needed. They built the circuit simulation, wrote the report structure, and explained everything so I could defend it myself. Really trustworthy team.",
    avatar: "/assets/rev1.jpg?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Tanvir Hossain",
    role: "BBA Final Year, EWU",
    text: "My project was due in 5 days and I had nothing ready. I messaged them late at night and they started the same day. The final output was clean, properly formatted, and my supervisor had no major complaints. Will definitely come back next semester.",
    avatar: "/assets/R3.jpg?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sadia Akter",
    role: "Software Engineering, DIU",
    text: "They completed my web project with proper documentation and even added features I didn't ask for. The code was clean and they explained it so I could present it confidently in front of my panel. Really felt like they had my back.",
    avatar: "/assets/rev4.jpg?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    role: "CSE Student, UAP",
    text: "I needed a machine learning project for my capstone. They handled everything from dataset preparation to model training. They also gave me a simple explanation so I wasn't clueless during the viva. Genuinely one of the best decisions I made.",
    avatar: "/assets/rev5.jpg?w=120&h=120&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Fariha Binte Karim",
    role: "Architecture Student, IUBAT",
    text: "I was struggling with my CAD drawings and project report at the same time. The team took over the report writing while I focused on the design work. The division of effort was perfect and my submission turned out really well.",
    avatar: "/assets/rev6.jpg?w=120&h=120&fit=crop&crop=face",
  },
];
