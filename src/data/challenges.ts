export interface Challenge {
  id: string;
  title: string;
  img: string;
  desc: string;
}

export const challenges: Challenge[] = [
  {
    id: "01",
    title: "Smart Traffic Management",
    img: "/challenges/CHALLENGE1.jpg",
    desc: "Develop an AI-driven solution to dynamically control traffic signals based on live camera feeds and vehicle density."
  },
  {
    id: "02",
    title: "Healthcare Companion",
    img: "/challenges/CHALLENGE2.jpg",
    desc: "Create a web or mobile application that integrates wearable data to provide health insights and medication reminders."
  },
  {
    id: "03",
    title: "Legal Contract Summarizer",
    img: "/challenges/CHALLENGE3.jpg",
    desc: "Build an NLP-based tool to scan long legal contracts and output simplified summaries with key clauses and deadlines."
  },
  {
    id: "04",
    title: "Flood Risk Predictor",
    img: "/challenges/CHALLENGE4.jpg",
    desc: "Design a predictive model using remote sensing data and live hydrology feeds to forecast and alert flood risks in urban zones."
  },
  {
    id: "05",
    title: "Digital Certificate Verifier",
    img: "/challenges/CHALLENGE5.jpg",
    desc: "Create a decentralized platform that allows institutions to issue and verify digital certificates securely."
  },
  {
    id: "06",
    title: "Immersive Campus Tour",
    img: "/challenges/CHALLENGE6.jpg",
    desc: "Design a prototype that enables prospective students to explore university campuses remotely with immersive visuals."
  },
  {
    id: "07",
    title: "Smart Waste Classifier",
    img: "/challenges/CHALLENGE7.jpg",
    desc: "Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed."
  },
  {
    id: "08",
    title: "Emergency Communication App",
    img: "/challenges/CHALLENGE8.jpg",
    desc: "Develop a communication app that uses peer-to-peer protocols or SMS fallback to function in areas with limited internet."
  },
  {
    id: "09",
    title: "ISL Gesture Translator",
    img: "/challenges/CHALLENGE9.jpg",
    desc: "Build an AI-driven app that uses computer vision to translate ISL gestures into text and speech in multiple Indian languages."
  },
  {
    id: "10",
    title: "Mental Health Assistant",
    img: "/challenges/CHALLENGE10.jpg",
    desc: "Design a conversational assistant trained to provide mental health first aid and connect users to professionals during crises."
  },
  {
    id: "11",
    title: "Crop Disease Detector",
    img: "/challenges/CHALLENGE11.jpg",
    desc: "Build a pipeline that processes aerial imagery to detect crop disease and recommend corrective actions."
  },
  {
    id: "12",
    title: "Visually Impaired Assistant",
    img: "/challenges/CHALLENGE12.jpg",
    desc: "Create a mobile assistant that helps visually impaired users navigate unfamiliar environments using spatial audio cues."
  }
];