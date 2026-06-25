export const LINKS = ["About", "Experience", "Skills", "Education", "Contact"];

export const TABCOLORS = ["var(--danger)", "var(--warning)", "var(--success)"];

export const BOOTLINES = [
  { text: "$ initializing portfolio v2026.1.0", delay: 0 },
  { text: "→ loading engineer profile...", delay: 300 },
  { text: "→ parsing 7 years of experience", delay: 600 },
  { text: "→ compiling React ✓", delay: 900 },
  { text: "→ compiling React Native (iOS + Android) ✓", delay: 1150 },
  { text: "→ compiling Node.js, PostgreSQL ✓", delay: 1400 },
  { text: "→ injecting MBA business acumen ✓", delay: 1650 },
  { text: "→ bundling leadership modules...", delay: 1900 },
  { text: "✓ build successful (0 errors, 0 warnings)", delay: 2200 },
  { text: "$ launching aditiacharya.dev", delay: 2500 },
];

export const CODESNIPPETS = `// Aditi Acharya — Senior Software Engineer
// 7+ years · React · React Native · Rails · Node.js ·
const engineer = {
  name: "Aditi Acharya",
  role: "Senior Software Engineer",
  platforms: ["Web", "iOS", "Android"],
  stack: [ "ReactJS", "React Native", "Ruby on Rails", "Node.js"],
  db: ["PostgreSQL", "MySQL", "Redis"],
  cloud: ["AWS S3", "GitHub Actions", "Firebase"],
  superpower: "ships products end-to-end",
};`;

export const CODEEDITORBOTTOMINFO = [
  "TypeScript",
  "UTF-8",
  "Ln 14, Col 1",
  "✓ 0 errors",
];

export const STATS = [
  { v: "7+", l: "Years" },
  { v: "Web+iOS+Android", l: "Platforms" },
  { v: "MBA+BSc", l: "Degrees" },
];

export const COMMITS = [
  {
    hash: "f8a3c21",
    date: "Mar 2023 – Present",
    company: "Fetchly",
    title: "Software Engineer",
    tag: "HEAD",
    color: "#c8f542",
    stack: [
      "React Native",
      "Rails Hotwire",
      "Sanity",
      "Typesense",
      "TailwindCSS",
      "CI/CD",
    ],

    items: [
      "feat: built React Native app from scratch for iOS + Android with full release lifecycle ownership",
      "ci: designed CI/CD pipelines for mobile + admin systems ensuring automated build/test/release flows",
      "feat: integrated Sanity CMS enabling non-dev content management without app redeploys",
      "feat: implemented Typesense search for typo-tolerant and fast in-app discovery",
      "feat: built Rails Hotwire + Stimulus admin panel for content management automation",
      "ui: developed responsive UI using TailwindCSS + maintained legacy ReactJS/Azure system",
      "feat: built Vue.js modules with reusable components + third-party API integrations",
    ],
  },

  {
    hash: "c91b772",
    date: "Dec 2022 – Mar 2023",
    company: "Gurzu",
    title: "Senior Software Engineer",
    color: "#7dc4f5",
    stack: [
      "ReactJS",
      "Storybook",
      "GitHub Actions",
      "CircleCI",
      "Agile",
      "Mentoring",
    ],

    items: [
      "lead: supervised engineering team ensuring sprint alignment and delivery ownership",
      "ci: migrated CI/CD from CircleCI → GitHub Actions reducing maintenance overhead",
      "feat: built Storybook design system improving frontend reusability and consistency",
      "feat: implemented infinite scrolling improving user engagement metrics",
      "mentor: guided junior engineers and owned frontend architecture decisions",
    ],
  },

  {
    hash: "a11d4f0",
    date: "Jul 2020 – Dec 2022",
    company: "Gurzu",
    title: "Software Engineer",
    color: "#cf8aff",
    stack: ["Node.js", "PostgreSQL", "AWS S3", "JWT", "Redis", "Firebase"],

    items: [
      "feat: led full-stack mobile app development including architecture and DB design",
      "api: built RESTful APIs and standardised response payloads reducing integration issues",
      "infra: configured AWS S3 multi-env uploads with secure authentication using JWT + Passport",
      "feat: implemented Firebase Cloud Messaging push notifications",
      "perf: used Redis for OTP + auth token storage improving security and performance",
      "collab: worked with PM in bi-weekly client meetings to align requirements and delivery",
    ],
  },

  {
    hash: "d32f901",
    date: "Jun 2019 – Jul 2020",
    company: "Gurzu",
    title: "Associate Software Engineer",
    color: "#f5a623",
    stack: ["ReactJS", "CSS", "Agile", "Performance Optimization"],

    items: [
      "feat: built responsive video editor with timeline and live preview using ReactJS",
      "process: introduced Scrum/Agile practices improving sprint planning visibility",
      "perf: reduced redundant API calls improving frontend performance",
    ],
  },

  {
    hash: "b77c210",
    date: "Oct 2018 – Dec 2018",
    company: "Truemark Technology",
    title: "Software Engineer Intern",
    color: "#ff7b7b",
    stack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],

    items: [
      "feat: built web-based game using HTML, CSS, and vanilla JavaScript",
      "feat: implemented social authentication using React + Node.js REST APIs",
      "learn: strengthened core JavaScript fundamentals through hands-on development",
    ],
  },
];

export const TYPECOLORS: Record<string, string> = {
  feat: "#c8f542",
  fix: "#ff7b7b",
  ci: "#7dc4f5",
  chore: "#f5a623",
  docs: "#cf8aff",
  perf: "#7dc4f5",
  api: "#cf8aff",
  infra: "#f5a623",
  team: "#cf8aff",
  process: "#f5a623",
};

export const SKILLGROUPS = [
  {
    label: "Frontend",
    skills: [
      {
        name: "ReactJS",
        level: 95,
        note: "Hooks, performance optimisation, legacy codebases",
      },
      {
        name: "React Native",
        level: 90,
        note: "iOS + Android, full App Store lifecycle",
      },
      {
        name: "TailwindCSS",
        level: 90,
        note: "Responsive design, design systems",
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 85, note: "REST APIs, JWT/Passport auth" },
      {
        name: "Ruby on Rails",
        level: 70,
        note: "Hotwire Stimulus, admin panels, API design",
      },
      { name: "Redis", level: 78, note: "OTP storage, session management" },
    ],
  },
  {
    label: "Database & Cloud",
    skills: [
      {
        name: "PostgreSQL / MySQL",
        level: 86,
        note: "Schema design, query optimisation",
      },
      { name: "AWS S3", level: 80, note: "Multi-environment image uploads" },
      {
        name: "GitHub Actions",
        level: 90,
        note: "CI/CD pipeline design and maintenance",
      },
      { name: "Firebase", level: 75, note: "FCM push notifications" },
    ],
  },
];

export const ADDITIONALTAGS = [
  "Agile/Scrum",
  "Sanity CMS",
  "Typesense",
  "Storybook",
  "Technical Mentorship",
  "App Store Releases",
  "Cross-functional Leadership",
  "MBA",
];

export const DEGREES = [
  {
    abbr: "MBA",
    full: "Master of Business Administration",
    institution: "Kathmandu University School of Management",
    year: "2019",
    note: "Combines strategic business thinking with technical leadership.",
  },
  {
    abbr: "BSc",
    full: "Bachelor of Science in Computer Science",
    institution: "Tribhuvan University",
    year: "2014",
    note: "Algorithms, data structures, systems programming, software engineering.",
  },
];

export const AWARDS = [
  {
    role: "Tribe Captain · Frontend",
    org: "Gurzu Inc.",
    desc: "Led frontend tribe in defining company-wide coding standards; drove measurable team growth initiatives.",
  },
  {
    role: "Bootcamp Mentor",
    org: "Gurzu Inc.",
    desc: "1-on-1 frontend mentorship for bootcamp candidates and junior devs — accelerated onboarding and skill development.",
  },
  {
    role: "Microsoft Student Partner",
    org: "Microsoft",
    desc: "Represented the university in Microsoft's developer community; participated in technical and leadership workshops.",
  },
];
