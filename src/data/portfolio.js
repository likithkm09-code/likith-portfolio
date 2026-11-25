// Single source of truth for all portfolio content.
// Anything wrapped in [square brackets] is an editable placeholder.

export const profile = {
  name: "Likith K M",
  roles: ["Full Stack Developer", "Java Developer", "JavaScript Developer"],
  headline: "Building Digital Experiences Through Code.",
  subheading:
    "I am a passionate developer who builds scalable applications, interactive web experiences, and real-world software solutions.",
  email: "likithkm09@gmail.com",
  phone: "+91 7019182296",
  location: "Periyapatna, Mysuru, Karnataka",
  github: "https://github.com/[your-github-username]", // TODO: replace
  linkedin: "https://linkedin.com/in/likithkm",
  resume: "/Likith_KM_Resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraph:
    "I am a developer passionate about building practical software solutions and real-time applications. I enjoy working with Java, JavaScript, Node.js, and modern web technologies. I focus on writing clean code, solving problems, and developing applications that solve real-world challenges.",
  pillars: [
    {
      title: "Technical problem-solving",
      text: "Breaking problems down, reasoning about trade-offs, and shipping the simplest thing that works.",
    },
    {
      title: "Full-stack development",
      text: "From React interfaces and REST APIs to MySQL and MongoDB data layers.",
    },
    {
      title: "Real-world project experience",
      text: "Billing, warehouse and driver-safety systems built around actual workflows and hardware.",
    },
    {
      title: "Continuous learning",
      text: "Cloud, applied AI and computer vision alongside core engineering fundamentals.",
    },
  ],
};

export const skills = [
  { group: "Languages", items: ["Java", "JavaScript", "Python", "C", "SQL"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Database", items: ["MongoDB", "Mongoose", "MySQL"] },
  { group: "AI / ML & Vision", items: ["OpenCV", "Image Processing", "Classification", "Feature Engineering"] },
  { group: "Tools & Cloud", items: ["Git", "GitHub", "VS Code", "Postman", "Google Cloud Platform", "Figma"] },
];

export const projects = [
  {
    id: "drowsiness",
    art: "eye",
    title: "AI Driver Drowsiness Detection",
    description:
      "Real-time IoT system that watches the driver's eyes through a camera and triggers an audible alert the moment fatigue or micro-sleep is detected.",
    points: [
      "Eye-aspect ratio over facial landmarks flags closing eyes",
      "Raspberry Pi + buzzer for immediate on-device alerts",
    ],
    stack: ["Python", "OpenCV", "Computer Vision", "Arduino", "Raspberry Pi"],
    github: "https://github.com/[your-github-username]/[drowsiness-repo]",
    demo: null,
  },
  {
    id: "iris",
    art: "neural",
    title: "Iris Flower Classification Using ANN",
    description:
      "A machine learning classifier that uses an Artificial Neural Network to predict iris species from sepal and petal measurements.",
    points: ["Feature preparation and model evaluation", "Multi-class classification with an ANN"],
    stack: ["Python", "Machine Learning", "ANN"],
    github: "https://github.com/[your-github-username]/[iris-repo]",
    demo: null,
  },
  {
    id: "rps",
    art: "rps",
    title: "Rock Paper Scissors Game",
    description:
      "Interactive game where the player faces the computer, with clear game logic and a prediction feature that reads the player's choices.",
    points: ["User vs. computer rounds with score tracking", "Prediction functionality on past moves"],
    stack: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/[your-github-username]/[rps-repo]",
    demo: null,
  },
  {
    id: "jobportal",
    art: "portal",
    title: "Job Portal Application",
    description:
      "Full-stack job platform with role-based authentication for Students, Recruiters and Admins, covering job listings and application management.",
    points: ["Separate dashboards per role", "Post, browse, apply and track applications"],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    github: "https://github.com/[your-github-username]/[job-portal-repo]",
    demo: null,
  },
  {
    id: "warehouse",
    art: "warehouse",
    title: "Warehouse Management System",
    description:
      "Tracks inventory, stock movement and order fulfilment with real-time stock visibility, demand forecasting and low-inventory alerts.",
    points: ["Role-based dashboards", "ML-assisted demand forecasting"],
    stack: ["Python", "MySQL", "Machine Learning", "REST APIs"],
    github: "https://github.com/[your-github-username]/[warehouse-repo]",
    demo: null,
  },
  {
    id: "billing",
    art: "billing",
    title: "SmartBilling Management System",
    description:
      "Java desktop billing application with a MySQL backend for managing customers, products and transactions end to end.",
    points: ["Add, update and delete modules", "Billing and transaction management"],
    stack: ["Java", "JFrames", "MySQL"],
    github: "https://github.com/[your-github-username]/[smartbilling-repo]",
    demo: null,
  },
];

// Milestones only reflect real academic, project and learning history.
export const journey = [
  {
    period: "2017 – 2020",
    title: "Foundation",
    text: "Completed high school at Shastry Public School (82.88%), building the base for technical study.",
  },
  {
    period: "2020 – 2023",
    title: "Diploma in Tool & Die Making",
    text: "Studied at Govt. Tool Room & Training Centre. Precision engineering built a hands-on, detail-first approach to problem solving.",
  },
  {
    period: "2023 – 2026",
    title: "B.E. in Computer Science (AI & ML)",
    text: "Core programming in C, Java and Python, databases, and machine learning at Maharaja Institute of Technology Thandavapura.",
  },
  {
    period: "Projects",
    title: "From desktop apps to intelligent systems",
    text: "Progressed from a Java and MySQL billing system to a Python warehouse platform with ML forecasting and a real-time IoT drowsiness detector.",
  },
  {
    period: "Learning",
    title: "Cloud, AI and web",
    text: "Google Cloud Career Launchpad, IBM AI Fundamentals, and a GenAI data analytics job simulation, alongside React and Node.js.",
  },
];

export const education = [
  {
    school: "Maharaja Institute of Technology Thandavapura (MITT)",
    degree: "B.E. — Computer Science Engineering (AI & ML)",
    period: "2023 – 2026",
    score: "7.68 CGPA",
  },
  {
    school: "Govt. Tool Room & Training Centre (GT&TC)",
    degree: "Diploma — Tool & Die Making",
    period: "2020 – 2023",
    score: "8.37 CGPA",
  },
  {
    school: "Shastry Public School",
    degree: "High School",
    period: "2017 – 2020",
    score: "82.88%",
  },
];

export const certifications = [
  { title: "Google Cloud Career Launchpad — Cloud Engineer Track", issuer: "Google Cloud", link: "" },
  { title: "IBM Artificial Intelligence Fundamentals", issuer: "IBM", link: "" },
];

export const onlineLearning = [
  {
    title: "GenAI Powered Data Analytics — Job Simulation",
    issuer: "Forage · Tata & Deloitte",
    link: "",
  },
  { title: "[Add course or achievement]", issuer: "[Platform]", link: "" },
];

export const languages = ["English", "Kannada", "Hindi"];
