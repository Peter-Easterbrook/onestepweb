// Spread the emblem's letters evenly around a circle
(() => {
  const element = document.querySelector('.emblem');
  if (!element) return;
  const text = element.textContent;
  element.textContent = '';
  [...text].forEach((letter, i) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.transform = `rotateZ(${(360 / text.length) * i}deg)`;
    element.appendChild(span);
  });
})();
