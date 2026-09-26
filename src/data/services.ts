export interface Service {
  id: number;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
  tag: string;
}

const assetPathPrefix = "/assets";

export const services: Service[] = [
  {
    id: 1,
    icon: `${assetPathPrefix}/95942.svg`,
    iconBg: "#d9eaeb",
    title: "Full-Stack Web Platforms",
    description: "Microservices, Next.js 14 SSR, Python FastAPI, PostgreSQL, GraphQL endpoints, and real-time bi-directional WebSockets.",
    tag: "WEB / ENTERPRISE",
  },
  {
    id: 2,
    icon: `${assetPathPrefix}/ae697.svg`,
    iconBg: "#cfe7ec",
    title: "AI & Deep Learning Systems",
    description: "YOLOv8 vision detection, Transformer NLP for Bengali language translation, GANs, and medical diagnostics with PyTorch.",
    tag: "COMPUTER VISION • ML",
  },
  {
    id: 3,
    icon: `${assetPathPrefix}/173f1.svg`,
    iconBg: "#fef3c7",
    title: "Mobile & Embedded IoT",
    description: "ESP32/Arduino circuit logic, MQTT broker telemetry, LoRaWAN gateways, and responsive Flutter companion apps.",
    tag: "HARDWARE • EDGE",
  },
  {
    id: 4,
    icon: `${assetPathPrefix}/535cd.svg`,
    iconBg: "#d9eaeb",
    title: "Data Mining & Analytics",
    description: "Big Data distributed pipelines, statistical hypothesis testing, automated sentiment crawlers, and interactive visualization suites.",
    tag: "DATA SCIENCE • ETL",
  },
  {
    id: 5,
    icon: `${assetPathPrefix}/532bb.svg`,
    iconBg: "#cfe7ec",
    title: "Thesis & Research Implementation",
    description: "Formal methodology synthesis, baseline model benchmarking, ablation experiments, and IEEE/Scopus camera-ready formatting.",
    tag: "RESEARCH • IEEE",
  },
  {
    id: 6,
    icon: `${assetPathPrefix}/fe52f.svg`,
    iconBg: "#fef3c7",
    title: "Technical Docs & Viva Prep",
    description: "Complete SRS documentation, UML class/sequence suites, LaTeX typesetting, professional slides, and viva Q&A cheat-sheets.",
    tag: "VIVA COACHING • SRS",
  },
];
