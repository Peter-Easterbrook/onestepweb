(() => {
  const currentTime = document.getElementById('time');
  const render = () => {
    const d = new Date();
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const hours = d.getHours() % 12 || 12;
    const ampm = d.getHours() >= 12 ? 'pm' : 'am';
    currentTime.innerHTML = `${hours}<span>:</span>${minutes} ${ampm}`;
  };
  render();
  setInterval(render, 1000);
})();
