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

    let isSending = false;

    function sendEmail(event) {
      event.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('mesaj');
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      const submitBtn = event.target.querySelector('input[type="submit"]');
      const formMessage = event.target.querySelector('#formMessage');
      if (submitBtn) submitBtn.disabled = true;
      if (formMessage) formMessage.textContent = '';

      // Reset previous error styles
      [nameInput, emailInput, messageInput].forEach(input => {
        input.style.borderColor = '#e0b1cb';
        input.style.backgroundColor = '';
      });

      let hasError = false;
      const errorInputs = [];
      if (!name) {
        nameInput.style.borderColor = 'red';
        nameInput.style.backgroundColor = '#ffeaea';
        hasError = true;
        errorInputs.push(nameInput);
      }
      if (!email) {
        emailInput.style.borderColor = 'red';
        emailInput.style.backgroundColor = '#ffeaea';
        hasError = true;
        errorInputs.push(emailInput);
      }
      if (!message) {
        messageInput.style.borderColor = 'red';
        messageInput.style.backgroundColor = '#ffeaea';
        hasError = true;
        errorInputs.push(messageInput);
      }

      if (hasError) {
        if (formMessage) {
          formMessage.style.color = 'red';
          formMessage.style.fontSize = '0.85em';
          formMessage.textContent = 'Completați toate câmpurile obligatorii!';
          setTimeout(() => {
            formMessage.textContent = '';
            // Remove red outline after 3 seconds
            errorInputs.forEach(input => {
              input.style.borderColor = '#e0b1cb';
              input.style.backgroundColor = '';
            });
          }, 3000);
        }
        setTimeout(() => {
          if (submitBtn) submitBtn.disabled = false;
        }, 10000);
        return;
      }

      const params = { name, email, message };
      emailjs.send("service_7hku12j", "template_9n0794f", params)
        .then(function(response) {
          if (formMessage) {
            formMessage.style.color = 'green';
            formMessage.style.fontSize = '0.85em';
            formMessage.textContent = 'Email trimis cu succes!';
          }
          setTimeout(() => {
            if (formMessage) formMessage.textContent = '';
            modal.classList.remove('open');
            if (contactForm) contactForm.reset();
          }, 1000);
          // Keep the button disabled for 10 seconds after send
          setTimeout(() => {
            if (submitBtn) submitBtn.disabled = false;
          }, 10000);
        }, function(error) {
          if (formMessage) {
            formMessage.style.color = 'red';
            formMessage.style.fontSize = '0.85em';
            formMessage.textContent = 'Trimiterea emailului a eșuat. Încercați din nou.';
            setTimeout(() => {
              formMessage.textContent = '';
            }, 3000);
          }
          setTimeout(() => {
            if (submitBtn) submitBtn.disabled = false;
          }, 10000);
        });
    }

    if (window.emailjs && typeof window.emailjs.init === 'function') {
      window.emailjs.init({
        publicKey: "Tu2zTkVL7zPu63uip",
      });
    }
  });
}