export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What services does Bexon offer to clients?",
    answer: "Bexon offers a comprehensive range of services including full-stack web platforms, AI & deep learning systems, mobile & IoT solutions, data mining & analytics, thesis & research implementation, and technical documentation.",
  },
  {
    id: 2,
    question: "How do I get started with Corporate Business?",
    answer: "Getting started is simple. Contact us via our website or call us directly. We'll schedule a discovery call to understand your needs and propose a tailored solution.",
  },
  {
    id: 3,
    question: "How do you ensure the success of a project?",
    answer: "We follow a structured 3-phase process: Discovery & Planning, Execution & Delivery, and Review & Support. Each phase includes quality checks aligned with your goals and academic/industry standards.",
  },
  {
    id: 4,
    question: "How long will it take to complete my project?",
    answer: "Project timelines vary based on complexity and scope. After the discovery phase, we provide a detailed timeline. Most academic projects are completed within 2-8 weeks.",
  },
  {
    id: 5,
    question: "Can I track the progress of my project?",
    answer: "Yes! We provide regular progress updates and use collaborative tools so you can track milestones, review deliverables, and provide feedback throughout the entire development process.",
  },
];
