import { Experience, Project, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "Mosheur Rahman Wolied",
  title: "Backend & Blockchain Developer",
  location: "Dhaka, Bangladesh",
  email: "mosheur.r.wolied@gmail.com",
  phone: "01783796773",
  github: "https://github.com/rahmanwolied"
};

export const EDUCATION: Education = {
  institution: "BRAC University",
  degree: "BSc Computer Science and Engineering",
  location: "Dhaka, Bangladesh",
  period: "June 2021 - Expected: June 2025",
  gpa: "3.51"
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Alxicorn",
    role: "Backend & Blockchain Developer",
    location: "Chadderton, England (Remote)",
    period: "April 2025 - Present", // Note: Future date from prompt kept as is
    points: [
      "Contributed to the system design and architecture for a high-performance RPC node service.",
      "Co-designed a robust price aggregator service for both decentralized (DEX) and centralized (CEX) exchanges.",
      "Conducted R&D on various blockchain data providers to optimize data accuracy and reliability.",
      "Authored and deployed a DEX price aggregator smart contract in Solidity to perform on-chain price calculations."
    ]
  },
  {
    company: "Fameguild",
    role: "Fullstack Blockchain Developer",
    location: "Russia, Moscow (Remote)",
    period: "May 2024 - Feb 2025",
    points: [
      "Built and maintained scalable APIs in Next.js, ensuring high uptime and reliable communication between on-chain data and the dApp.",
      "Developed responsive, SaaS-style user interfaces with React, improving user experience for blockchain interactions.",
      "Integrated multiple EVM-based networks and Bitcoin protocols (Rootstock, Merlin, Ordinals) into a unified backend.",
      "Utilized Blockscout APIs to efficiently read and process on-chain transaction data for indexing and frontend display."
    ]
  },
  {
    company: "CrowdVC",
    role: "Freelance Fullstack dApp Developer",
    location: "Canada (Remote)",
    period: "June 2023 - Present",
    points: [
      "Led the end-to-end development of a full-stack dApp MVP, including system architecture, smart contract creation, and frontend integration."
    ]
  },
  {
    company: "Freelance",
    role: "Web & Mobile Developer",
    location: "Remote",
    period: "June 2023 - Present",
    points: [
      "Developed, tested, and audited secure NFT smart contracts on the Solana blockchain for client projects.",
      "Engineered automated cryptocurrency trading bots with user-friendly interfaces.",
      "Built and launched a comprehensive cricket score management mobile application using Flutter."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "Reliabuy",
    type: "Decentralised Ecommerce",
    tech: ["Next.js", "Hyperledger Fabric", "Hyperledger Aries", "TurboRepo"],
    description: "An ecommerce platform with a decentralised identity and trust framework. It uses Self Sovereign Identity (SSI) to handle user identity and offers a passwordless authentication flow.",
    link: "https://github.com/rahmanwolied/trustless-ecommerce"
  },
  {
    name: "Privacy Protected NFT Marketplace",
    type: "Blockchain",
    tech: ["Next.js", "Solidity", "Hardhat", "viem.js", "wagmi"],
    description: "Create and trade encrypted NFTs using AES-256-GCM for content encryption and Lit Protocol for custom access control.",
    link: "https://github.com/rahmanwolied/encrpyted-nft"
  },
  {
    name: "Shohoj Chat",
    type: "AI / LLM",
    tech: ["Huggingface", "Ollama", "Next.js", "LLM"],
    description: "An LLM aggregator where users can select from a variety of open-source models (via Huggingface and Ollama) and engage in conversation."
  },
  {
    name: "USIS 3.0",
    type: "Student Dashboard",
    tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    description: "All in one platform for the students of BRAC university, handling class schedule management, faculty reviews, CGPA calculation, social media, ETC.",
    link: "https://github.com/rahmanwolied/usis-3.0"
  },
  {
    name: "Advanced NFT Marketplace",
    type: "Bitcoin L2",
    tech: ["Typescript", "Solidity", "Next.js", "Bitcoin L2"],
    description: "Developed an advanced NFT marketplace on a Bitcoin L2 network as a Fullstack Blockchain Developer at FameGuild Limited."
  },
  {
    name: "Master DAO",
    type: "DAO",
    tech: ["Typescript", "Solidity", "ERC20", "Next.js"],
    description: "Contributed as a full-stack developer to build a Master DAO (Decentralized Autonomous Organization) platform."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "Rust", "Typescript", "Javascript", "Solidity", "Golang"]
  },
  {
    category: "Web / Mobile",
    skills: ["Next.js", "React/React Native", "Flutter", "Tailwind CSS", "shadcn/ui"]
  },
  {
    category: "Blockchain",
    skills: ["Foundry", "Hardhat", "Ethers.js", "Web3.js", "Viem.js", "Slither", "Wagmi", "Remix", "Truffle"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "AWS", "CRON", "Azure"]
  },
  {
    category: "Security",
    skills: ["Penetration Testing", "Cryptography", "TLS/SSL", "AES", "RSA", "OAuth 2.0"]
  },
  {
    category: "AI/ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn"]
  }
];

export const EXTRACURRICULAR = [
  {
    title: "Capture The Flag (BR4CU_D3SCR4Mb3R)",
    description: "Achieved high-ranking positions with my team in multiple cybersecurity competitions, including BUET CTF, IUT CTF, and RITSEC CTF."
  },
  {
    title: "Robotics",
    description: "Participated in multiple robotics competitions, designing and building autonomous robots for tasks such as line following and obstacle avoidance."
  }
];
