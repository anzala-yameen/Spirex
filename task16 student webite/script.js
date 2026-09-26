// Internship Data
const internships = [
    {
        id: 1,
        title: "Frontend Engineering Intern",
        company: "TechNova",
        logo: "TN",
        location: "Remote",
        stipend: "$2000/month",
        duration: "3 Months",
        tags: ["React", "CSS", "JavaScript"],
        description: "Join our core product team to build responsive and highly interactive user interfaces. You will work closely with designers and senior engineers to implement new features.",
        requirements: [
            "Strong understanding of HTML, CSS, and JS",
            "Familiarity with React or similar frameworks",
            "Portfolio of personal web projects"
        ]
    },
    {
        id: 2,
        title: "Data Science Intern",
        company: "DataSync",
        logo: "DS",
        location: "New York, NY",
        stipend: "$2500/month",
        duration: "6 Months",
        tags: ["Python", "SQL", "Machine Learning"],
        description: "Assist our data team in building predictive models and analyzing large datasets to extract meaningful business insights.",
        requirements: [
            "Proficiency in Python and Pandas",
            "Basic understanding of SQL databases",
            "Analytical mindset"
        ]
    },
    {
        id: 3,
        title: "UI/UX Design Intern",
        company: "CreativeCloud",
        logo: "CC",
        location: "Remote",
        stipend: "$1800/month",
        duration: "3 Months",
        tags: ["Figma", "Prototyping", "User Research"],
        description: "Help design the next generation of creative tools. You will participate in user research, wireframing, and creating high-fidelity prototypes.",
        requirements: [
            "Experience with Figma or Sketch",
            "Strong visual design skills",
            "Understanding of UX principles"
        ]
    },
    {
        id: 4,
        title: "Backend Dev Intern",
        company: "ServerPro",
        logo: "SP",
        location: "Austin, TX",
        stipend: "$2200/month",
        duration: "4 Months",
        tags: ["Node.js", "Express", "MongoDB"],
        description: "Work on scaling our cloud infrastructure and building robust RESTful APIs for our mobile and web applications.",
        requirements: [
            "Knowledge of server-side programming",
            "Familiarity with databases (SQL or NoSQL)",
            "Problem-solving skills"
        ]
    }
];

// State
let appliedInternships = [];

// DOM Elements
const internshipGrid = document.getElementById('internship-grid');
const searchInput = document.getElementById('search-input');
const trackerList = document.getElementById('tracker-list');
const emptyState = document.getElementById('empty-state');
const detailsModal = document.getElementById('details-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.getElementById('close-modal');
const successModal = document.getElementById('success-modal');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderInternships(internships);
    updateDashboardStats();
    
    // Modal Listeners
    closeModalBtn.addEventListener('click', () => {
        detailsModal.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Navigation / Tabs
function switchTab(tabId) {
    // Update Nav Links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Update Views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active-view');
    });
    document.getElementById(`view-${tabId}`).classList.add('active-view');
    
    if(tabId === 'dashboard') {
        renderDashboard();
    }
}

// Render Internships Grid
function renderInternships(data) {
    internshipGrid.innerHTML = '';
    
    if(data.length === 0) {
        internshipGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No internships found matching your criteria.</p>';
        return;
    }

    data.forEach(intern => {
        const hasApplied = appliedInternships.some(app => app.id === intern.id);
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <div class="company-logo">${intern.logo}</div>
                <div class="card-title">
                    <h3>${intern.title}</h3>
                    <span>${intern.company} • ${intern.location}</span>
                </div>
            </div>
            <div class="tags">
                ${intern.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <p style="font-size: 0.9rem; margin-bottom: 1.5rem; color: var(--text-muted);">
                💵 ${intern.stipend} | ⏱️ ${intern.duration}
            </p>
            <div class="card-actions">
                <button class="btn btn-secondary" onclick="openDetails(${intern.id})">View Details</button>
                <button class="btn btn-primary" onclick="applyInternship(${intern.id})" ${hasApplied ? 'disabled style="background:var(--success); cursor:default;"' : ''}>
                    ${hasApplied ? 'Applied ✓' : 'Apply Now'}
                </button>
            </div>
        `;
        internshipGrid.appendChild(card);
    });
}

// Filter Search
function filterInternships() {
    const query = searchInput.value.toLowerCase();
    const filtered = internships.filter(i => 
        i.title.toLowerCase().includes(query) || 
        i.company.toLowerCase().includes(query) ||
        i.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderInternships(filtered);
}

// Open Details Modal
function openDetails(id) {
    const intern = internships.find(i => i.id === id);
    const hasApplied = appliedInternships.some(app => app.id === id);

    modalBody.innerHTML = `
        <h2>${intern.title}</h2>
        <span class="modal-company">${intern.company} • ${intern.location}</span>
        <div style="margin-bottom: 1.5rem; display:flex; gap:1rem;">
            <span class="tag">💵 ${intern.stipend}</span>
            <span class="tag">⏱️ ${intern.duration}</span>
        </div>
        <div class="modal-desc">
            <h4>Description</h4>
            <p>${intern.description}</p>
        </div>
        <div class="modal-reqs">
            <h4>Requirements</h4>
            <ul>
                ${intern.requirements.map(req => `<li>${req}</li>`).join('')}
            </ul>
        </div>
        <button class="btn btn-primary" style="width: 100%; padding: 1rem; border-radius: 8px;" 
            onclick="applyInternship(${intern.id}); document.getElementById('details-modal').classList.remove('active');" 
            ${hasApplied ? 'disabled style="background:var(--success);"' : ''}>
            ${hasApplied ? 'Already Applied' : 'Submit Application'}
        </button>
    `;
    
    detailsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Apply Logic
function applyInternship(id) {
    const intern = internships.find(i => i.id === id);
    if(intern && !appliedInternships.some(app => app.id === id)) {
        appliedInternships.push({
            ...intern,
            status: 'In Review',
            appliedDate: new Date().toLocaleDateString()
        });
        
        // Re-render home to update button state
        renderInternships(internships);
        updateDashboardStats();
        
        // Show success
        successModal.classList.add('active');
    }
}

function closeSuccessModal() {
    successModal.classList.remove('active');
}

// Dashboard Logic
function updateDashboardStats() {
    document.getElementById('stat-applied').textContent = appliedInternships.length;
    document.getElementById('stat-review').textContent = appliedInternships.filter(a => a.status === 'In Review').length;
    // Mocking an accepted stat for UI purposes
    document.getElementById('stat-accepted').textContent = '0';
}

function renderDashboard() {
    if(appliedInternships.length === 0) {
        emptyState.style.display = 'block';
        document.querySelectorAll('.track-item').forEach(e => e.remove());
        return;
    }
    
    emptyState.style.display = 'none';
    
    // Clear existing
    document.querySelectorAll('.track-item').forEach(e => e.remove());
    
    appliedInternships.forEach(app => {
        const item = document.createElement('div');
        item.className = 'track-item';
        item.innerHTML = `
            <div class="track-info">
                <h3>${app.title}</h3>
                <p>${app.company} • Applied on: ${app.appliedDate}</p>
            </div>
            <div class="status-badge status-review">
                ${app.status}
            </div>
        `;
        trackerList.insertBefore(item, emptyState);
    });
}
