// Data for Departments & Courses
const departments = [
    {
        icon: "💻",
        title: "Computer Science",
        courses: ["B.S. Software Engineering", "M.S. Artificial Intelligence", "Ph.D. Computer Science"]
    },
    {
        icon: "🔬",
        title: "Applied Sciences",
        courses: ["B.S. Biotechnology", "B.S. Chemistry", "M.S. Applied Physics"]
    },
    {
        icon: "📈",
        title: "Business School",
        courses: ["BBA Finance", "MBA Executive", "B.S. Marketing"]
    },
    {
        icon: "🎨",
        title: "Arts & Humanities",
        courses: ["B.A. English Literature", "B.F.A. Visual Arts", "M.A. History"]
    },
    {
        icon: "⚖️",
        title: "School of Law",
        courses: ["L.L.B. Corporate Law", "L.L.M. International Law", "Ph.D. Legal Studies"]
    },
    {
        icon: "⚕️",
        title: "Medical College",
        courses: ["MBBS", "B.D.S. Dentistry", "Doctor of Pharmacy (Pharm.D)"]
    }
];

// Data for Faculty
const faculty = [
    {
        name: "Dr. Robert Clark",
        role: "Dean, Computer Science",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Prof. Elena Rostova",
        role: "Head of AI Research",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Dr. James Mitchell",
        role: "Professor of Economics",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        name: "Dr. Sarah Lin",
        role: "Director, Bio-Tech Lab",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Data for Events
const events = [
    {
        day: "15",
        month: "Oct",
        title: "Annual Tech Symposium 2026",
        meta: "📍 Main Auditorium | 🕘 09:00 AM - 05:00 PM"
    },
    {
        day: "22",
        month: "Oct",
        title: "Global Business Leadership Summit",
        meta: "📍 Business School Hall | 🕘 10:00 AM - 02:00 PM"
    },
    {
        day: "05",
        month: "Nov",
        title: "SpireX Arts & Culture Festival",
        meta: "📍 Campus Square | 🕘 04:00 PM - 09:00 PM"
    },
    {
        day: "12",
        month: "Nov",
        title: "Fall Semester Career Fair",
        meta: "📍 Student Center | 🕘 10:00 AM - 03:00 PM"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // Render Departments
    const deptGrid = document.getElementById('departments-grid');
    departments.forEach(dept => {
        let coursesHTML = dept.courses.map(course => `<li>${course}</li>`).join('');
        const card = document.createElement('div');
        card.className = 'dept-card';
        card.innerHTML = `
            <div class="dept-icon">${dept.icon}</div>
            <h3>${dept.title}</h3>
            <ul>${coursesHTML}</ul>
            <a href="#" class="btn btn-outline" style="border-color: var(--primary); color: var(--primary); padding: 0.5rem 1.5rem; font-size: 0.9rem;">View All</a>
        `;
        deptGrid.appendChild(card);
    });

    // Render Faculty
    const facultyGrid = document.getElementById('faculty-grid');
    faculty.forEach(member => {
        const card = document.createElement('div');
        card.className = 'faculty-card';
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" class="faculty-img" loading="lazy">
            <div class="faculty-info">
                <h3>${member.name}</h3>
                <span class="faculty-role">${member.role}</span>
                <p style="color: var(--text-light); font-size: 0.9rem;">Ph.D. Harvard University. Leading expert in field research.</p>
            </div>
        `;
        facultyGrid.appendChild(card);
    });

    // Render Events
    const eventsList = document.getElementById('events-list');
    events.forEach(event => {
        const item = document.createElement('div');
        item.className = 'event-item';
        item.innerHTML = `
            <div class="event-date">
                <span class="day">${event.day}</span>
                <span class="month">${event.month}</span>
            </div>
            <div class="event-details">
                <h3>${event.title}</h3>
                <span class="event-meta">${event.meta}</span>
            </div>
        `;
        eventsList.appendChild(item);
    });
});
