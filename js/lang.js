let currentLang = 'en'; // Langue par défaut

function updateContent(lang) {
  currentLang = lang;
  const translations = window.translations[lang];
  if (!translations) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  // Met à jour le label du bouton de langue
  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang.toUpperCase();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateContent(currentLang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'fr' : currentLang === 'fr' ? 'nl' : 'en';
      updateContent(nextLang);
    });
  }

  // About toggle simple
  const aboutBtn = document.getElementById('about-btn');
  const aboutBox = document.getElementById('about-box');
  if (aboutBtn && aboutBox) {
    aboutBtn.addEventListener('click', () => {
      aboutBox.classList.toggle('hidden');
    });
  }
});
