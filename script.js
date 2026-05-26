// Modal Functions
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function showSignup() {
    document.getElementById('signupModal').style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function switchModal(from, to) {
    closeModal(from);
    document.getElementById(to).style.display = 'block';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    let loginModal = document.getElementById('loginModal');
    let signupModal = document.getElementById('signupModal');
    
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signupModal) {
        signupModal.style.display = 'none';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('signupModal').style.display = 'none';
    }
});

// Form Handlers
function handleLogin(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.elements[0].value;
    const password = form.elements[1].value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }
    
    alert(`Welcome back! Logged in as ${email}`);
    closeModal('loginModal');
    form.reset();
}

function handleSignup(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const password = form.elements[2].value;
    const confirmPassword = form.elements[3].value;
    const agreed = form.elements[4].checked;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    if (!agreed) {
        alert('Please agree to the Terms of Service');
        return;
    }
    
    alert(`Welcome ${name}! Your account has been created.`);
    closeModal('signupModal');
    form.reset();
}

function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const message = form.elements[2].value;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email');
        return;
    }
    
    alert(`Thank you ${name}! We'll get back to you soon at ${email}`);
    form.reset();
}

function selectPlan(plan) {
    alert(`You selected the ${plan} plan!\n\nRedirecting to checkout...`);
    // In a real app, this would redirect to a payment page
}

// Scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe pricing cards
document.querySelectorAll('.pricing-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Active navigation highlight
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '#333');
        this.style.color = '#667eea';
        
        setTimeout(() => {
            this.style.color = '#333';
        }, 500);
    });
});

// Smooth scroll active navigation
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '#333';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#667eea';
        }
    });
});

// Add animation to pricing on scroll
document.addEventListener('DOMContentLoaded', function() {
    console.log('TrialHub website loaded successfully!');
});
