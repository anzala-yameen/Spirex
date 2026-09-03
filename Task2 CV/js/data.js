

const cvData = {
  profile: {
    name: "Anzala Yameen",
    title: "Software Engineer",
    status: "Available for Software Engineering Internships & Full-time Roles",
    location: "XYZ Block",
    email: "anzalayameen110@gmail.com",
    linkedin: "https://www.linkedin.com/in/anzala-yameen-b051b830a",
    bio: "Final-year BS Software Engineering student at Iqra University with a CGPA of 3.68/4.00. Strong foundation in software development, programming, database management, machine learning, and web technologies. Proficient in C, Java, Python, SQL, HTML, CSS, JavaScript, React.js, jQuery, and Bootstrap. Passionate about learning new technologies, solving real-world problems, and contributing to innovative software projects.",
    socials: {
      linkedin: "https://www.linkedin.com/in/anzala-yameen-b051b830a",
      github: "https://github.com",
      twitter: "https://x.com"
    }
  },

  education: [
    {
      degree: "BS Software Engineering",
      institution: "Iqra University",
      period: "2023 — Present (Final Year)",
      gpa: "CGPA: 3.68 / 4.00",
      badge: "Final Year Student",
      description: "Core Focus: Software Design & Architecture, Database Systems, Web Engineering, Machine Learning, Data Structures, OOP."
    },
    {
      degree: "HSC (Pre-Engineering)",
      institution: "Government Girls Degree College, Tando Adam",
      period: "Completed July 2021",
      gpa: "Grade A (75%)",
      badge: "Pre-Engineering",
      description: "Focus: Mathematics, Physics, Chemistry."
    }
  ],

  experience: [
    {
      role: "Smart Automation & Workflow AI Intern",
      company: "Excelerate | Supported by Saint Louis University",
      period: "Internship",
      type: "★ Awarded Star Performer",
      highlights: [
        "Awarded Star Performer for outstanding performance during the internship program.",
        "Worked on cutting-edge AI-based automation tools and workflow solutions.",
        "Engineered smart process automation pipelines to reduce manual workload and increase efficiency."
      ]
    },
    {
      role: "Software Engineering Intern (Technical Dept)",
      company: "TMC Company",
      period: "3 Months",
      type: "Internship",
      highlights: [
        "Assisted in preparing comprehensive Technical Solution Documents (TSD).",
        "Gained foundational knowledge in SAP ABAP on HANA enterprise architecture.",
        "Supported documentation, technical reporting, and software project-related tasks."
      ]
    }
  ],

  skills: [
    // Web Technologies & React
    { name: "HTML5 / CSS3 / SASS", category: "frontend", level: 95, exp: "Web Tech" },
    { name: "JavaScript (ES6+) & React.js", category: "frontend", level: 90, exp: "Web Tech" },
    { name: "jQuery & Bootstrap", category: "frontend", level: 85, exp: "Web Tech" },

    // Languages & DB & AI
    { name: "Python & Machine Learning", category: "backend", level: 90, exp: "Core Tech" },
    { name: "C & Java (OOP)", category: "backend", level: 85, exp: "Languages" },
    { name: "SQL & Database Management", category: "backend", level: 90, exp: "Database" },

    // Design & Tools
    { name: "Figma & Canva", category: "tools", level: 88, exp: "Design Tools" },
    { name: "Microsoft Office Suite", category: "tools", level: 92, exp: "Productivity" },

    // Soft Skills & Languages
    { name: "English (Professional Proficiency)", category: "soft", level: 90, exp: "Language" },
    { name: "Urdu (Native / Full Proficiency)", category: "soft", level: 100, exp: "Language" },
    { name: "Technical Problem Solving", category: "soft", level: 95, exp: "Soft Skill" }
  ],

  projects: [
    {
      id: "ai-workflow",
      title: "Smart AI Workflow & Automation Suite",
      category: "tools",
      description: "Award-winning process automation system created during Excelerate internship, featuring smart automated task execution pipelines.",
      tags: ["Python", "AI Workflows", "JavaScript", "HTML5/CSS3"],
      image: "assets/projects/ai-workflow.svg",
      details: "Engineered automated task execution pipelines utilizing AI techniques to optimize process efficiency and task dispatching. Awarded Star Performer for this project."
    },
    {
      id: "customer-churn",
      title: "ML Customer Churn Predictor",
      category: "backend",
      description: "Predictive machine learning model built with Python & Scikit-Learn to analyze customer behavior metrics and forecast churn probability.",
      tags: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
      image: "assets/projects/churn-predictor.jpg",
      details: "Leveraged machine learning classification algorithms to analyze customer usage metrics, calculate churn risk scores, and present visual indicator analytics."
    },
    {
      id: "heart-disease",
      title: "Heart Disease Risk Prediction System",
      category: "backend",
      description: "Intelligent diagnostic classification system leveraging clinical patient data to predict heart disease risks with interactive reporting.",
      tags: ["Python", "Machine Learning", "Streamlit", "NumPy"],
      image: "assets/projects/heart-disease.jpg",
      details: "Built an interactive healthcare AI portal using Streamlit and machine learning metrics to predict heart disease risk probability from medical measurements."
    },
    {
      id: "smart-parking",
      title: "Smart Parking Management System",
      category: "tools",
      description: "Automated parking space detection and online slot reservation web application featuring real-time space tracking and slot status visualizer.",
      tags: ["Python", "JavaScript", "HTML5", "CSS3", "SQL Database"],
      image: "assets/projects/smart-parking.jpg",
      details: "Designed an automated parking space allocation system that tracks available slots, processes online reservations, and provides real-time status visualizers."
    },
    {
      id: "hbl-redesign",
      title: "HBL Bank UI/UX Redesign & Prototypes",
      category: "frontend",
      description: "Comprehensive digital banking portal redesign for Habib Bank Limited (HBL), featuring modern aesthetics and fluid user flows.",
      tags: ["Figma", "UI/UX Design", "HTML5", "CSS3", "JavaScript"],
      image: "assets/projects/hbl-redesign.jpg",
      details: "Created a complete digital banking user interface mockup with glassmorphic dashboards, clean navigation menus, and interactive payment user flows."
    },
    {
      id: "choti-cheese",
      title: "Choti Cheese E-Commerce Platform Clone",
      category: "frontend",
      description: "Full-featured responsive e-commerce web application clone inspired by Choti Cheese, incorporating product catalogs and shopping cart.",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js"],
      image: "assets/projects/choti-cheese.jpg",
      details: "Built an interactive e-commerce platform clone featuring dynamic product filtering, cart drawer management, checkout forms, and responsive mobile layouts."
    },
    {
      id: "blood-bank",
      title: "Blood Bank Web Portal",
      category: "frontend",
      description: "Web-based blood donation and inventory management portal connecting donors with patients and processing emergency requests.",
      tags: ["HTML5/CSS3", "JavaScript", "Bootstrap", "SQL Database"],
      image: "assets/projects/blood-bank.jpg",
      details: "Developed a donor portal linking blood donors with patients, organizing donor eligibility schedules, and monitoring blood group inventories in real time."
    },
    {
      id: "oop-bank",
      title: "OOP Bank Management System",
      category: "backend",
      description: "Enterprise Object-Oriented Banking System featuring secure account creation, transaction audit logging, and robust OOP encapsulation.",
      tags: ["C++", "Java", "Object-Oriented Programming", "Data Structures"],
      image: "assets/projects/oop-bank.svg",
      details: "Implemented robust C++/Java bank simulation applying OOP principles: inheritance, polymorphism, encapsulation, and transaction logging algorithms."
    }
  ],

  certifications: [
    { title: "CIT (Certificate in Information Technology) Course", institute: "KES Academy" },
    { title: "English Grammar Course", institute: "Aims Academy" }
  ]
};
