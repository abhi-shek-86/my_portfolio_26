// All content lives here. Edit this file to update the site.
// Details were transcribed from a screenshot: please verify dates, URLs and phone number.

export const PROFILE = {
  name: 'Abhishek Vasamsetti',
  firstName: 'Abhishek',
  lastName: 'Vasamsetti',
  short: 'Abhishek',
  logo: 'ABHISHEK',
  role: 'Software Engineer',
  company: 'Algonox',
  department: 'Engineering',
  since: 'Jul 2025',
  avatar: '/Abhishek_passport_image.jpg',
  techStack: ['Microsoft Fabric', 'LLMs', 'Document Extraction', 'PySpark', 'SQL', 'Delta Lake', 'Power BI'],
  email: 'vasamsettiabhi86@gmail.com',
  phone: '+91 9133804129',
  resume: '/resume.pdf', // put your file at public/resume.pdf
  summary:
    'Data Engineer at Algonox, building scalable ELT pipelines and incremental data loads on Microsoft Fabric with PySpark, SQL, and Python. I bring SAP ECC and SBO data into a Delta Lake lakehouse and deliver analytics-ready gold-layer data to Power BI.',
}

// Leave a URL empty ('') to hide that icon.
export const SOCIALS = {
  linkedin: 'https://www.linkedin.com/in/abhi1325/',
  github: 'https://github.com/abhi-shek-86',
  whatsapp: 'https://wa.me/919133804129',
  instagram: '',
  facebook: '',
}

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const ABOUT = [
  "I'm Abhishek Vasamsetti, a Software Engineer at Algonox working actively across Data Engineering and modern AI/LLM solutions. I specialize in building scalable ELT pipelines and incremental data loading architectures on Microsoft Fabric with PySpark, SQL, and Python.",
  'My work focuses on ingesting high-volume ERP data from SAP ECC and SAP Business One (SBO) into a unified Delta Lake lakehouse, modeling it through structured medallion architecture layers (Bronze ➔ Silver ➔ Gold), and serving analytics-ready datasets directly to Power BI.',
  'Additionally, I develop mission-critical enterprise integrations including Microsoft Fabric to CCH Tagetik, and engineer AI-driven Document Extraction solutions leveraging Large Language Models (LLMs) to automatically parse and structure complex enterprise documents.',
]

export interface TimelineItem {
  title: string
  org: string
  place: string
  period: string
  body: string
  tags?: string[]
}

export const EDUCATION: TimelineItem[] = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    org: 'KIET',
    place: 'Kakinada, Andhra Pradesh',
    period: '2021 – 2025',
    body: 'B.Tech in Computer Science and Engineering with AI specialization. Focused on machine learning, full-stack development, and software engineering principles.',
  },
  {
    title: 'Higher Secondary Education (M.P.C)',
    org: 'Narayana Junior College',
    place: 'Ramachandrapuram, Andhra Pradesh',
    period: '2019 – 2021',
    body: 'Completed intermediate education specializing in Mathematics, Physics, and Chemistry at Narayana Junior College.',
  },
  {
    title: 'Secondary Education (S.S.C)',
    org: 'CAMP School',
    place: 'Ramachandrapuram, Andhra Pradesh',
    period: '2019',
    body: 'Completed secondary education at CAMP School in 2019.',
  },
]

export const EXPERIENCE: TimelineItem[] = [
  {
    title: 'Software Engineer',
    org: 'Algonox',
    place: 'Hyderabad, India',
    period: 'Jul 2025 – Present',
    body: 'Software Engineer at Algonox, working as a Data Engineer to build Microsoft Fabric pipelines that stage data daily and load it into lakehouses through incremental loads, delivering gold-layer data to Power BI developers. I’m currently working on pulling data directly from CCH Tagetik. Alongside this, I work as a Python developer on document extraction, pulling data from stock statements and insurance documents, and I’m currently fine-tuning LLMs to improve extraction quality.',
    tags: ['LLM Document Extraction', 'Microsoft Fabric', 'PySpark', 'SQL', 'Delta Lake', 'Python', 'SAP Ingestion', 'CCH Tagetik'],
  },
]

export interface SkillItem {
  name: string
  category: 'Lakehouse & Cloud' | 'Programming & Querying' | 'Big Data & Processing' | 'Architecture & Warehousing' | 'DevOps & Collaboration'
  tag: string
  desc: string
}

export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Microsoft Fabric',
    category: 'Lakehouse & Cloud',
    tag: 'OneLake Platform',
    desc: 'Unified SaaS data lakehouse, Delta tables, and end-to-end data pipelines.',
  },
  {
    name: 'SQL',
    category: 'Programming & Querying',
    tag: 'Querying & Modeling',
    desc: 'Complex analytical queries, relational modeling, performance tuning, and aggregations.',
  },
  {
    name: 'Python',
    category: 'Programming & Querying',
    tag: 'Data Engineering',
    desc: 'Data transformation, automation scripts, API integrations, and ETL logic.',
  },
  {
    name: 'PySpark',
    category: 'Big Data & Processing',
    tag: 'Distributed Processing',
    desc: 'Large-scale distributed data transformations, incremental loads, and DataFrame APIs.',
  },
  {
    name: 'Apache Spark',
    category: 'Big Data & Processing',
    tag: 'In-Memory Compute',
    desc: 'High-throughput cluster computing, batch processing, and lakehouse execution.',
  },
  {
    name: 'Azure Data Factory (ADF)',
    category: 'Lakehouse & Cloud',
    tag: 'Orchestration & ETL',
    desc: 'Automated data pipelines, copy activities, triggers, and enterprise orchestration.',
  },
  {
    name: 'Azure Data Lake Storage Gen2 (ADLS Gen2)',
    category: 'Lakehouse & Cloud',
    tag: 'Cloud Storage',
    desc: 'Hierarchical namespace storage, secure data persistence, and lakehouse storage.',
  },
  {
    name: 'Delta Lake',
    category: 'Lakehouse & Cloud',
    tag: 'ACID Storage Layer',
    desc: 'Medallion architecture (Bronze, Silver, Gold), time travel, and schema enforcement.',
  },
  {
    name: 'Git',
    category: 'DevOps & Collaboration',
    tag: 'Version Control',
    desc: 'Distributed code versioning, branch management, merge workflows, and tracking.',
  },
  {
    name: 'GitHub',
    category: 'DevOps & Collaboration',
    tag: 'Source Control & CI',
    desc: 'Repository management, pull requests, automated actions, and team collaboration.',
  },
  {
    name: 'Azure DevOps',
    category: 'DevOps & Collaboration',
    tag: 'CI/CD & Boards',
    desc: 'Continuous delivery pipelines, sprint boards, automated deployments, and release workflows.',
  },
  {
    name: 'ETL/ELT & Data Warehousing',
    category: 'Architecture & Warehousing',
    tag: 'Enterprise Pipelines',
    desc: 'High-volume data pipelines, incremental loading patterns, and modern data warehouses.',
  },
]

export const SKILL_CATEGORIES = [
  'All',
  'Lakehouse & Cloud',
  'Programming & Querying',
  'Big Data & Processing',
  'Architecture & Warehousing',
  'DevOps & Collaboration',
] as const

export const SKILLS: Record<string, string[]> = {
  'Lakehouse & Cloud': ['Microsoft Fabric', 'Delta Lake', 'Azure Data Factory (ADF)', 'Azure Data Lake Storage Gen2 (ADLS Gen2)'],
  'Programming & Querying': ['SQL', 'Python'],
  'Big Data & Processing': ['PySpark', 'Apache Spark'],
  'Architecture & Warehousing': ['ETL/ELT & Data Warehousing'],
  'DevOps & Collaboration': ['Git', 'GitHub', 'Azure DevOps'],
}

export const CERTIFICATIONS = [
  {
    title: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
    issuer: 'Microsoft',
    date: 'August 2025',
    description:
      'Gained hands-on knowledge of Microsoft Fabric, including data ingestion and transformation, Lakehouse architecture, Apache Spark, Data Pipelines, Delta Lake, and implementing end-to-end data engineering solutions.',
    url: '/Microsoft Data Engineer Cerificate.pdf',
    badge: '/Microsoft_badge.png',
  },
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'August 2025',
    description:
      'Demonstrates foundational expertise in architecting and developing autonomous AI agents using LangChain, OpenAI Agents SDK, and Model Context Protocol (MCP). Validates practical skills in enterprise agentic workflows with OCI AI Agents and Oracle Database.',
    url: '/Oracle AI.pdf',
    badge: '/oracle_foundations_badge.webp',
  },
]

export interface Project {
  title: string
  category: string
  description: string
  tags: string[]
  featured?: boolean
  live?: string // leave empty to hide the Live button
  code?: string
  image?: string // optional screenshot path, e.g. '/projects/notes.png'
}

export const PROJECTS: Project[] = [
  {
    title: 'Language Translator',
    category: 'Machine Learning',
    description: 'A web platform that translates text between languages, ensuring accurate and efficient communication.',
    tags: ['Python', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/abhi-shek-86/T20-86',
    image: '/Language_Translator.png',
  },
  {
    title: 'Money Expense Calculator',
    category: 'Web Development',
    description: 'Developed a Money Expenses Calculator using HTML, CSS, JavaScript, and Firebase for data storage. Enabled users to track expenses with a clean, responsive interface and real-time updates.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    code: 'https://github.com/abhi-shek-86/Expenses_Tracker',
    live: 'https://expenses-tracker-wine-omega.vercel.app/',
    image: '/money_expenses.png',
  },
  {
    title: 'Real Time Chat Application',
    category: 'Web Development',
    description: 'Built a realtime chat application using HTML, CSS, JavaScript, and Firebase, enabling instant messaging with user authentication. Focused on responsive design and smooth user interactions.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    code: 'https://github.com/abhi-shek-86/Real_Time_Chat_Appliaction',
    live: 'https://abhi-shek-86.github.io/Real_Time_Chat_Appliaction/realtimeChatApp/public/',
    image: '/Real_time_chat_application.png',
  },
  {
    title: 'Uber Clone',
    category: 'Full Stack',
    description: 'A web platform that seamlessly connects passengers with drivers, ensuring a smooth, reliable, and efficient ride-booking experience with minimal effort and maximum convenience.',
    tags: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    code: 'https://github.com/abhi-shek-86/uber_clone',
    image: '/uber_clone.png',
  },
]

export const AVAILABILITY = ['Data Engineering', 'Full-time', 'Remote', 'Hybrid']
