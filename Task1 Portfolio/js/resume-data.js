const RESUME_DATA = {
    personalInfo: {
        name: "ANZALA YAMEEN",
        title: "Software Engineer",
        subtitle: "BS Software Engineering Student | Web Developer | AI & Automation Enthusiast",
        bio: "Final-year BS Software Engineering student at Iqra University with a CGPA of 3.68/4.00. Strong foundation in software development, programming, database management, machine learning, and web technologies. Proficient in C, Java, Python, SQL, HTML, CSS, JavaScript, jQuery, Bootstrap, Microsoft Office, Canva, and Figma. Passionate about learning new technologies, solving real-world problems, and contributing to innovative software projects.",
        cgpa: "3.68 / 4.00",
        phone: "0301-2861227",
        email: "anzalayameen110@gmail.com",
        location: "Urdu Bazar, Karachi, Pakistan",
        linkedin: "https://www.linkedin.com/in/anzala-yameen-b051b830a",
        linkedinDisplay: "linkedin.com/in/anzala-yameen-b051b830a",
        status: "Open for Software Engineering Internships & Full-time Roles"
    },
    skills: [
        { category: "Languages", items: ["C", "Java", "Python", "SQL"], icon: "code" },
        { category: "Web Technologies", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "jQuery", "Bootstrap"], icon: "layout" },
        { category: "Databases & AI", items: ["SQL Database Management", "Machine Learning", "Relational Schemas", "Query Optimization"], icon: "database" },
        { category: "Design & Tools", items: ["Figma", "Canva", "Microsoft Office Suite", "Technical Documentation (TSD)"], icon: "feather" }
    ],
    experience: [
        {
            role: "Smart Automation & Workflow AI Intern",
            company: "Excelerate | Supported by Saint Louis University",
            period: "Recent / Internship",
            award: "★ Awarded Star Performer for Outstanding Performance",
            bullets: [
                "Worked on cutting-edge AI-based automation tools and workflow solutions.",
                "Engineered smart process automation pipelines to reduce manual workload.",
                "Recognized with the Star Performer Award for exemplary contributions and problem-solving skills."
            ],
            technologies: ["AI Workflows", "Automation", "Python", "Process Optimization"]
        },
        {
            role: "Software Engineering Intern (Technical Dept)",
            company: "TMC Company",
            period: "3 Months",
            bullets: [
                "Assisted in preparing comprehensive Technical Solution Documents (TSD).",
                "Gained foundational knowledge in SAP ABAP on HANA enterprise architecture.",
                "Supported documentation, technical reporting, and software project-related tasks."
            ],
            technologies: ["SAP ABAP on HANA", "Technical Documentation (TSD)", "Software Architecture", "Database Querying"]
        }
    ],
    education: [
        {
            degree: "BS Software Engineering",
            institution: "Iqra University",
            period: "2023 – Present (Final Year)",
            grade: "CGPA: 3.68 / 4.00",
            details: "Core Focus: Software Design & Architecture, Database Systems, Web Engineering, Machine Learning, Data Structures, OOP."
        },
        {
            degree: "HSC (Pre-Engineering)",
            institution: "Government Girls Degree College, Tando Adam",
            period: "Completed July 2021",
            grade: "Grade: A (75%)",
            details: "Focus: Mathematics, Physics, Chemistry."
        }
    ],
    projects: [
        {
            id: "customer-churn",
            title: "ML Customer Churn Predictor",
            category: "Machine Learning & Analytics",
            description: "Predictive machine learning model built with Python & Scikit-Learn to analyze customer behavior metrics, forecast churn probability, and visualize key risk indicators.",
            tech: ["Python", "Scikit-Learn", "Pandas", "Machine Learning", "Data Visualization"],
            image: "assets/projects/churn-predictor.jpg",
            github: "#",
            demo: "#"
        },
        {
            id: "heart-disease",
            title: "Heart Disease Risk Prediction System",
            category: "Healthcare AI",
            description: "Intelligent diagnostic classification system leveraging clinical patient data to predict heart disease risks with statistical evaluation and interactive reporting dashboards.",
            tech: ["Python", "Machine Learning", "Streamlit", "NumPy", "Predictive Analytics"],
            image: "assets/projects/heart-disease.jpg",
            github: "#",
            demo: "#"
        },
        {
            id: "smart-parking",
            title: "Smart Parking Management System",
            category: "IoT & Smart Automation",
            description: "Automated parking space detection and online slot reservation web application featuring real-time space tracking, automated ticketing, and slot status visualizer.",
            tech: ["Python", "JavaScript", "HTML5", "CSS3", "SQL Database"],
            image: "assets/projects/smart-parking.jpg",
            github: "#",
            demo: "#"
        },
        {
            id: "hbl-redesign",
            title: "HBL Bank UI/UX Redesign & Prototypes",
            category: "UI/UX & Web Development",
            description: "Comprehensive digital banking portal redesign for Habib Bank Limited (HBL), featuring modern glassmorphic aesthetics, fluid user flows, and interactive prototypes.",
            tech: ["Figma", "UI/UX Design", "HTML5", "CSS3", "JavaScript"],
            image: "assets/projects/hbl-redesign.jpg",
            github: "#",
            demo: "#"
        },
        {
            id: "choti-cheese",
            title: "Choti Cheese E-Commerce Platform Clone",
            category: "Web Development & E-Commerce",
            description: "Full-featured, responsive e-commerce web application clone inspired by Choti Cheese, incorporating interactive product catalogs, cart management, and modern UI.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "UI Components"],
            image: "assets/projects/choti-cheese.jpg",
            github: "#",
            demo: "#"
        },
        {
            id: "blood-bank",
            title: "Blood Bank Web Portal",
            category: "Web Engineering & Database",
            description: "Web-based blood donation and inventory management portal connecting donors with patients, tracking blood group stocks, and processing emergency requests.",
            tech: ["HTML5/CSS3", "JavaScript", "Bootstrap", "SQL Database"],
            image: "assets/projects/blood-bank.jpg",
            github: "#",
            demo: "#"
        },
        {
            id: "oop-bank",
            title: "OOP Bank Management System",
            category: "Core Software & OOP",
            description: "Enterprise Object-Oriented Banking System featuring secure account creation, transaction audit logging, interest calculation, and robust OOP encapsulation.",
            tech: ["C++", "Java", "Object-Oriented Programming", "Data Structures"],
            image: "assets/projects/oop-bank.svg",
            github: "#",
            demo: "#"
        },
        {
            id: "smart-classroom",
            title: "AI Smart Classroom System",
            category: "AI & Educational Tech",
            description: "Next-gen smart classroom platform incorporating AI-driven attendance tracking, automated student activity metrics, and interactive learning tools.",
            tech: ["Python", "Computer Vision", "AI Workflows", "Web Portal"],
            image: "assets/projects/smart-classroom.svg",
            github: "#",
            demo: "#"
        },
        {
            id: "mood-playlist",
            title: "Automatic Mood Playlist Generator",
            category: "AI & Audio Intelligence",
            description: "Smart audio application that analyzes user mood preferences and emotion triggers to automatically generate dynamic, custom music playlists.",
            tech: ["Python", "AI Recommendation", "JavaScript", "Web Audio API"],
            image: "assets/projects/mood-playlist.svg",
            github: "#",
            demo: "#"
        },
        {
            id: "ai-workflow",
            title: "Smart AI Workflow & Automation Suite",
            category: "Enterprise AI & Automation",
            description: "Award-winning process automation system created during Excelerate internship, featuring smart automated task execution pipelines and efficiency analytics.",
            tech: ["Python", "AI Workflows", "JavaScript", "HTML5/CSS3"],
            image: "assets/projects/ai-workflow.svg",
            github: "#",
            demo: "#"
        }
    ],
    certifications: [
        { title: "CIT (Certificate in Information Technology) Course", issuer: "KES Academy", icon: "award" },
        { title: "English Grammar Course", issuer: "Aims Academy", icon: "book-open" }
    ],
    languages: [
        { name: "English", level: "Professional Proficiency" },
        { name: "Urdu", level: "Native / Full Proficiency" }
    ]
};
