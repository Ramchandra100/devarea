const WA_NUMBER = '918888668881';
const form = document.getElementById('contactForm');
const toast = document.getElementById('formToast');

// Validate phone
function validatePhone(phone) {
    return /^[0-9\s+\-()]{7,15}$/.test(phone);
}

// Validate email
function validateEmail(email) {
    if (!email) return true;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Build WhatsApp URL
function waLink(msg) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Open WhatsApp in new tab
function openWA(msg) {
    window.open(waLink(msg), '_blank');
}

// Collect form data
function getFormData() {
    return {
        name: form.name.value.trim(),
        phone: form.phone.value.trim(),
        email: form.email.value.trim() || '-',
        service: form.service.value.trim() || '-',
        message: form.message.value.trim() || '-',
        honeypot: form.company.value.trim()
    };
}

// Send form → WhatsApp
function sendFormToWA() {
    const data = getFormData();

    // Spam check
    if (data.honeypot) return;

    // Validation
    if (!data.name || !data.phone || !data.message || !validatePhone(data.phone) || !validateEmail(data.email)) {
        alert("Please fill all required fields correctly!");
        return false;
    }

    // WhatsApp message
    const text = `Hello Trip Triangles! I want to book a ride.
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service: ${data.service}
Message: ${data.message}`;

    openWA(text);
    toast?.classList.remove('d-none');
    form.reset();
    setTimeout(() => toast?.classList.add('d-none'), 4000);
}

// Form submit
form?.addEventListener('submit', function (e) {
    e.preventDefault();
    sendFormToWA();
});

// "Send to WhatsApp" button inside form
document.getElementById('waFromForm')?.addEventListener('click', sendFormToWA);

// Static WhatsApp buttons (on left / quick CTA) – generic message
document.querySelectorAll('.wa-button').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        // Only open a generic WhatsApp message, not form data
        openWA('Hello Trip Triangles! I want to book a cab. Please assist.');
    });
});
