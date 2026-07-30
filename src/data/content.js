// ─────────────────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit these objects to update the portfolio — no need to touch components.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Md. Rashed Hossain',
  title: 'Platform Engineer • Competitive Programmer',
  tagline:
    'CS undergraduate building distributed backend systems and solving hard algorithmic problems.',
  photo: '/RashedHossain.jpg',
  resume: '/Md_Rashed_Hossain.pdf',
  location: 'Dhaka, Bangladesh',
  email: 'iam.rashedhossain@gmail.com',
  phone: '+880 1867-662737',
}

export const socials = [
  { label: 'GitHub', icon: 'github', href: 'https://github.com/MRashedHossain' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/in/iam-rashedhossain' },
  { label: 'Codeforces', icon: 'code', href: 'https://codeforces.com/profile/StuckOnNewbie' },
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/i.rashedhossain' },
  { label: 'Email', icon: 'mail', href: 'mailto:iam.rashedhossain@gmail.com' },
]

export const about = {
  paragraphs: [
    "I'm a Computer Science undergraduate at Prime University and a competitive programmer who enjoys turning hard problems into clean, working systems. On Codeforces I'm an Expert (max rating 1612) with 1500+ problems solved, and I've represented my university at the ICPC Asia Dhaka Regional three years running.",
    "Currently I work as a Platform Engineer Intern at iHateResume, where I build distributed backend services with FastAPI, PostgreSQL, RabbitMQ, and OpenTelemetry — including a job crawler and observability tooling built from the ground up.",
    "Beyond code, I lead my university's Computer Programming Club as President, having taught and mentored 300+ students in competitive programming over three years.",
  ],
  highlights: [
    { value: '1612', label: 'Codeforces Max (Expert)' },
    { value: '1500+', label: 'Problems Solved' },
    { value: '3×', label: 'ICPC Regionalist' },
    { value: '300+', label: 'Students Mentored' },
  ],
}

export const education = [
  {
    school: 'Prime University',
    location: 'Dhaka, Bangladesh',
    degree: 'B.Sc. in Computer Science & Engineering',
    detail: 'GPA: 3.72 / 4.00 (up to 7th Semester)',
    period: 'Jan 2023 – Jan 2027 (Expected)',
  },
  {
    school: 'Ideal College, Dhanmondi',
    location: 'Dhaka, Bangladesh',
    degree: 'Higher Secondary Certificate (HSC)',
    detail: 'GPA: 5.00 / 5.00',
    period: '2021',
  },
]

export const experience = [
  {
    company: 'iHateResume',
    role: 'Platform Engineer Intern',
    location: 'Remote',
    period: 'Jun 2026 – Present',
    points: [
      'Built Kuiper, a distributed job crawler that scrapes heterogeneous sources (BDJobs, career pages), normalizes them into a unified PostgreSQL schema, and fans results to subscribers via RabbitMQ and a REST API.',
      'Built distributed tracing from zero with OpenTelemetry — auto-instrumenting FastAPI, async Postgres, and HTTP clients into a self-hosted OTEL Collector and Jaeger, plus trace-correlated JSON logging that links logs and traces by trace ID.',
      "Hardened production security across Docker and the API: non-root containers with digest-pinned images, DB credentials removed from committed Compose files, CORS scoped to production origins, server-side AI-key validation, and root-caused a FastAPI × OpenTelemetry bug that 500'd every CORS preflight.",
      'Cut paid AI spend with a content-hash caching layer that skips redundant provider calls, plus job-description normalization that trims prompt size and per-token cost.',
      'Strengthened CI/CD (GitHub Actions) — explicit test-coverage gate, mypy static typing, and a Node/Python base-image migration, all shipped via a branch/PR/code-review workflow.',
    ],
  },
]

export const skills = [
  {
    group: 'Languages',
    items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'Bash / Linux'],
  },
  {
    group: 'Platform & DevOps',
    items: [
      'Docker',
      'Docker Compose',
      'GitHub Actions (CI/CD)',
      'PostgreSQL',
      'RabbitMQ',
      'OpenTelemetry',
      'Jaeger',
      'Git',
    ],
  },
  {
    group: 'Frameworks & Tools',
    items: ['FastAPI', 'SQLAlchemy', 'pytest', 'Node.js', 'Express.js', 'Socket.IO', 'React'],
  },
  {
    group: 'Concepts',
    items: [
      'Observability (Tracing / Logging)',
      'CI/CD Pipelines',
      'Containerization',
      'REST APIs',
      'Message Queues',
      'JWT / OAuth Auth',
      'WebSockets',
      'DSA',
    ],
  },
]

export const projects = [
  {
    name: 'DriveStack',
    stack: ['TypeScript', 'Node.js', 'React', 'Google Drive API'],
    period: '2026 – Present',
    description:
      'Full-stack web app that connects multiple Google accounts and unifies their Drive storage into a single file system, with OAuth 2.0 multi-account authentication.',
    links: [
      { label: 'Live Demo', icon: 'external', href: 'https://drivestack-pro.netlify.app/' },
    ],
  },
  {
    name: 'LocalShare',
    stack: ['TypeScript', 'Node.js', 'Socket.IO', 'WebRTC'],
    period: '2026 – Present',
    description:
      'Open-source AirDrop-style local WiFi file-sharing app with WebRTC P2P transfers, server-relay fallback, and event-driven backpressure. Supports multi-file selection and real-time progress via Socket.IO.',
    badge: 'Open Source',
    links: [
      { label: 'GitHub', icon: 'github', href: 'https://github.com/MRashedHossain/localshare' },
    ],
  },
]

// ── Competitive Programming ────────────────────────────────────────────────
export const cp = {
  platforms: [
    {
      name: 'Codeforces',
      handle: 'StuckOnNewbie',
      rank: 'Expert',
      rating: '1612 (max)',
      href: 'https://codeforces.com/profile/StuckOnNewbie',
      accent: '#3b82f6',
    },
  ],
  stats: [
    { value: 'Expert', label: 'Codeforces Rank' },
    { value: '1612', label: 'Max Rating' },
    { value: '1500+', label: 'Problems Solved' },
    { value: '20+', label: 'National Contests' },
  ],
  solvedNote:
    'Solved 1500+ problems across Codeforces, CodeChef, CSES, LightOJ, SPOJ, and UVa.',
  icpc: {
    title: 'ICPC Asia Dhaka Regional Contest',
    note: 'Qualified and competed onsite three consecutive years — 2023, 2024, 2025.',
  },
  // Full national contest history
  contests: [
    { date: 'Jul 2026', name: 'IUT 12th National ICT Fest Programming Contest', team: 'PU_LateCoders', rank: '54 / 128', solved: '4', href: 'https://toph.co/c/iut-inter-university-2026/standings' },
    { date: 'Jul 2026', name: 'SUST Inter University Programming Contest 2026', team: 'PrimeU_On_The_Edge', rank: '110 / 140', solved: '2', href: 'https://toph.co/c/sust-inter-university-2026/standings' },
    { date: 'Jun 2026', name: 'DUET Inter University Programming Contest 2026', team: 'PrimeU_On_The_Edge', rank: '112 / 137', solved: '2', href: 'https://toph.co/c/duet-inter-university-2026/standings' },
    { date: 'Jun 2026', name: 'NSUCEC Cybernauts IUPC 2026', team: 'PrimeU_On_The_Edge', rank: '86 / 147', solved: '2', href: 'https://bapsoj.org/contests/nsucec-cybernauts-iupc-2026/standings' },
    { date: 'May 2026', name: 'NDUB Inter University Programming Contest 2026', team: 'PrimeU_PeraNai', rank: '71 / 100', solved: '2', href: 'https://toph.co/c/ndub-cse-iupc-2026/standings' },
    { date: 'Feb 2026', name: 'BUET Inter-University Programming Contest 2026', team: 'PrimeU_Supernova', rank: '101 / 110', solved: '2', href: 'https://toph.co/c/inter-university-buet-cse-fest-2026/standings' },
    { date: 'Nov 2025', name: 'ICPC Asia Dhaka Regional 2025 — Onsite (BUBT)', team: 'Superm4n_FanClub', rank: '141 / 313', solved: '2', href: 'https://bapsoj.org/contests/icpc-dhaka-onsite-2025/standings', tag: 'ICPC' },
    { date: 'Nov 2025', name: 'BUBT Inter University Collaborative Programming Contest', team: 'Superm4n_FanClub', rank: '28 / 75', solved: '4', href: 'https://toph.co/c/bubt-inter-university-collaborative/standings', tag: 'Best' },
    { date: 'Nov 2025', name: 'ICPC Asia Dhaka Regional 2025 — Preliminary (BUBT)', team: 'Superm4n_FanClub', rank: '229 / 1717', solved: '3', href: 'https://bapsoj.org/contests/icpc-dhaka-2025-online-preliminary/standings', tag: 'ICPC' },
    { date: 'Jun 2025', name: 'UU Inter-University Programming Contest 2025', team: 'PrimeU_Alpha_Q', rank: '94 / 115', solved: '2', href: 'https://toph.co/c/uttara-university-inter-university-2025/standings' },
    { date: 'May 2025', name: 'DUET Inter University Programming Contest 2025', team: 'PrimeU_RESTART', rank: '94 / 131', solved: '3', href: 'https://toph.co/c/duet-inter-university-iupc-2025/standings' },
    { date: 'Feb 2025', name: 'AUST Inter University Programming Contest 2025', team: 'PrimeU_RESTART', rank: '57 / 130', solved: '3', href: null },
    { date: 'Jan 2025', name: 'UIU Inter-University Programming Contest 2025', team: 'PrimeU_REINCARNATION', rank: '130 / 160', solved: '2', href: 'https://bapsoj.org/contests/uiu-inter-university-programming-contest-2025/standings' },
    { date: 'Jan 2025', name: 'KUET Inter-University Programming Contest 2025', team: 'PrimeU_REINCARNATION', rank: '145 / 160', solved: '1', href: 'https://bapsoj.org/contests/miaki-presents-kuet-iupc-onsite-2025/standings' },
    { date: 'Dec 2024', name: 'ICPC Asia Dhaka Regional 2024 — Onsite (DIU)', team: 'PrimeU_StuckOnNewbie', rank: '235 / 309', solved: '1', href: 'https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings', tag: 'ICPC' },
    { date: 'Nov 2024', name: 'ICPC Asia Dhaka Regional 2024 — Preliminary (DIU)', team: 'PrimeU_StuckOnNewbie', rank: '319 / 2489', solved: '2', href: 'https://bapsoj.org/contests/icpc-preliminary-dhaka-site-2024/standings', tag: 'ICPC' },
    { date: 'Apr 2024', name: 'IUT 11th National ICT Fest Programming Contest 2024', team: 'PU_LateCoders', rank: '67 / 108', solved: '1', href: 'https://toph.co/c/iut-11th-national-ict-fest-2024/standings' },
    { date: 'Feb 2024', name: 'NCPC Preliminary JU 2023', team: 'PrimeU_Dcoders', rank: '800 / 1100', solved: '0', href: 'https://bapsoj.org/contests/ncpc-preliminary-ju-2023/standings' },
    { date: 'Jan 2024', name: 'CUET Inter University Programming Contest 2024', team: 'PU_Dcoder', rank: '86 / 96', solved: '1', href: 'https://toph.co/c/cuet-inter-university-codestorm-1-0/standings' },
    { date: 'Nov 2023', name: 'ICPC Asia Dhaka Regional 2023 — Onsite (BUBT)', team: 'PU_DeathCode', rank: '119 / 225', solved: '3', href: 'https://bapsoj.org/contests/icpc-dhaka-regional-site-2023/standings', tag: 'ICPC' },
    { date: 'Oct 2023', name: 'ICPC Asia Dhaka Regional 2023 — Preliminary (BUBT)', team: 'PU_DeathCode', rank: '295 / 1800', solved: '2', href: null, tag: 'ICPC' },
  ],
}

export const awards = [
  {
    title: 'Champion — CSE Fest Intra-University Programming Contest',
    org: 'Prime University',
    period: '2024 & 2025',
    detail:
      'Won the department-level programming contest two consecutive years among 25+ competing teams.',
    icon: 'trophy',
  },
  {
    title: 'ICPC Asia Dhaka Regionalist',
    org: 'ICPC',
    period: '2023, 2024, 2025',
    detail: 'Qualified and competed onsite at the Asia Dhaka Regional three consecutive years.',
    icon: 'medal',
  },
  {
    title: 'Codeforces Expert',
    org: 'Codeforces',
    period: 'Max Rating 1612',
    detail: 'Reached Expert rank with 1500+ problems solved across major judges.',
    icon: 'star',
  },
]

export const leadership = [
  {
    role: 'President',
    org: 'Computer Programming Club, Dept. of CSE',
    place: 'Prime University',
    period: '2026 – Present',
    detail:
      'Leading club activities including contests, workshops, and training camps for the department.',
  },
  {
    role: 'General Secretary',
    org: 'Computer Programming Club, Dept. of CSE',
    place: 'Prime University',
    period: '2025',
    detail:
      'Coordinated club operations, events, and communication across the programming community.',
  },
  {
    role: 'Competitive Programming Trainer',
    org: 'Computer Programming Club, Dept. of CSE',
    place: 'Prime University',
    period: '2023 – 2024',
    detail: 'Taught and mentored 300+ students in competitive programming over three years.',
  },
]

// Section registry — controls nav order & which sections render.
// Set `enabled: false` to hide a section (e.g. Certifications, Publications).
export const sections = [
  { id: 'home', label: 'Home', enabled: true },
  { id: 'about', label: 'About', enabled: true },
  { id: 'education', label: 'Education', enabled: true },
  { id: 'cp', label: 'Competitive', enabled: true },
  { id: 'skills', label: 'Skills', enabled: true },
  { id: 'projects', label: 'Projects', enabled: true },
  { id: 'experience', label: 'Experience', enabled: true },
  { id: 'leadership', label: 'Leadership', enabled: true },
  { id: 'awards', label: 'Awards', enabled: true },
  { id: 'contact', label: 'Contact', enabled: true },
]
