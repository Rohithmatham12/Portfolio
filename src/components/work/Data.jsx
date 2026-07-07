import Work1 from "../../assets/work1.png";
import Work5 from "../../assets/work5.png";
import ContextOSImg from "../../assets/contextos.png";
import TravelM8Img from "../../assets/travelm8.png";

export const projectsData = [
    {
      id: 1,
      image: ContextOSImg,
      title: "ContextOS",
      description: "Open-source context engine that scans repos and builds task-scoped context packs for Claude Code, Codex, Cursor, and Aider.",
      category: "ai",
      link: "https://github.com/Rohithmatham12/ContextOS",
    },

    {
      id: 2,
      image: TravelM8Img,
      title: "TravelM8",
      description: "AI-powered road trip copilot on AWS serverless + Neon Postgres, built entirely on free-tier APIs.",
      category: "ai",
      link: "https://github.com/Rohithmatham12/travelm8",
      live: "https://travelm8app.vercel.app",
    },
    {
      id: 3,
      icon: "bx bxl-slack",
      tileClass: "work_tile-3",
      title: "ContextBot for Slack",
      description: "Slack bot that surfaces repo context and answers engineering questions in-channel.",
      category: "ai",
      link: "https://github.com/Rohithmatham12/contextbot-slack",
    },
    {
      id: 4,
      image: Work1,
      title: "Stock Analyzer",
      description: "Java application for tracking and analyzing stock performance trends.",
      category: "web",
      link: "https://github.com/Rohithmatham12/StockAnalyzer",
    },
    {
      id: 5,
      image: Work5,
      title: "Object Detection",
      description: "Computer vision pipeline for real-time object detection and classification.",
      category: "ml",
      link: "https://github.com/Rohithmatham12/Object-Detection",
    },
  ];

  export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'ai',
    },
    {
        name: 'web',
    },
    {
        name: 'ml',
    },
  ];
