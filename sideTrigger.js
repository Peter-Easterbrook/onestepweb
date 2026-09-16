const SITE = document.querySelector('.site');
const TRIGGER = document.querySelector('.trigger');

// Toggle the sidenav and keep aria-expanded in sync
TRIGGER.addEventListener('click', () => {
  const expanded = SITE.classList.toggle('reveal');
  TRIGGER.setAttribute('aria-expanded', expanded);
});
