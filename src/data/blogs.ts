export interface BlogSection {
  heading: string;
  body: string[]; // paragraphs
  tips?: string[]; // bullet tips / takeaways
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
  summary: string;
  featured?: boolean;
  featuredBadges?: { text: string; bg: string; color: string }[];
  metrics?: { label: string; value: string; color?: string }[];
  tags: string[];
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
    author: "Engr. Tanvir Ahmed",
    authorRole: "Senior Academic Mentor",
    time: "8 min read",
    image: "916be.png",
    featured: true,
    summary: "A practical guide to acing your university final year project defense. Master how to explain your architecture, justify technical decisions, and answer tough panel inquiries.",
    tags: ["Viva Defense", "Final Year Project", "CSE", "University Thesis"],
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
            "One of the most frequent traps is explaining *what* you used without being able to defend *why* you used it over alternatives.",
            "If you built with React, PostgreSQL, or FastAPI, be prepared to justify database indexing, state management choices, or latency considerations."
          ],
          tips: [
            "Prepare for: 'Why did you choose SQL over NoSQL for this data model?'",
            "Memorize your high-level system architecture diagram so you can draw or explain it on the whiteboard.",
            "Know your API flow from client request to database response."
          ]
        },
        {
          heading: "3. Handling Edge Cases, Limitations & Future Work",
          body: [
            "Panels love asking what happens when unexpected data or heavy traffic hits your application. Acknowledging your project's constraints honestly demonstrates maturity as an engineer.",
            "Never pretend your system has zero bugs or infinite scalability. Instead, present your planned roadmap and known edge cases."
          ],
          tips: [
            "Be prepared for: 'How does your model handle biased or noisy input data?'",
            "Prepare a crisp slide on 'Limitations and Future Enhancements'.",
            "Stay calm if you don't know an answer — say 'That is a valuable suggestion that we plan to benchmark in our future roadmap'."
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
    author: "Rafiul Islam",
    authorRole: "CSE Alumnus & Tech Lead",
    time: "7 min read",
    image: "51bd3.png",
    summary: "From selecting an approved topic to writing proper documentation and creating a clean MVP. Everything university students need to know to complete their project on time.",
    tags: ["CSE Projects", "Web Development", "Software Engineering", "Capstone"],
    content: {
      introduction: "Starting your final year capstone project without a clear roadmap leads to panic two weeks before submission. Breaking your project into four structured milestones makes execution smooth and stress-free.",
      sections: [
        {
          heading: "Milestone 1: Topic Selection & Feasibility Verification",
          body: [
            "Pick a topic with realistic scope. Many students make the mistake of attempting to build another full social network or autonomous car in 4 months.",
            "Make sure your dataset or hardware components are easily accessible in Bangladesh before confirming the proposal with your supervisor."
          ],
          tips: [
            "Check 3-5 recently published IEEE or university papers for inspiration.",
            "Get written topic approval from your supervisor before writing a single line of code."
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
        },
        {
          heading: "Milestone 3: Documentation That Meets Academic Standards",
          body: [
            "Your report counts for up to 50% of the total project grade. Include clear UML diagrams, ER diagrams, test matrices, and referenced citations."
          ],
          tips: [
            "Use LaTeX or university-approved Word templates with IEEE referencing.",
            "Keep daily logs of system tests and supervisor meeting notes."
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
    author: "Tahsin Kabir",
    authorRole: "ML Researcher",
    time: "9 min read",
    image: "87b36.png",
    summary: "A practical guide on dataset preparation, transfer learning models, training metrics, and how to present benchmark graphs that satisfy your thesis panel.",
    tags: ["Machine Learning", "Deep Learning", "Python", "Thesis Project"],
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
    author: "Fahim Hasan",
    authorRole: "Embedded Systems Engineer",
    time: "6 min read",
    image: "3c623.png",
    summary: "Common hardware mistakes in student IoT projects — from voltage regulator overheating to MQTT broker connection drops — and how to fix them before live demo day.",
    tags: ["IoT", "ESP32", "Arduino", "Embedded Systems", "Hardware"],
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
            "Use decoupling capacitors (100uF + 0.1uF) near high-draw sensor modules."
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
    author: "Dr. Nazmul Haque",
    authorRole: "Academic Reviewer",
    time: "8 min read",
    image: "fb137.png",
    summary: "A foolproof chapter-by-chapter blueprint for your final university report. Learn how to format literature reviews, methodology diagrams, and avoid plagiarism issues.",
    tags: ["Academic Writing", "IEEE Formatting", "Literature Review", "Research Paper"],
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
    author: "Sadia Akter",
    authorRole: "Software Engineer",
    time: "5 min read",
    image: "916be.png",
    summary: "Confused about whether to build a full-stack SaaS, a deep learning research paper, or an IoT hardware prototype? Compare difficulty, timelines, and career benefits.",
    tags: ["Project Ideas", "Career Advice", "CSE", "IT Students"],
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
