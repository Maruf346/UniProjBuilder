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

export const projects: Project[] = [
  {
    id: 1,
    category: "Web & Cloud",
    university: "By BRAC University",
    title: "CampusConnect: Distributed Academic Hub",
    description: "Microservice architecture powering synchronous course material dissemination, peer code reviews, and automated…",
    tech: "React 19 • Nest.js • PostgreSQL",
    image: `${assetPathPrefix}/ea616.png`,
    date: "28",
    month: "FEB",
    filter: "web",
  },
  {
    id: 2,
    category: "IoT & Telemetry",
    university: "By BUET Research",
    title: "Smart Micro-Climate Pollution Radar",
    description: "Edge telemetry array transmitting particulate PM2.5 and gas density indicators via MQTT to a live geospatial…",
    tech: "ESP32 • Python • FastAPI • InfluxDB",
    image: `${assetPathPrefix}/3c623.png`,
    date: "28",
    month: "FEB",
    filter: "iot",
  },
  {
    id: 3,
    category: "AI & Deep Learning",
    university: "By Dhaka University",
    title: "HealthTrack: Clinical Pathology AI",
    description: "Multi-label classification of pulmonary anomalies utilizing Vision Transformers with 94.8% AUC-ROC, secured with…",
    tech: "PyTorch • ViT Model • Next.js 14",
    image: `${assetPathPrefix}/9518f.png`,
    date: "28",
    month: "FEB",
    filter: "ai",
  },
  {
    id: 4,
    category: "Agritech Informatics",
    university: "By NSU Capstone",
    title: "AgriSense: Precision Soil Analytics",
    description: "Predictive crop yield estimator synchronizing Sentinel-2 satellite multi-spectral bands with physical ground…",
    tech: "Scikit-Learn • GeoPandas • FastAPI",
    image: `${assetPathPrefix}/ed6e9.png`,
    date: "28",
    month: "FEB",
    filter: "ai",
  },
];
