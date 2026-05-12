export interface FAQ {
  id: string;
  question: string;
  answer: string;
  purple: boolean;
}

export const faqs: FAQ[] = [
  {
    id: "01",
    question: "Who can participate in the hackathon?",
    answer: "Undergraduate, Graduate/Postgraduate, and PhD students currently enrolled in an Indian institution.",
    purple: false
  },
  {
    id: "02",
    question: "What should be the ideal team size?",
    answer: "Each team must consist of 3 to 4 members, possibly from different colleges/universities.",
    purple: true
  },
  {
    id: "03",
    question: "What is the cost of participating?",
    answer: "Participation is entirely free. No registration or submission fee is required.",
    purple: false
  },
  {
    id: "04",
    question: "Can a recent graduate participate?",
    answer: "Only current students from the 2024-25 academic year are eligible.",
    purple: true
  }
];