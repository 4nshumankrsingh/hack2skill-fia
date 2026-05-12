export interface TimelineEvent {
  title: string;
  date: string;
  active: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    title: "Registrations and Idea Submission Open",
    date: "Thu, Jul 04, 2025",
    active: true
  },
  {
    title: "Introductory and Problem Statement Explainer Session",
    date: "Thu, Jul 08, 2025",
    active: false
  },
  {
    title: "Mentor-Mentee Connects - Begins",
    date: "Thu, Jul 08, 2025",
    active: false
  },
  {
    title: "Mentor-Mentee Connects - Ends",
    date: "Tue, Jul 16, 2025",
    active: false
  },
  {
    title: "Final Project Submission",
    date: "Fri, Jul 25, 2025",
    active: false
  },
  {
    title: "Results Declaration",
    date: "Wed, Jul 30, 2025",
    active: false
  }
];