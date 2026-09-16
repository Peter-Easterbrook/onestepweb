const CONFETTI_COUNT = 200;
const CONFETTI_DEFAULTS = {
  origin: { x: 0.06, y: 0.05 },
  angle: -15,
  drift: 1,
  colors: ['#235ac2', '#5384e0', '#95b4ec'],
};
const CONFETTI_BURSTS = [
  { ratio: 0.25, spread: 26, startVelocity: 55 },
  { ratio: 0.2, spread: 60 },
  { ratio: 0.35, spread: 100, decay: 0.91, scalar: 0.8 },
  { ratio: 0.1, spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 },
  { ratio: 0.1, spread: 120, startVelocity: 45 },
];

document.getElementById('pointingHand').addEventListener('mousedown', () => {
  if (typeof confetti !== 'function') return;
  CONFETTI_BURSTS.forEach(({ ratio, ...opts }) => {
    confetti({
      ...CONFETTI_DEFAULTS,
      ...opts,
      particleCount: Math.floor(CONFETTI_COUNT * ratio),
    });
  });
});
