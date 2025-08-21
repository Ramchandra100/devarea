/* === Thumb → main swap (per card) === */
document.querySelectorAll('.thumbs').forEach(group => {
  group.addEventListener('click', e => {
    if (e.target.tagName !== 'IMG') return;

    const card = e.target.closest('.fleet-card'); // stay inside this card
    const main = card.querySelector('.main-photo');

    main.src = e.target.src;

    group.querySelectorAll('img').forEach(i => i.classList.remove('active'));
    e.target.classList.add('active');
  });
});

/* === Lightbox (no change) === */
const lb = document.getElementById('lb'), lbImg = lb.querySelector('img');
document.querySelectorAll('.main-photo').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lb.style.display = 'flex';
  });
});
lb.addEventListener('click', () => (lb.style.display = 'none'));