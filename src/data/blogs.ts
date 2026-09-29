export interface MetricItem {
  label: string;
  value: string;
  subtext?: string;
  color?: string;
}

export interface SpecItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PipelineStep {
  step: string;
  title: string;
  highlight?: boolean;
}

export interface BenchmarkRow {
  model: string;
  precision: string;
  latency: string;
  ram: string;
  score: string;
  isProposed?: boolean;
}

export interface BlogSection {
  heading: string;
  body: string[];
  tips?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  day: string;
  month: string;
  category: string;
  subCategory?: string;
  author: string;
  authorRole: string;
  time: string;
  image: string;
  figureCaption: string;
  summary: string;
  featured?: boolean;
  metrics: MetricItem[];
  specs: SpecItem[];
  tags: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  pipeline?: PipelineStep[];
  benchmarks?: {
    title: string;
    description: string;
    headers: string[];
    rows: BenchmarkRow[];
    bars: { label: string; value: string; percent: number; isBest?: boolean }[];
  };
  vivaQuestions: FaqItem[];
  artifacts: { title: string; description: string; icon: string }[];
  content: {
    introduction: string;
    sections: BlogSection[];
    conclusion: string;
  };
}

export const blogFilters = [
  "All Stories",
  "Viva & Defense",
  "Web & Software",
  "AI & Machine Learning",
  "IoT & Hardware",
  "Thesis & Research",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "top-25-viva-defense-questions-university-projects",
    title: "The Viva Defense Masterclass: 25 Questions Supervisors Always Ask",
    day: "15",
    month: "MAR",
    category: "Viva & Defense",
    subCategory: "BUET • DU • BRACU • NSU",
    author: "Engr. Tanvir Ahmed",
    authorRole: "Senior Academic Mentor & Jury Evaluator",
    time: "8 min read",
    image: "viva.jpg",
    figureCaption: "Figure 1: Typical university viva examination panel evaluating architecture diagrams & live software demonstrations.",
    featured: true,
    summary: "A practical guide to acing your university final year project defense. Master how to explain your architecture, justify technical decisions, and answer tough panel inquiries.",
    tags: ["Viva Defense", "Final Year Project", "CSE", "University Thesis"],
    metrics: [
      { label: "PASS ACCURACY", value: "98.4%", subtext: "First-pass defense approval", color: "#10b981" },
      { label: "AVG VIVA DURATION", value: "15-20 min", subtext: "Standard committee slot" },
      { label: "KEY QUESTIONS", value: "25", subtext: "Universal panel checklist" },
      { label: "DEFENSE GRADE", value: "Grade A+", subtext: "Distinction standard", color: "#005f62" },
    ],
    specs: [
      { label: "Target Track:", value: "All Engineering & CS Capstones" },
      { label: "Examination Type:", value: "Final Defense & External Viva" },
      { label: "Average Panel Size:", value: "3-5 Professors & External Jury" },
      { label: "Success Rating:", value: "Top 5% Commendation", highlight: true },
      { label: "Academic Cycle:", value: "2026 University Submissions" },
    ],
    pipeline: [
      { step: "01", title: "Problem Gap (60s)" },
      { step: "02", title: "System Flow (3 min)" },
      { step: "03", title: "Live Demo (5 min)", highlight: true },
      { step: "04", title: "Jury Q&A (10 min)" },
    ],
    vivaQuestions: [
      {
        question: "What is the novel contribution of your project compared to existing platforms?",
        answer: "Clearly articulate the exact performance gap, algorithmic optimization, localized dataset, or architectural efficiency your project delivers. Never say 'Because our supervisor told us to'.",
      },
      {
        question: "Why did you choose this database/tech stack instead of standard alternatives?",
        answer: "Defend with hard trade-offs: data access patterns, ACID transaction requirements, read/write latency benchmarks, or hardware memory limits.",
      },
      {
        question: "What happens when your system faces edge-case failures or anomalous inputs?",
        answer: "Demonstrate mature engineering: explain your validation filters, fallback error boundaries, and planned future optimizations.",
      },
    ],
    artifacts: [
      { title: "Viva Defense Question Bank", description: "25 fully explained answers covering algorithms, databases & architecture.", icon: "📋" },
      { title: "Standard Presentation Deck", description: "12-slide high-impact defense slide template formatted for 15-minute limits.", icon: "📊" },
    ],
    content: {
      introduction: "Walking into your project defense room can feel intimidating, but supervisors almost always evaluate projects using a predictable framework. Understanding what professors look for is 80% of the preparation.",
      sections: [
        {
          heading: "1. The Motivation & Problem Statement Questions",
          body: [
            "Every viva begins with the basics: Why did you build this, and what real-world problem does it solve? Even if your code is flawless, failing to clearly define the problem leaves a weak impression.",
            "Professors want to see if you understand existing solutions and why your approach offers a distinct advantage or contribution."
          ],
          tips: [
            "Be ready to explain: 'What is the novel contribution of your project compared to existing platforms?'",
            "Keep a 60-second elevator pitch ready defining problem, methodology, and outcome.",
            "Never say 'Because our supervisor assigned it' — frame it around solving a specific gap."
          ]
        },
        {
          heading: "2. Technical Architecture & Tech Stack Justification",
          body: [
            "One of the most frequent traps is explaining what you used without being able to defend why you used it over alternatives.",
            "If you built with React, PostgreSQL, or FastAPI, be prepared to justify database indexing, state management choices, or latency considerations."
          ],
          tips: [
            "Prepare for: 'Why did you choose SQL over NoSQL for this data model?'",
            "Memorize your high-level system architecture diagram so you can draw or explain it on the whiteboard.",
            "Know your API flow from client request to database response."
          ]
        }
      ],
      conclusion: "Remember, confidence comes from practice. Rehearse your slide transitions, test your live demo offline in case university WiFi fails, and you'll walk out of that viva room with top marks."
    }
  },
  {
    slug: "step-by-step-guide-final-year-cse-project-bangladesh",
    title: "How to Build a High-Scoring Final Year CSE Project: Complete Roadmap",
    day: "10",
    month: "MAR",
    category: "Web & Software",
    subCategory: "Software Engineering • Capstone",
    author: "Rafiul Islam",
    authorRole: "CSE Alumnus & Senior Tech Lead",
    time: "7 min read",
    image: "cse.jpg",
    figureCaption: "Figure 1: Full-stack modular software architecture designed for easy team collaboration and rapid grading.",
    summary: "From selecting an approved topic to writing proper documentation and creating a clean MVP. Everything university students need to know to complete their project on time.",
    tags: ["CSE Projects", "Web Development", "Software Engineering", "Capstone"],
    metrics: [
      { label: "TIMELINE", value: "12 Weeks", subtext: "Structured sprint milestones" },
      { label: "CODE TEST COVERAGE", value: "85%+", subtext: "Unit & integration tested", color: "#10b981" },
      { label: "REPORT PAGES", value: "65-80", subtext: "Standard university thesis length" },
      { label: "AVERAGE GRADE", value: "3.9 / 4.0", subtext: "Across guided student cohorts", color: "#005f62" },
    ],
    specs: [
      { label: "Primary Track:", value: "Full-Stack Software Engineering" },
      { label: "Core Stack:", value: "React / Next.js, Node/Python, PostgreSQL" },
      { label: "Hosting / Infra:", value: "Docker, Cloud VPS, CI/CD Pipeline" },
      { label: "Grading Criteria:", value: "Code Quality + IEEE Documentation", highlight: true },
      { label: "Target Batch:", value: "2026 Undergrad Final Year" },
    ],
    pipeline: [
      { step: "01", title: "Topic Approval (W1-2)" },
      { step: "02", title: "MVP Prototype (W3-6)", highlight: true },
      { step: "03", title: "Testing & Polish (W7-9)" },
      { step: "04", title: "Report & Defense (W10-12)" },
    ],
    codeSnippet: {
      filename: "docker-compose.yml",
      language: "YAML • Production Setup",
      code: `version: '3.8'
services:
  api:
    build: ./backend
    ports: ["8000:8000"]
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/uniproj
    depends_on: [db, redis]
  frontend:
    build: ./frontend
    ports: ["3000:3000"]
  db:
    image: postgres:15-alpine
    volumes: [pgdata:/var/lib/postgresql/data]`
    },
    vivaQuestions: [
      {
        question: "How is user data protected and authenticated across your microservices?",
        answer: "We use signed JWT access tokens coupled with HTTP-only refresh tokens, bcrypt password hashing, and role-based middleware guards at the API gateway layer.",
      },
      {
        question: "What automated testing or CI/CD pipelines did you establish?",
        answer: "GitHub Actions automated workflows run linting and Jest/PyTest suites on every pull request to maintain 85%+ branch coverage.",
      },
    ],
    artifacts: [
      { title: "Complete Software Architecture Report", description: "IEEE-formatted documentation with full UML, ERD, and use case diagrams.", icon: "📄" },
      { title: "Production Ready Codebase", description: "Modular repository with Docker configurations and API Swagger docs.", icon: "📦" },
    ],
    content: {
      introduction: "Starting your final year capstone project without a clear roadmap leads to panic two weeks before submission. Breaking your project into structured milestones makes execution smooth and stress-free.",
      sections: [
        {
          heading: "Milestone 1: Topic Selection & Feasibility Verification",
          body: [
            "Pick a topic with realistic scope. Many students make the mistake of attempting to build another full social network or autonomous car in 4 months.",
            "Make sure your dataset or third-party APIs are easily accessible in Bangladesh before confirming the proposal with your supervisor."
          ],
          tips: [
            "Check 3-5 recently published IEEE or university papers for inspiration.",
            "Get written topic approval from your supervisor before writing code."
          ]
        },
        {
          heading: "Milestone 2: Modular Architecture & MVP First",
          body: [
            "Build your Minimum Viable Product (MVP) within the first 6 weeks. This gives you a working prototype for your mid-term defense.",
            "Keep frontend, backend APIs, and database separate so group members can work in parallel without merge conflicts."
          ],
          tips: [
            "Use Git with feature branches from day one.",
            "Focus on completing core user flows before spending time on fancy UI animations."
          ]
        }
      ],
      conclusion: "Consistency beats last-minute all-nighters. Follow this roadmap step-by-step, maintain steady communication with your mentor, and you will deliver a standout capstone."
    }
  },
  {
    slug: "building-ai-machine-learning-thesis-project-guide",
    title: "Building an AI / Machine Learning Thesis Project: Beginner to Submission",
    day: "04",
    month: "MAR",
    category: "AI & Machine Learning",
    subCategory: "Deep Learning • PyTorch • Scopus",
    author: "Tahsin Kabir",
    authorRole: "NLP & Vision Researcher • DU",
    time: "9 min read",
    image: "ml.jpg",
    figureCaption: "Figure 1: Deep learning training convergence curves and confusion matrix validation benchmarks.",
    summary: "A practical guide on dataset preparation, transfer learning models, training metrics, and how to present benchmark graphs that satisfy your thesis panel.",
    tags: ["Machine Learning", "Deep Learning", "Python", "Thesis Project"],
    metrics: [
      { label: "DATASET SAMPLES", value: "15,000+", subtext: "Cleaned & augmented dataset" },
      { label: "MODEL ACCURACY", value: "94.8%", subtext: "Macro F1-score validation", color: "#10b981" },
      { label: "INFERENCE TIME", value: "24 ms", subtext: "Quantized ONNX runtime" },
      { label: "PUBLICATION STATUS", value: "Accepted", subtext: "IEEE Conference Track", color: "#005f62" },
    ],
    specs: [
      { label: "Research Domain:", value: "Deep Learning & Computer Vision" },
      { label: "Framework:", value: "PyTorch, HuggingFace, TensorBoard" },
      { label: "Hardware Used:", value: "NVIDIA RTX 4090 / CUDA 12.2" },
      { label: "Evaluation Metrics:", value: "Precision, Recall, F1, Loss Curves", highlight: true },
      { label: "Target Outcome:", value: "Conference Paper + Thesis A+" },
    ],
    pipeline: [
      { step: "01", title: "Data Curation" },
      { step: "02", title: "Baseline Model" },
      { step: "03", title: "Fine-Tuning", highlight: true },
      { step: "04", title: "Ablation & Report" },
    ],
    codeSnippet: {
      filename: "train_eval.py",
      language: "Python 3.11 • PyTorch",
      code: `import torch
import torch.nn as nn
from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained(
    "custom-bengali-bert", num_labels=5
)
criterion = nn.CrossEntropyLoss(label_smoothing=0.1)
optimizer = torch.optim.AdamW(model.parameters(), lr=2e-5)`
    },
    vivaQuestions: [
      {
        question: "How did you verify that your deep learning model is not overfitting on the training set?",
        answer: "We tracked validation loss curves per epoch with early stopping, applied random data augmentation, and evaluated the model on a strictly isolated 15% hold-out test set.",
      },
      {
        question: "Why did you choose this architecture over simple Random Forest or SVM baselines?",
        answer: "We conducted an ablation study showing our fine-tuned transformer scored a +14.2% higher F1-score than classical baseline methods on contextual sentence classifications.",
      },
    ],
    artifacts: [
      { title: "Complete ML Training Pipeline", description: "Jupyter notebooks with automated evaluation scripts and confusion matrices.", icon: "🧠" },
      { title: "Preprocessed Clean Dataset", description: "15,000 labeled samples with train/val/test splits and documentation.", icon: "📊" },
    ],
    content: {
      introduction: "Machine Learning projects are among the most popular university choices, but supervisors are tired of generic Iris dataset classifications. Here is how to build an ML project with real academic credibility.",
      sections: [
        {
          heading: "1. Dataset Sourcing & Preprocessing Standards",
          body: [
            "A model is only as good as its data. Always clean your dataset, handle missing values, and document your train-validation-test split methodology (e.g., 70-15-15 or 80-10-10).",
            "If working with localized data like Bengali NLP or regional crop disease images, ensure your dataset is properly labeled and credited."
          ],
          tips: [
            "Always apply data augmentation to prevent overfitting on small datasets.",
            "Document class imbalances and apply SMOTE or focal loss where appropriate."
          ]
        },
        {
          heading: "2. Model Training, Fine-Tuning & Baselines",
          body: [
            "Never present a complex model without comparing it to a simple baseline (like Logistic Regression, Random Forest, or base ResNet).",
            "Show how your fine-tuning improved accuracy, precision, recall, and F1-score with clear visual confusion matrices."
          ],
          tips: [
            "Plot train vs validation loss curves to prove your model is not overfitting.",
            "Record execution latency per inference for real-time applications."
          ]
        }
      ],
      conclusion: "Focus on clean methodology, reproducible benchmarks, and honest error analysis. That is what wins top honors in university research defenses."
    }
  },
  {
    slug: "iot-hardware-project-guide-esp32-arduino-sensors",
    title: "IoT & Hardware Projects: How to Avoid Sensor Noise and Power Pitfalls",
    day: "26",
    month: "FEB",
    category: "IoT & Hardware",
    subCategory: "Embedded Systems • ESP32 • Telemetry",
    author: "Fahim Hasan",
    authorRole: "Embedded Hardware Specialist • BRACU",
    time: "6 min read",
    image: "87b36.png",
    figureCaption: "Figure 1: IoT microcontroller testbed with decoupled power rails and live cloud MQTT telemetry stream.",
    summary: "Common hardware mistakes in student IoT projects — from voltage regulator overheating to MQTT broker connection drops — and how to fix them before live demo day.",
    tags: ["IoT", "ESP32", "Arduino", "Embedded Systems", "Hardware"],
    metrics: [
      { label: "SLEEP CURRENT", value: "18 µA", subtext: "Deep sleep power optimization", color: "#10b981" },
      { label: "BATTERY LIFE", value: "45 Days", subtext: "Single 18650 Li-ion cell" },
      { label: "PACKET LOSS", value: "< 0.2%", subtext: "LoRa / MQTT transmission" },
      { label: "PROTOTYPE GRADE", value: "Grade A+", subtext: "Hardware distinction", color: "#005f62" },
    ],
    specs: [
      { label: "Hardware MCU:", value: "ESP32-WROOM / Arduino Mega" },
      { label: "Protocol:", value: "MQTT over TLS / LoRaWAN Mesh" },
      { label: "Sensors Used:", value: "DHT22, Soil Moisture, MQ-135, GPS" },
      { label: "Enclosure:", value: "Custom 3D-Printed Weatherproof Box", highlight: true },
      { label: "Target Batch:", value: "2026 EEE & CSE Hardware Capstone" },
    ],
    pipeline: [
      { step: "01", title: "Circuit Design" },
      { step: "02", title: "PCB Prototyping", highlight: true },
      { step: "03", title: "Cloud MQTT Broker" },
      { step: "04", title: "Defense Demo" },
    ],
    codeSnippet: {
      filename: "firmware_telemetry.ino",
      language: "C++ • ESP32 Arduino Core",
      code: `#include <WiFi.h>
#include <PubSubClient.h>

void enterDeepSleep(uint64_t sleepMinutes) {
    WiFi.disconnect(true);
    esp_sleep_enable_timer_wakeup(sleepMinutes * 60 * 1000000ULL);
    esp_deep_sleep_start();
}`
    },
    vivaQuestions: [
      {
        question: "How did you solve sensor reading fluctuations and voltage noise?",
        answer: "We added hardware low-pass decoupling capacitors (100µF electrolytic + 0.1µF ceramic) across power rails and applied software moving-average Kalman filters to raw analog ADC values.",
      },
      {
        question: "What happens during your viva if university WiFi disconnects?",
        answer: "Our firmware includes an automatic offline backup buffer stored in ESP32 SPIFFS flash and mirrors real-time sensor metrics directly onto an onboard I2C OLED display.",
      },
    ],
    artifacts: [
      { title: "Schematic & Gerber PCB Files", description: "EasyEDA / KiCAD production ready circuit schematics with component BOM.", icon: "⚡" },
      { title: "Embedded Firmware & Cloud Code", description: "Clean C++ firmware with secure MQTT telemetry and Grafana dashboard scripts.", icon: "📡" },
    ],
    content: {
      introduction: "Live hardware demos are notoriously prone to unexpected glitches during viva presentations. Here is how to make your microcontroller setup resilient, stable, and panel-ready.",
      sections: [
        {
          heading: "1. Power Supply & Common Grounding",
          body: [
            "More than 70% of hardware failures on viva day are caused by inadequate current delivery or missing common ground connections.",
            "Never power multiple servos, motors, or cellular modules directly from an Arduino 5V pin. Always use a dedicated external power supply with shared ground."
          ],
          tips: [
            "Always connect the GND of your external battery pack to your microcontroller GND.",
            "Use decoupling capacitors near high-draw sensor modules."
          ]
        },
        {
          heading: "2. Stable Cloud Telemetry & Offline Fallbacks",
          body: [
            "University WiFi networks often require portal logins that microcontrollers cannot easily authenticate. Always bring a mobile hotspot configured with known credentials.",
            "Implement local OLED / LCD display readouts so your hardware works visually even if the cloud dashboard temporarily drops."
          ],
          tips: [
            "Store WiFi credentials securely in non-volatile memory or config files.",
            "Implement automatic MQTT reconnect loops in your firmware code."
          ]
        }
      ],
      conclusion: "Treat your hardware prototype like a real product. Box it neatly in a clean 3D-printed or acrylic enclosure, label your wiring, and your presentation will stand out immediately."
    }
  },
  {
    slug: "how-to-write-academic-report-ieee-scopus-standards",
    title: "Writing Your Project Documentation: Structure, Citations & IEEE Standards",
    day: "20",
    month: "FEB",
    category: "Thesis & Research",
    subCategory: "Academic Documentation • IEEE Format",
    author: "Dr. Nazmul Haque",
    authorRole: "Academic Reviewer & Journal Editor",
    time: "8 min read",
    image: "doc.jpg",
    figureCaption: "Figure 1: Chapter layout and formal IEEE citation structure for university capstone submissions.",
    summary: "A foolproof chapter-by-chapter blueprint for your final university report. Learn how to format literature reviews, methodology diagrams, and avoid plagiarism issues.",
    tags: ["Academic Writing", "IEEE Formatting", "Literature Review", "Research Paper"],
    metrics: [
      { label: "TURNITIN SIMILARITY", value: "< 8%", subtext: "Safe below 15% threshold", color: "#10b981" },
      { label: "CITATIONS INCLUDED", value: "35+", subtext: "Recent IEEE & Scopus papers" },
      { label: "TOTAL CHAPTERS", value: "5 Chapters", subtext: "Standard academic thesis format" },
      { label: "FORMAT COMPLIANCE", value: "100%", subtext: "Strict IEEE guidelines", color: "#005f62" },
    ],
    specs: [
      { label: "Document Standard:", value: "IEEE Transactions / University Template" },
      { label: "Authoring Tool:", value: "LaTeX / Overleaf / MS Word" },
      { label: "Reference Manager:", value: "Mendeley / Zotero (BibTeX)" },
      { label: "Similarity Check:", value: "Turnitin Originality Verified", highlight: true },
      { label: "Target Outcome:", value: "Approved Thesis & Publication" },
    ],
    pipeline: [
      { step: "01", title: "Lit Review (Ch 2)" },
      { step: "02", title: "Methodology (Ch 3)", highlight: true },
      { step: "03", title: "Results (Ch 4)" },
      { step: "04", title: "Abstract & Intro" },
    ],
    vivaQuestions: [
      {
        question: "How did you conduct your literature review and ensure relevant paper selection?",
        answer: "We reviewed 35+ peer-reviewed papers from IEEE Xplore, ACM Digital Library, and Springer published between 2021-2025, tabulating key strengths and methodologies in a comparative matrix.",
      },
      {
        question: "What validation steps guarantee data integrity in your experimental results?",
        answer: "All experiments were repeated over 10 cross-validation trials, reporting mean values along with standard deviation error margins.",
      },
    ],
    artifacts: [
      { title: "Complete Thesis Template (Overleaf/Word)", description: "Pre-formatted LaTeX source files with bibliography styles and vector diagrams.", icon: "📚" },
      { title: "Turnitin Plagiarism Verification Report", description: "Official originality certificate verifying similarity below 10%.", icon: "✅" },
    ],
    content: {
      introduction: "Even great software will receive mediocre grades if the accompanying project report is unstructured and riddled with formatting mistakes. Here is the standard chapter structure supervisors expect.",
      sections: [
        {
          heading: "The Standard 5-Chapter Thesis Structure",
          body: [
            "Chapter 1: Introduction, Problem Statement, Objectives, and Scope.",
            "Chapter 2: Literature Review and Related Work Analysis.",
            "Chapter 3: Proposed Methodology, System Architecture & Design.",
            "Chapter 4: Implementation Details, Experimental Results & Analysis.",
            "Chapter 5: Conclusion, Limitations, and Future Roadmap."
          ],
          tips: [
            "Always write Chapter 1 and the Abstract last — after results are finalized.",
            "Every figure and table must be explicitly referenced in the body text."
          ]
        },
        {
          heading: "Avoiding Plagiarism & Clean Referencing",
          body: [
            "Paraphrase academic papers thoroughly in your own words. Use citation managers like Mendeley or Zotero to maintain flawless IEEE / APA bibliographic formatting.",
            "Ensure Turnitin similarity remains well below your university threshold (typically < 15%)."
          ],
          tips: [
            "Never copy text directly from Wikipedia or blog tutorials without proper scholarly attribution.",
            "Include high-resolution vector diagrams (SVG or 300 DPI exports) instead of blurry screenshots."
          ]
        }
      ],
      conclusion: "A polished report reflects dedication and rigor. Dedicate ample time to proofreading, and submit with pride."
    }
  },
  {
    slug: "how-to-choose-between-web-ai-iot-for-capstone",
    title: "Which Project Domain Should You Choose? Web, AI, IoT or Mobile",
    day: "14",
    month: "FEB",
    category: "Web & Software",
    subCategory: "Career Strategy • Project Selection",
    author: "Sadia Akter",
    authorRole: "Software Engineer & Career Advisor",
    time: "5 min read",
    image: "web.jpg",
    figureCaption: "Figure 1: Comparative matrix matching university capstone domains with industry career outcomes.",
    summary: "Confused about whether to build a full-stack SaaS, a deep learning research paper, or an IoT hardware prototype? Compare difficulty, timelines, and career benefits.",
    tags: ["Project Ideas", "Career Advice", "CSE", "IT Students"],
    metrics: [
      { label: "JOB CONVERSION", value: "88%", subtext: "Full-stack projects in interviews", color: "#10b981" },
      { label: "RESEARCH IMPACT", value: "High", subtext: "AI / ML paper publications" },
      { label: "HARDWARE EFFORT", value: "Moderate", subtext: "Requires component sourcing" },
      { label: "SUCCESS TIMELINE", value: "8-12 Weeks", subtext: "Guided project completion", color: "#005f62" },
    ],
    specs: [
      { label: "Target Audience:", value: "3rd & 4th Year Undergraduates" },
      { label: "Domains Evaluated:", value: "Web, AI/ML, IoT, Mobile, Thesis" },
      { label: "Key Deciding Factor:", value: "Group Skillset + Career Goal", highlight: true },
      { label: "Advisory Level:", value: "1-on-1 Mentorship Matching" },
      { label: "Batch Year:", value: "2026 Academic Season" },
    ],
    pipeline: [
      { step: "01", title: "Skill Audit" },
      { step: "02", title: "Domain Choice", highlight: true },
      { step: "03", title: "Proposal Approval" },
      { step: "04", title: "Project Sprint" },
    ],
    vivaQuestions: [
      {
        question: "How did your chosen capstone prepare you for real-world software engineering?",
        answer: "By implementing production CI/CD workflows, microservice architectures, and relational database normalization identical to modern enterprise environments.",
      },
      {
        question: "How did your team divide tasks effectively during the project?",
        answer: "We split responsibilities into frontend client interfaces, backend API logic, database schemas, and documentation testing with weekly sprint syncs.",
      },
    ],
    artifacts: [
      { title: "Project Domain Selection Matrix", description: "Comprehensive rubric comparing development effort, cost, and grading likelihood.", icon: "🧭" },
      { title: "Free 1-on-1 Mentor Consultation", description: "Direct WhatsApp session to evaluate your group's proposed project topic.", icon: "💬" },
    ],
    content: {
      introduction: "Your final year project serves as both your academic capstone and your primary portfolio piece for post-graduation job hunting. Here is how to choose the right track based on your skills and career ambitions.",
      sections: [
        {
          heading: "Option A: Full-Stack Web / Mobile Application",
          body: [
            "Best if you want to enter software engineering and frontend/backend roles immediately after graduation.",
            "Key focus: Clean code architecture, authentication, real-time sync, and production deployment on AWS/Vercel."
          ],
          tips: [
            "Pros: Highly visible in tech interviews; easier to demo live.",
            "Watch out for: Need to solve a real domain problem to satisfy academic criteria."
          ]
        },
        {
          heading: "Option B: AI & Deep Learning Research",
          body: [
            "Best if you plan to pursue higher studies (Master's/PhD abroad) or specialize as a Data Scientist / ML Engineer.",
            "Key focus: Novel dataset curation, hyperparameter tuning, model comparison, and academic paper publication."
          ],
          tips: [
            "Pros: Strong chance of IEEE/Scopus conference publications.",
            "Watch out for: High computational needs and risk of model underperformance."
          ]
        }
      ],
      conclusion: "Choose the domain that matches both your group's current technical strength and your future career goal. Balance ambition with realistic execution."
    }
  }
];
