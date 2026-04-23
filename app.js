(function () {
  const links = window.TECH_EDZ_THEME_LINKS || {};

  document.querySelectorAll('[data-theme-link]').forEach((card) => {
    const key = card.getAttribute('data-theme-link');
    const url = links[key] || '#';
    card.href = url;

    if (url === '#') {
      card.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }
  });
})();
