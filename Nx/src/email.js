export function setupModal() {
  document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModal');

    document.querySelectorAll('a, button').forEach(el => {
      if (
        el.textContent.trim().toLowerCase() === 'contacte' ||
        el.textContent.trim().toLowerCase() === 'contacteaza-ne'
      ) {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.add('open');
        });
      }
    });

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('open');
      });
    }

    const contactForm = document.querySelector('.modal_form_card form');
    if (contactForm) {
      contactForm.addEventListener('submit', sendEmail);
    }

    function sendEmail(event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('mesaj').value.trim();
      const submitBtn = event.target.querySelector('input[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      if (name && email && message) {
        const params = { name, email, message };
        emailjs.send("service_7hku12j", "template_9n0794f", params)
          .then(function(response) {
            alert('Email sent successfully!');
            modal.classList.remove('open');
            if (submitBtn) submitBtn.disabled = false;
          }, function(error) {
            alert('Failed to send email. Please try again.');
            if (submitBtn) submitBtn.disabled = false;
          });
      } else {
        alert('Please fill in all fields.');
        if (submitBtn) submitBtn.disabled = false;
      }
    }

    if (window.emailjs && typeof window.emailjs.init === 'function') {
      window.emailjs.init({
        publicKey: "Tu2zTkVL7zPu63uip",
      });
    }
  });
}