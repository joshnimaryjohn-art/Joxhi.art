function openPopup(id) {
  const overlay = document.getElementById('overlay');
  const popups = document.querySelectorAll('.popup');
  overlay.style.display = 'flex';
  popups.forEach(p => p.style.display = 'none');
  const active = document.getElementById(id);
  active.style.display = 'block';
  active.querySelector('.popup-content').scrollTop = 0;
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

function scrollPopup(id, amount) {
  const popup = document.getElementById(id);
  const content = popup.querySelector('.popup-content');
  content.scrollBy({ top: amount, behavior: 'smooth' });
}

function openImagePopup(src) {
  const popup = document.getElementById('imagePopup');
  const img = document.getElementById('fullImage');
  img.src = src;
  popup.style.display = 'flex';
}

function closeImagePopup() {
  document.getElementById('imagePopup').style.display = 'none';
}

/* CLOSE ON OUTSIDE CLICK */
document.getElementById('overlay').addEventListener('click', (e) => {
  if (e.target.id === 'overlay') closePopup();
});

document.getElementById('imagePopup').addEventListener('click', (e) => {
  if (e.target.id === 'imagePopup') closeImagePopup();
});
