// Dummy Doctor Data
const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Jenkins",
        specialty: "Cardiology",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurology",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrics",
        image: "https://images.unsplash.com/photo-1594824436998-058d085987d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "General Medicine",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    const doctorsGrid = document.getElementById('doctors-grid');
    const doctorSelect = document.getElementById('doctor');
    const bookingForm = document.getElementById('booking-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');
    
    // 1. Dynamically render doctors
    function renderDoctors() {
        doctors.forEach(doc => {
            // Add to grid
            const card = document.createElement('div');
            card.className = 'doctor-card';
            card.innerHTML = `
                <img src="${doc.image}" alt="${doc.name}" class="doctor-image" loading="lazy">
                <div class="doctor-info">
                    <h3 class="doctor-name">${doc.name}</h3>
                    <span class="doctor-specialty">${doc.specialty}</span>
                    <a href="#appointment" class="btn btn-secondary" onclick="selectDoctor('${doc.name}')">Book Appointment</a>
                </div>
            `;
            doctorsGrid.appendChild(card);

            // Add to select dropdown
            const option = document.createElement('option');
            option.value = doc.name;
            option.textContent = `${doc.name} (${doc.specialty})`;
            doctorSelect.appendChild(option);
        });
    }

    renderDoctors();

    // 2. Form Submission Handler
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        // Show success modal
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset form
        bookingForm.reset();
    });

    // Close Modal
    closeModalBtn.addEventListener('click', () => {
        successModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modal on outside click
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            successModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Global function to pre-select doctor in form
function selectDoctor(doctorName) {
    const doctorSelect = document.getElementById('doctor');
    for (let i = 0; i < doctorSelect.options.length; i++) {
        if (doctorSelect.options[i].value === doctorName) {
            doctorSelect.selectedIndex = i;
            break;
        }
    }
}
