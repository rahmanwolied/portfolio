import { Experience, Project, SkillCategory, Education } from './types';

export const PERSONAL_INFO = {
  name: "Mosheur Rahman Wolied",
  title: "Blockchain & Full-stack Engineer",
  location: "Dhaka, Bangladesh",
  email: "mosheur.r.wolied@gmail.com",
  phone: "01783796773",
  github: "https://github.com/rahmanwolied",
  linkedin: "https://www.linkedin.com/in/rahmanwolied",
  summary: "Full-stack engineer shipping blockchain protocol infrastructure, oracle systems, production web apps and LLM-integrated automation. From Layer 1 consensus in Golang and Solidity contracts to indexing pipelines and the frontend on top."
};

export const STATS = [
  { value: "3+", label: "Years Exp" },
  { value: "50+", label: "Exchanges Aggregated" },
  { value: "5", label: "Networks Unified" },
  { value: "2×", label: "CTO Roles" }
];

export const CORE_STACK = [
  "Solidity", "Golang", "TypeScript", "Rust", "Python",
  "Next.js", "React", "Chainlink", "Foundry", "Hardhat",
  "Node.js", "Docker", "Claude Code", "MCP"
];

export const EDUCATION: Education = {
  institution: "BRAC University",
  degree: "BSc Computer Science and Engineering",
  location: "Dhaka, Bangladesh",
  period: "June 2021 - June 2025",
  gpa: "3.51"
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Chainomation Limited",
    role: "Chief Technology Officer",
    location: "Dhaka, Bangladesh",
    period: "2026 - Present",
    points: [
      "Leading technical direction for oracle, interoperability and digital trust infrastructure built on Chainlink for enterprise clients.",
      "Designing Chainlink integrations across Proof of Reserve, Data Feeds, Functions and Automation, the connective layer between existing systems and blockchain networks.",
      "Building workflow-based oracle automation on the Chainlink Runtime Environment (CRE)."
    ]
  },
  {
    company: "Interlink",
    role: "Chief Technology Officer",
    location: "Dhaka, Bangladesh",
    period: "2026 - Present",
    points: [
      "Own the technical direction of a Dhaka studio building websites, order and delivery systems, dashboards and AI automations for local businesses.",
      "Decide what gets built and how: architecture, stack, and the structure of client engagements.",
      "Lead the engineering team and ship with agentic coding workflows."
    ]
  },
  {
    company: "Rainbow Themes",
    role: "Blockchain Engineer",
    location: "Mirpur, Dhaka",
    period: "Nov 2025 - Present",
    points: [
      "Architecting a novel Layer 1 consensus layer in Golang: validator client, full node, P2P networking, block production and state management.",
      "Built a scalable blockchain indexer end-to-end: backend indexing pipeline, dApp frontend, and full-stack integration.",
      "Researching decentralized on-chain AI inference; building prototypes to evaluate feasibility and performance.",
      "Delivering protocol infrastructure for a US-based client in a two-person team."
    ]
  },
  {
    company: "Alxicorn",
    role: "Backend & Blockchain Developer",
    location: "Chadderton, England (Remote)",
    period: "April 2025 - Oct 2025",
    points: [
      "Contributed to system design for a high-performance RPC node service and a price aggregator ingesting feeds from 50+ centralized and decentralized exchanges.",
      "Conducted R&D on blockchain data providers to optimize data accuracy, latency and reliability across the ingestion pipeline.",
      "Authored and deployed a Solidity DEX price aggregator smart contract for on-chain price calculations."
    ]
  },
  {
    company: "Fameguild",
    role: "Fullstack Blockchain Developer",
    location: "Moscow, Russia (Remote)",
    period: "May 2024 - Feb 2025",
    points: [
      "Built scalable Next.js APIs unifying 5 networks (Rootstock, Merlin, BOB, Stacks and others) into a single backend for cross-chain interoperability.",
      "Engineered an NFT marketplace on Bitcoin L2 with listing, trading and auction flows; built a Master DAO platform with proposal creation and on-chain voting.",
      "Architected an NFT launchpad supporting ERC-721 and ERC-1155 (minting, whitelist, reveal); indexed transactions via Blockscout APIs."
    ]
  },
  {
    company: "CrowdVC",
    role: "Freelance Fullstack dApp Developer",
    location: "Remote",
    period: "2024",
    points: [
      "Led end-to-end MVP delivery of a decentralized crowdfunding platform, owning system architecture, smart contract authoring and frontend integration."
    ]
  },
  {
    company: "Freelance",
    role: "Web, Mobile & Smart Contract Developer",
    location: "Remote",
    period: "June 2023 - April 2025",
    points: [
      "Developed, tested and audited secure NFT smart contracts on Solana for 3 client projects.",
      "Engineered automated cryptocurrency trading bots with user-friendly interfaces.",
      "Built and launched a cross-platform cricket score management app in Flutter with live scoring and match management."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    name: "RWA Tokenization Platform",
    type: "Chainlink / RWA",
    tech: ["Solidity", "Proof of Reserve", "Data Feeds", "Functions", "Automation"],
    description: "Real-estate tokenization platform integrating four Chainlink services: Proof of Reserve to verify backing, Data Feeds for valuations, Functions for custom off-chain data, and Automation for scheduled execution."
  },
  {
    name: "Reliabuy",
    type: "Decentralised Ecommerce",
    tech: ["Next.js", "Hyperledger Fabric", "Hyperledger Aries", "TurboRepo"],
    description: "Privacy-first ecommerce platform using Self Sovereign Identity (SSI) for passwordless authentication and private Hyperledger ledgers for tamper-proof transaction records.",
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
    tech: ["Next.js", "Hugging Face", "Ollama", "Python", "LLM"],
    description: "LLM aggregator with multi-model selection across Hugging Face and Ollama-hosted open-source models, a unified chat interface and configurable inference backends."
  },
  {
    name: "USIS 3.0",
    type: "Student Dashboard",
    tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    description: "All-in-one platform for BRAC University students with class scheduling, faculty reviews, CGPA calculation and social features.",
    link: "https://github.com/rahmanwolied/usis-3.0"
  },
  {
    name: "Advanced NFT Marketplace",
    type: "Bitcoin L2",
    tech: ["TypeScript", "Solidity", "Next.js", "Bitcoin L2"],
    description: "NFT marketplace on a Bitcoin L2 network with listing, trading and auction flows, built at Fameguild."
  },
  {
    name: "Master DAO",
    type: "DAO",
    tech: ["TypeScript", "Solidity", "ERC20", "Next.js"],
    description: "DAO platform with proposal creation and on-chain voting, built as a full-stack developer at Fameguild."
  },
  {
    name: "NFT Launchpad",
    type: "NFT Infrastructure",
    tech: ["Solidity", "ERC-721", "ERC-1155", "Blockscout"],
    description: "Launchpad supporting ERC-721 and ERC-1155 collections with minting, whitelist and reveal flows, indexed through Blockscout APIs."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Golang", "Rust", "Solidity"]
  },
  {
    category: "Smart Contracts",
    skills: ["Foundry", "Hardhat", "Slither", "Remix", "Viem.js", "Wagmi", "Ethers.js", "Web3.js"]
  },
  {
    category: "Oracles & Protocols",
    skills: ["Chainlink CRE", "CCIP", "Proof of Reserve", "Data Feeds", "P2P Networking", "BFT", "PoS", "L1/L2"]
  },
  {
    category: "Chains",
    skills: ["EVM", "Rootstock", "Merlin", "BOB", "Stacks", "Solana"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["Next.js", "React", "React Native", "Flutter", "Tailwind CSS", "shadcn/ui"]
  },
  {
    category: "Backend & DevOps",
    skills: ["Node.js", "REST APIs", "Hyperledger Fabric", "Blockscout", "Docker", "AWS", "Azure", "Linux", "CI/CD"]
  },
  {
    category: "AI & Agents",
    skills: ["Claude Code", "Cursor", "Codex", "MCP", "PyTorch", "TensorFlow", "Hugging Face", "Ollama"]
  },
  {
    category: "Security",
    skills: ["TLS/SSL", "AES", "RSA", "HMAC", "JWT", "OAuth 2.0", "Penetration Testing"]
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
