const shareToggle = document.querySelector('.share__toggle');
const shareMenu = document.getElementById('share-menu');

function setShareOpen(isOpen) {
  shareToggle.setAttribute('aria-expanded', String(isOpen));
  shareMenu.hidden = !isOpen;
}

shareToggle.addEventListener('click', () => {
  const isOpen = shareToggle.getAttribute('aria-expanded') === 'true';
  setShareOpen(!isOpen);
});

// Close with Escape (and give focus back to the button) or by clicking elsewhere
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !shareMenu.hidden) {
    setShareOpen(false);
    shareToggle.focus();
  }
});

document.addEventListener('click', (event) => {
  const clickedInsideShare = event.target.closest('.share');
  if (!clickedInsideShare) {
    setShareOpen(false);
  }
});
