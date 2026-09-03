document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initCustomCursor();
    renderResumeData();
    init3DTiltCards();
    initModalEvents();
    initAudioSystem();
    initScrollSpy();
    initContactForm();
});

/* 0. Light / Dark Theme Switcher */
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    const savedTheme = localStorage.getItem('anzala_theme') || 'dark';

    setTheme(savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('anzala_theme', theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
        toggleBtn.innerHTML = theme === 'dark' ? '🌙' : '☀️';
        toggleBtn.title = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`;
    }

    if (typeof updateThreeSceneTheme === 'function') {
        updateThreeSceneTheme(theme);
    }
}

/* 1. Custom Cyber Cursor */
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    function renderCursorFollower() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;
        requestAnimationFrame(renderCursorFollower);
    }
    renderCursorFollower();

    // Hover effect for interactive elements
    const interactiveSelectors = 'a, button, input, textarea, .tilt-card, .skill-pill, .btn-icon';
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.add('hovering');
        }
    });
    document.body.addEventListener('mouseout', (e) => {
        if (e.target.closest(interactiveSelectors)) {
            document.body.classList.remove('hovering');
        }
    });
}

/* 2. Render Resume Data into DOM */
function renderResumeData() {
    if (typeof RESUME_DATA === 'undefined') return;

    // About Section Info
    const bioText = document.getElementById('bio-text');
    if (bioText) bioText.innerText = RESUME_DATA.personalInfo.bio;

    // Skills Render
    const skillsContainer = document.getElementById('skills-grid-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = RESUME_DATA.skills.map(cat => `
            <div class="skill-category-card tilt-card">
                <div class="category-header">
                    <div class="category-icon">⚡</div>
                    <div class="category-title">${cat.category}</div>
                </div>
                <div class="skill-tags">
                    ${cat.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // Experience Render
    const expContainer = document.getElementById('experience-container');
    if (expContainer) {
        expContainer.innerHTML = RESUME_DATA.experience.map(exp => `
            <div class="exp-card tilt-card">
                <div class="exp-header">
                    <div>
                        <h3 class="exp-role">${exp.role}</h3>
                        <div class="exp-company">${exp.company}</div>
                    </div>
                    <span class="exp-period">${exp.period}</span>
                </div>
                ${exp.award ? `
                    <div class="star-award-banner">
                        <span>${exp.award}</span>
                    </div>
                ` : ''}
                <ul class="exp-bullets">
                    ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                </ul>
                <div class="exp-tech-stack">
                    ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    // Education Render
    const eduContainer = document.getElementById('education-container');
    if (eduContainer) {
        eduContainer.innerHTML = RESUME_DATA.education.map(edu => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-degree">${edu.degree}</div>
                    <div class="timeline-institution">${edu.institution}</div>
                    <div class="timeline-meta">
                        <span>${edu.period}</span>
                        <span class="grade-badge">${edu.grade}</span>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 0.92rem;">${edu.details}</p>
                </div>
            </div>
        `).join('');
    }

    // Projects Render
    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projectsContainer.innerHTML = RESUME_DATA.projects.map(proj => `
            <div class="project-card tilt-card">
                <div class="project-preview" style="${proj.image ? `background: url('${proj.image}') center/cover no-repeat;` : ''}">
                    ${!proj.image ? `<span class="project-3d-mesh">&lt;3D/&gt;</span>` : ''}
                    <span class="project-category-badge">${proj.category}</span>
                </div>
                <div class="project-body">
                    <div>
                        <h3 class="project-title">${proj.title}</h3>
                        <p class="project-desc">${proj.description}</p>
                    </div>
                    <div>
                        <div class="project-tags">
                            ${proj.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <button class="btn-secondary" style="padding: 6px 16px; font-size: 0.8rem;" onclick="viewProjectDetails('${proj.title}')">Project Details</button>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Certifications Render
    const certsContainer = document.getElementById('certs-container');
    if (certsContainer) {
        certsContainer.innerHTML = RESUME_DATA.certifications.map(c => `
            <div class="cert-card">
                <div class="cert-icon">🎓</div>
                <div>
                    <div class="cert-title">${c.title}</div>
                    <div class="cert-issuer">Issued by: ${c.issuer}</div>
                </div>
            </div>
        `).join('');
    }

    // Languages Render
    const langsContainer = document.getElementById('langs-container');
    if (langsContainer) {
        langsContainer.innerHTML = RESUME_DATA.languages.map(l => `
            <div class="lang-item">
                <div class="lang-name-row">
                    <span>${l.name}</span>
                    <span class="lang-level">${l.level}</span>
                </div>
                <div class="progress-bar-track">
                    <div class="progress-bar-fill" style="width: ${l.name === 'Urdu' ? '100%' : '90%'}"></div>
                </div>
            </div>
        `).join('');
    }
}

/* 3. 3D Tilt Card Math FX */
function init3DTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

/* 4. Resume PDF Viewer Modal */
function initModalEvents() {
    const modalBackdrop = document.getElementById('resume-modal');
    const openBtn = document.getElementById('open-resume-btn');
    const closeBtn = document.getElementById('close-resume-btn');
    const printBtn = document.getElementById('print-resume-btn');

    if (openBtn && modalBackdrop) {
        openBtn.addEventListener('click', () => {
            modalBackdrop.classList.add('active');
        });
    }

    if (closeBtn && modalBackdrop) {
        closeBtn.addEventListener('click', () => {
            modalBackdrop.classList.remove('active');
        });
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                modalBackdrop.classList.remove('active');
            }
        });
    }

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

/* 5. Web Audio Synth Ambience */
let audioCtx, isAudioPlaying = false, synthOsc;

function initAudioSystem() {
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (!audioBtn) return;

    audioBtn.addEventListener('click', () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (isAudioPlaying) {
            if (synthOsc) synthOsc.stop();
            audioBtn.classList.remove('playing');
            audioBtn.innerHTML = '🔊';
            isAudioPlaying = false;
        } else {
            audioCtx.resume();
            synthOsc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            synthOsc.type = 'sine';
            synthOsc.frequency.setValueAtTime(110, audioCtx.currentTime); // Low soothing A note
            gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);

            synthOsc.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            synthOsc.start();
            audioBtn.classList.add('playing');
            audioBtn.innerHTML = '🎵';
            isAudioPlaying = true;
        }
    });
}

/* 6. Scroll Spy Navigation */
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* 7. Contact Form Handler */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusMsg = document.getElementById('form-status-msg');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.innerHTML = 'Sending... 🚀';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerHTML = 'Message Sent! ✨';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            if (statusMsg) {
                statusMsg.style.display = 'block';
                statusMsg.style.color = '#10b981';
                statusMsg.innerText = 'Thank you for getting in touch! Anzala will respond to your message shortly.';
            }
            form.reset();

            setTimeout(() => {
                submitBtn.innerHTML = 'Send Message 🚀';
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                if (statusMsg) statusMsg.style.display = 'none';
            }, 4000);
        }, 1200);
    });
}

function viewProjectDetails(projectTitle) {
    alert(`Project Details for "${projectTitle}":\nDesigned & developed by Anzala Yameen as part of academic and software engineering internship projects.`);
}

function copyToClipboard(text, label) {
    navigator.clipboard.writeText(text).then(() => {
        alert(`${label} copied to clipboard: ${text}`);
    });
}
