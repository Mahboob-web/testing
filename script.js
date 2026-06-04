const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.textContent = 'Message sent';
      button.setAttribute('disabled', 'true');
      setTimeout(() => {
        button.textContent = 'Send message';
        button.removeAttribute('disabled');
        form.reset();
      }, 1700);
    }
  });
}
