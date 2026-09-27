const cardItems = document.querySelectorAll('.photo-card, .wish-card, .time-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cardItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(18px)';
  item.style.transition = `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`;
  observer.observe(item);
});

const sparkle = (event) => {
  const burst = document.createElement('span');
  burst.textContent = '✨';
  burst.className = 'sparkle';
  burst.style.left = `${event.clientX}px`;
  burst.style.top = `${event.clientY}px`;
  document.body.appendChild(burst);

  setTimeout(() => burst.remove(), 700);
};

document.addEventListener('click', sparkle);

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
  .sparkle {
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    font-size: 1.2rem;
    animation: sparkleUp 0.7s ease forwards;
  }

  @keyframes sparkleUp {
    0% { opacity: 1; transform: translate(-50%, -50%) scale(0.8); }
    100% { opacity: 0; transform: translate(-50%, -120%) scale(1.5); }
  }
`;
document.head.appendChild(sparkleStyle);
