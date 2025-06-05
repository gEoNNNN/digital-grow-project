export function setupUIAnimations() {
  document.addEventListener("DOMContentLoaded", function() {
    // About section
    const aboutParagraphs = document.querySelectorAll('.about_container p');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    aboutParagraphs.forEach(p => observer.observe(p));

    // Client cards
    const clientCards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    clientCards.forEach(card => cardObserver.observe(card));
  });
}