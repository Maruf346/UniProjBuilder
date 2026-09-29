export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Is this budget-friendly for university students?",
    answer: "Yes, 100%! We know student budgets are tight, so our pricing is specially customized for university projects and group assignments. You get high-quality project support without burning a hole in your pocket.",
  },
  {
    id: 2,
    question: "What kind of student projects do you build?",
    answer: "We cover CSE, EEE, Software Engineering, Business, and IT projects. This includes Full-Stack Web & Mobile Apps, AI/ML models, IoT & Hardware setups, Data Analysis, and Thesis research documentation.",
  },
  {
    id: 3,
    question: "Will you explain the project so I can defend my viva?",
    answer: "Absolutely! We don't just hand over code or files. We break down the whole project step-by-step and provide viva/defense preparation so you can answer your supervisor's questions with full confidence.",
  },
  {
    id: 4,
    question: "Can you handle tight deadlines or urgent submissions?",
    answer: "Yes, we handle urgent requests regularly! Whether your submission is due in a few days or weeks, let us know your deadline and we'll plan a fast-track delivery schedule for you.",
  },
  {
    id: 5,
    question: "What if my supervisor asks for revisions or changes?",
    answer: "No worries at all. We support you through feedback loops and supervisor revisions until your final submission is approved.",
  },
];
