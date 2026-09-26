// Dummy Job Data
const jobs = [
    {
        id: 1,
        title: "Senior React Developer",
        company: "TechNova Solutions",
        logo: "TN",
        location: "San Francisco, CA",
        salary: "$130k - $160k",
        type: "Full-Time",
        level: "Senior Level",
        model: "Remote",
        postedAt: "2 days ago",
        description: "We are looking for an experienced React developer to lead our frontend architecture. You will be responsible for building highly scalable web applications and mentoring junior developers.",
        responsibilities: [
            "Architect and develop scalable frontend web applications using React and Redux.",
            "Collaborate with product and design teams to iterate on new features.",
            "Optimize application for maximum speed and scalability."
        ],
        requirements: [
            "5+ years of experience in JavaScript and React.",
            "Strong understanding of web performance optimization.",
            "Experience with modern CI/CD pipelines."
        ]
    },
    {
        id: 2,
        title: "Junior UI/UX Designer",
        company: "Creative Studio",
        logo: "CS",
        location: "New York, NY",
        salary: "$60k - $80k",
        type: "Full-Time",
        level: "Entry Level",
        model: "Hybrid",
        postedAt: "5 hours ago",
        description: "Join our vibrant design team to create beautiful and intuitive user experiences for our e-commerce clients.",
        responsibilities: [
            "Create wireframes, prototypes, and high-fidelity mockups.",
            "Conduct user research and usability testing.",
            "Work closely with developers to ensure accurate implementation."
        ],
        requirements: [
            "Portfolio demonstrating UI/UX design skills.",
            "Proficiency in Figma or Sketch.",
            "Understanding of basic HTML/CSS is a plus."
        ]
    },
    {
        id: 3,
        title: "DevOps Engineer",
        company: "CloudScale",
        logo: "CS",
        location: "Austin, TX",
        salary: "$110k - $140k",
        type: "Contract",
        level: "Mid Level",
        model: "Remote",
        postedAt: "1 day ago",
        description: "Looking for a DevOps engineer to help automate our infrastructure and deployment processes on AWS.",
        responsibilities: [
            "Manage and maintain AWS infrastructure.",
            "Implement CI/CD pipelines using GitHub Actions.",
            "Monitor system performance and ensure high availability."
        ],
        requirements: [
            "Experience with AWS, Docker, and Kubernetes.",
            "Strong scripting skills in Python or Bash.",
            "Familiarity with Infrastructure as Code (Terraform)."
        ]
    },
    {
        id: 4,
        title: "Marketing Manager",
        company: "GrowthGen",
        logo: "GG",
        location: "Chicago, IL",
        salary: "$90k - $110k",
        type: "Full-Time",
        level: "Mid Level",
        model: "On-site",
        postedAt: "3 days ago",
        description: "Lead our marketing initiatives to drive brand awareness and customer acquisition across multiple channels.",
        responsibilities: [
            "Develop and execute comprehensive marketing strategies.",
            "Manage social media campaigns and content calendars.",
            "Analyze marketing data to optimize ROI."
        ],
        requirements: [
            "3+ years in digital marketing.",
            "Experience with Google Analytics and SEO tools.",
            "Strong copywriting and communication skills."
        ]
    },
    {
        id: 5,
        title: "Data Analyst Part-Time",
        company: "DataMetrics",
        logo: "DM",
        location: "Boston, MA",
        salary: "$40/hr",
        type: "Part-Time",
        level: "Entry Level",
        model: "Remote",
        postedAt: "Just now",
        description: "Help us make sense of our data. This part-time role involves cleaning data, creating dashboards, and running SQL queries.",
        responsibilities: [
            "Clean and organize large datasets.",
            "Create interactive Tableau dashboards.",
            "Generate weekly performance reports."
        ],
        requirements: [
            "Proficiency in SQL and Excel.",
            "Experience with data visualization tools.",
            "Detail-oriented mindset."
        ]
    }
];

// DOM Elements
const jobsList = document.getElementById('jobs-list');
const searchInput = document.getElementById('search-input');
const resultsCount = document.getElementById('results-count');
const jobModal = document.getElementById('job-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobs);

    // Modal close event
    closeModalBtn.addEventListener('click', () => {
        jobModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close on outside click
    jobModal.addEventListener('click', (e) => {
        if (e.target === jobModal) {
            jobModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Render Jobs
function renderJobs(data) {
    jobsList.innerHTML = '';
    
    if (data.length === 0) {
        jobsList.innerHTML = '<div style="text-align: center; padding: 3rem; color: var(--text-muted); background: var(--surface); border-radius: var(--radius);">No jobs found matching your criteria. Try adjusting your filters.</div>';
        resultsCount.textContent = "0 jobs found";
        return;
    }

    resultsCount.textContent = `Showing ${data.length} job${data.length > 1 ? 's' : ''}`;

    data.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.onclick = () => openJobModal(job.id);
        
        card.innerHTML = `
            <div class="company-logo">${job.logo}</div>
            <div class="job-details">
                <div class="job-header">
                    <div>
                        <h3 class="job-title">${job.title}</h3>
                        <div class="company-name">${job.company}</div>
                    </div>
                    <div class="salary-tag">${job.salary}</div>
                </div>
                <div class="job-tags">
                    <span class="tag">${job.type}</span>
                    <span class="tag">${job.level}</span>
                    <span class="tag">${job.model}</span>
                </div>
                <div class="job-footer">
                    <span>📍 ${job.location}</span>
                    <span>🕒 Posted ${job.postedAt}</span>
                </div>
            </div>
        `;
        jobsList.appendChild(card);
    });
}

// Search and Filter Logic
function applyFilters() {
    const query = searchInput.value.toLowerCase();
    
    // Get checked filters
    const checkboxes = document.querySelectorAll('.filter-checkbox:checked');
    const activeFilters = {
        type: [],
        level: [],
        model: []
    };

    checkboxes.forEach(cb => {
        // We know which group it belongs to based on the HTML structure
        // A cleaner way is to look at parent text, but we'll infer from values
        const val = cb.value;
        if (['Full-Time', 'Part-Time', 'Contract'].includes(val)) activeFilters.type.push(val);
        else if (['Entry Level', 'Mid Level', 'Senior Level'].includes(val)) activeFilters.level.push(val);
        else if (['Remote', 'On-site', 'Hybrid'].includes(val)) activeFilters.model.push(val);
    });

    const filteredJobs = jobs.filter(job => {
        // Text Search
        const matchesSearch = job.title.toLowerCase().includes(query) || 
                              job.company.toLowerCase().includes(query);
        
        // Checkbox Filters
        const matchesType = activeFilters.type.length === 0 || activeFilters.type.includes(job.type);
        const matchesLevel = activeFilters.level.length === 0 || activeFilters.level.includes(job.level);
        const matchesModel = activeFilters.model.length === 0 || activeFilters.model.includes(job.model);

        return matchesSearch && matchesType && matchesLevel && matchesModel;
    });

    renderJobs(filteredJobs);
}

function clearFilters() {
    document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = false);
    searchInput.value = '';
    applyFilters();
}

// Modal Logic
function openJobModal(id) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;

    modalBody.innerHTML = `
        <div class="job-header-info">
            <div class="company-logo">${job.logo}</div>
            <div>
                <h2>${job.title}</h2>
                <div style="color: var(--text-muted); margin-bottom: 0.5rem;">${job.company} • ${job.location}</div>
                <div style="display: flex; gap: 0.5rem;">
                    <span class="tag" style="background: var(--background); border: 1px solid var(--border);">${job.type}</span>
                    <span class="tag" style="background: var(--background); border: 1px solid var(--border);">${job.model}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3>About the Role</h3>
            <p>${job.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Key Responsibilities</h3>
            <ul>
                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Requirements</h3>
            <ul>
                ${job.requirements.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
        
        <div class="apply-container">
            <button class="btn btn-primary" style="padding: 0.8rem 2rem; font-size: 1rem;" onclick="alert('Application process started for ${job.title} at ${job.company}!')">Apply Now</button>
        </div>
    `;

    jobModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
