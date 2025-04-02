// You can add custom JavaScript here for advanced features
// Smooth Scroll on Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Dynamic Pricing Update Based on Service Area Selection
const pricingDetails = {
    'London Airport': 50,
    'Manchester Airport': 40,
    'London Railway Station': 30
};

// Update pricing when user selects an area
const serviceAreaSelect = document.querySelector('[name="service_area"]');
const pricingDisplay = document.querySelector('#pricing');

serviceAreaSelect.addEventListener('change', updatePricing);

function updatePricing() {
    const selectedArea = serviceAreaSelect.value;
    const price = pricingDetails[selectedArea] || 0;
    const pricingArea = document.querySelector(`#pricing .area[data-area="${selectedArea}"]`);
    
    if (pricingArea) {
        pricingArea.querySelector('p').textContent = `£${price}`;
    }
}

// Form Validation
const bookingForm = document.querySelector('form');
const formInputs = bookingForm.querySelectorAll('input, select');
const errorMessages = [];

bookingForm.addEventListener('submit', function(e) {
    errorMessages.length = 0; // Clear previous error messages

    formInputs.forEach(input => {
        if (input.type !== 'submit' && !input.value) {
            errorMessages.push(`${input.name} is required`);
        }
    });

    // If there are validation errors, prevent form submission
    if (errorMessages.length > 0) {
        e.preventDefault();
        showErrorMessages();
    }
});

// Show error messages below the form
function showErrorMessages() {
    const errorDiv = document.querySelector('.form-errors');
    errorDiv.innerHTML = '';
    errorMessages.forEach(message => {
        const p = document.createElement('p');
        p.textContent = message;
        errorDiv.appendChild(p);
    });
}

// Success Alert (Custom Popup

document.body.appendChild(successAlert);

// Close alert functionality
const closeAlertButton = successAlert.querySelector('.close-alert');
closeAlertButton.addEventListener('click', () => {
    successAlert.style.display = 'none';
});

// Display alert after successful form submission
if (document.querySelector('.alert')) {
    setTimeout(() => {
        successAlert.style.display = 'block';
    }, 1000);
}

// Toggle visibility of the social links on hover
const socialLinks = document.querySelector('.social-links');

socialLinks.addEventListener('mouseover', () => {
    socialLinks.style.opacity = '1';
});

socialLinks.addEventListener('mouseout', () => {
    socialLinks.style.opacity = '0.7';
});

// Prevent form submission if the input is invalid (Client-side validation)
function isValidInput(input) {
    if (input.name === 'whatsapp' && !/^(\+44|\d{4})\d{6,}$/.test(input.value)) {
        return false; // Invalid WhatsApp format
    }
    return true;
}

// Add transition effect on all button clicks (soft fade-in)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transition = 'all 0.3s ease-out';
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('booking.php' , {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        const alertBox = document.getElementById('alert-message');
        alertBox.style.display = 'block';
        alertBox.textContent = data;
        alertBox.classList.add('success'); // Add a success class for styling
        this.reset(); // Reset the form fields
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

