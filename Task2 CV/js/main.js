/**
 * Task 2: Simple CV/Resume Card - Main Logic (Anzala Yameen)
 * Theme Switcher (Default Light Mode), ScrollSpy, Skills Filtering, Progress Animations, Form Validation & Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize App Modules
  initThemeSwitcher();
  renderEducation();
  renderSkills('all');
  renderExperience();
  renderProjects();
  initSkillsFilter();
  initScrollObserver();
  initScrollSpy();
  initContactForm();
  initPrintTrigger();
  initMobileMenu();
});

/* --------------------------------------------------------------------------
   1. Theme Switcher (Default Light Mode)
   -------------------------------------------------------------------------- */
function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // By default it must be light mode unless explicitly changed by user
  const savedTheme = localStorage.getItem('cv_theme');
  const currentTheme = savedTheme || 'light';
  setTheme(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cv_theme', theme);
    
    // Update button icon (Sun icon for dark theme, Moon icon for light theme)
    if (theme === 'dark') {
      themeIcon.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
        </svg>
      `;
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Theme');
    } else {
      themeIcon.innerHTML = `
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      `;
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Theme');
    }
  }
}

/* --------------------------------------------------------------------------
   2. Render Education Timeline
   -------------------------------------------------------------------------- */
function renderEducation() {
  const container = document.getElementById('education-timeline');
  if (!container || !cvData.education) return;

  container.innerHTML = cvData.education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-meta">
        <span class="timeline-date">${edu.period}</span>
        <span class="timeline-badge">${edu.badge}</span>
      </div>
      <h3 class="timeline-title">${edu.degree}</h3>
      <div class="timeline-subtitle">${edu.institution} — GPA: ${edu.gpa}</div>
      <p class="timeline-description">${edu.description}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   3. Render Work Experience Timeline
   -------------------------------------------------------------------------- */
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container || !cvData.experience) return;

  container.innerHTML = cvData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-meta">
        <span class="timeline-date">${exp.period}</span>
        <span class="timeline-badge">${exp.type}</span>
      </div>
      <h3 class="timeline-title">${exp.role}</h3>
      <div class="timeline-subtitle">${exp.company}</div>
      <ul class="timeline-bullets">
        ${exp.highlights.map(point => `<li>${point}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Render & Filter Skills
   -------------------------------------------------------------------------- */
function renderSkills(categoryFilter = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container || !cvData.skills) return;

  const filtered = categoryFilter === 'all' 
    ? cvData.skills 
    : cvData.skills.filter(s => s.category === categoryFilter);

  container.innerHTML = filtered.map(skill => `
    <div class="skill-card" data-category="${skill.category}">
      <div class="skill-info">
        <span class="skill-name">
          ${getSkillCategoryIcon(skill.category)}
          ${skill.name}
        </span>
        <span class="skill-percentage">${skill.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" style="width: 0%;" data-target-width="${skill.level}%"></div>
      </div>
    </div>
  `).join('');

  // Animate skill bars after DOM insert
  setTimeout(animateSkillBars, 100);
}

function getSkillCategoryIcon(cat) {
  if (cat === 'frontend') return `<span style="color:#059669;">⚡</span>`;
  if (cat === 'backend') return `<span style="color:#0d9488;">⚙️</span>`;
  if (cat === 'tools') return `<span style="color:#7c3aed;">🛠️</span>`;
  return `<span style="color:#10b981;">💡</span>`;
}

function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-filter');
      renderSkills(cat);
    });
  });
}

function animateSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  bars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-target-width');
    bar.style.width = targetWidth;
  });
}

/* --------------------------------------------------------------------------
   5. Render Projects & Modal Handler
   -------------------------------------------------------------------------- */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container || !cvData.projects) return;

  container.innerHTML = cvData.projects.map(proj => `
    <div class="project-card">
      <div class="project-image-wrapper">
        <img src="${proj.image}" alt="${proj.title}" class="project-image" loading="lazy">
      </div>
      <div class="project-body">
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <button class="btn btn-outline btn-sm" onclick="openProjectModal('${proj.id}')">
            View Details
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

window.openProjectModal = function(projId) {
  const proj = cvData.projects.find(p => p.id === projId);
  if (!proj) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-content-area');
  
  modalBody.innerHTML = `
    <div style="margin-bottom:1.2rem; border-radius: var(--radius-md); overflow:hidden; max-height:220px;">
      <img src="${proj.image}" alt="${proj.title}" style="width:100%; height:100%; object-fit:cover;">
    </div>
    <h2 style="font-family:var(--font-heading); font-size:1.4rem; margin-bottom:0.4rem; color:var(--text-primary);">${proj.title}</h2>
    <div style="display:flex; gap:0.4rem; margin-bottom:1rem; flex-wrap:wrap;">
      ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
    <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6; margin-bottom:1.5rem;">
      ${proj.details}
    </p>
    <div style="display:flex; gap:0.75rem; justify-content:flex-end;">
      <button class="btn btn-outline btn-sm" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modalOverlay.classList.add('active');
};

window.closeProjectModal = function() {
  const modalOverlay = document.getElementById('project-modal');
  modalOverlay.classList.remove('active');
};

/* --------------------------------------------------------------------------
   6. ScrollSpy Navigation
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], aside[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
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

/* --------------------------------------------------------------------------
   7. IntersectionObserver for Scroll Animations
   -------------------------------------------------------------------------- */
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('skills-grid')) {
          animateSkillBars();
        }
      }
    });
  }, { threshold: 0.1 });

  const skillsContainer = document.getElementById('skills-grid');
  if (skillsContainer) observer.observe(skillsContainer);
}

/* --------------------------------------------------------------------------
   8. Contact Form Validation & Toast Notification
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');

    // Reset errors
    document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Name is required');
      isValid = false;
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
      showError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }

    if (!msgInput.value.trim() || msgInput.value.trim().length < 10) {
      showError(msgInput, 'Message must be at least 10 characters long');
      isValid = false;
    }

    if (isValid) {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();
        showToast('Message sent successfully! Anzala will get back to you soon.');
      }, 1000);
    }
  });

  function showError(input, msg) {
    const parent = input.closest('.form-group');
    parent.classList.add('error');
    const errorEl = parent.querySelector('.form-error');
    if (errorEl) errorEl.textContent = msg;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="22" height="22" fill="none" stroke="#10b981" stroke-width="2.5" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
      <path d="M22 4L12 14.01l-3-3"></path>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* --------------------------------------------------------------------------
   9. Print / PDF Resume Trigger
   -------------------------------------------------------------------------- */
function initPrintTrigger() {
  const printBtn = document.getElementById('print-resume-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* --------------------------------------------------------------------------
   10. Mobile Menu Drawer Toggle
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }
}
