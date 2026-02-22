export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export interface Highlight {
  date: string;
  title: string;
  result: string;
  url?: string;
}

export const highlights: Highlight[] = [
  {
    date: "Feb 2026",
    title: "Nvidia × GPU MODE Kernels Competition",
    result: "Placed top 10.",
    url: "https://www.gpumode.com/leaderboard/730?tab=rankings",
  },
  {
    date: "Feb 2026",
    title: "CUTLASS Kernel Benchmarks",
    result: "Wrote kernels faster than CUTLASS for GEMV, DeepGEMM, and GroupGEMM on custom shapes.",
    url: "https://github.com/Naturalseeker22",
  },
  {
    date: "Oct 2025",
    title: "NeurIPS 2025 — Google Code Golf Championship",
    result: "Ranked #155 / 1,142 teams worldwide.",
    url: "https://www.kaggle.com/competitions/google-code-golf-2025/leaderboard",
  },
  {
    date: "Sep 2025",
    title: "Jane Street × GPU MODE Optimization Hackathon",
    result: "Placed top 10.",
    url: "https://www.gpumode.com/news/jane-street-hackathon",
  },
  {
    date: "Sep 2025",
    title: "ListenLabs Berghain Challenge",
    result: "Ranked #135 / 1,330 teams worldwide.",
    url: "https://berghain.challenges.listenlabs.ai/",
  },
  {
    date: "Jul 2025",
    title: "Jane Street Real-Time Market Data Forecasting",
    result: "Placed top 20% worldwide.",
    url: "https://www.kaggle.com/naturalseeker",
  },
  {
    date: "Nov 2024",
    title: "ARC Prize 2024",
    result: "Ranked #74 / 1,427 teams worldwide.",
    url: "https://www.kaggle.com/certification/competitions/naturalseeker/arc-prize-2024",
  },
  {
    date: "Jun 2024",
    title: "AI Mathematical Olympiad",
    result: "Ranked #65 / 1,161 teams worldwide (Progress Prize 1, XTX Markets).",
    url: "https://www.kaggle.com/certification/competitions/naturalseeker/ai-mathematical-olympiad-prize",
  },
  {
    date: "Apr 2024",
    title: "LLM Prompt Recovery Challenge",
    result: "Placed top 10%.",
    url: "https://www.kaggle.com/naturalseeker",
  },
  {
    date: "2021–now",
    title: "Kaggle Competitions Expert",
    result: "Ranked #997 / 200k worldwide, 5× Bronze Medals.",
    url: "https://www.kaggle.com/naturalseeker",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "gpu-mode-kernels-top-10",
    title: "Top 10 in Nvidia x GPU_MODE: My Approach to the Kernel Competition",
    date: "2026-02-21",
    excerpt: "Coming soon.",
    tags: ["GPU", "CUDA", "Kernels"],
    content: `Coming soon.`
  },
];
