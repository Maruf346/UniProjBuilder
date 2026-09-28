export interface Project {
  id: number;
  category: string;
  university: string;
  title: string;
  description: string;
  tech: string;
  image: string;
  date: string;
  month: string;
  filter: string;
}

const assetPathPrefix = "/assets";
const imagePath = (path: string) => (path.startsWith("/") ? path : `${assetPathPrefix}/${path}`);

export const projects: Project[] = [
  {
    id: 1,
    category: "Web & Cloud",
    university: "By BRAC University",
    title: "CampusConnect: Student Course Portal",
    description: "A simple portal where students can find class notes, submit assignments, and discuss project updates in one place.",
    tech: "React, Node.js, PostgreSQL",
    image: imagePath("ea616.png"),
    date: "28",
    month: "FEB",
    filter: "web",
  },
  {
    id: 2,
    category: "IoT & Hardware",
    university: "By BUET Research",
    title: "Smart Air Quality Monitor",
    description: "A low-cost device that reads air quality data and sends live updates to a dashboard for students and teachers.",
    tech: "ESP32, MQTT, FastAPI",
    image: imagePath("3c623.png"),
    date: "24",
    month: "FEB",
    filter: "iot",
  },
  {
    id: 3,
    category: "AI & ML",
    university: "By Dhaka University",
    title: "HealthTrack: Medical Report Helper",
    description: "An AI model that helps classify basic health reports and explains the result in clear language for review.",
    tech: "Python, PyTorch, Next.js",
    image: imagePath("9518f.png"),
    date: "18",
    month: "FEB",
    filter: "ai",
  },
  {
    id: 4,
    category: "AI & ML",
    university: "By NSU Capstone",
    title: "AgriSense: Crop Suggestion App",
    description: "A student-friendly app that suggests suitable crops from soil, weather, and location data.",
    tech: "Scikit-learn, FastAPI, React",
    image: imagePath("ed6e9.png"),
    date: "12",
    month: "FEB",
    filter: "ai",
  },
  {
    id: 5,
    category: "Web & Cloud",
    university: "By AIUB Team",
    title: "LibraryMate: Book Borrowing System",
    description: "A web app for searching books, reserving copies, tracking due dates, and managing student library records.",
    tech: "React, Express, MongoDB",
    image: imagePath("51bd3.png"),
    date: "06",
    month: "FEB",
    filter: "web",
  },
  {
    id: 6,
    category: "IoT & Hardware",
    university: "By AUST Students",
    title: "SafeBus: Student Bus Tracker",
    description: "A GPS-based tracking system that shows bus location, route status, and expected arrival time on a simple map.",
    tech: "GPS, Firebase, Flutter",
    image: imagePath("916be.png"),
    date: "30",
    month: "JAN",
    filter: "iot",
  },
  {
    id: 7,
    category: "AI & ML",
    university: "By UIU Capstone",
    title: "BanglaNote: Lecture Summary Tool",
    description: "An AI tool that turns long lecture notes into short summaries, key points, and possible viva questions.",
    tech: "Python, NLP, React",
    image: imagePath("c0a09.png"),
    date: "22",
    month: "JAN",
    filter: "ai",
  },
  {
    id: 8,
    category: "Web & Cloud",
    university: "By IUB Students",
    title: "PayTrack: Club Budget Manager",
    description: "A clean dashboard for student clubs to record expenses, approve budgets, and export simple monthly reports.",
    tech: "Next.js, Supabase, Tailwind",
    image: imagePath("b5b9c.png"),
    date: "15",
    month: "JAN",
    filter: "web",
  },
];
