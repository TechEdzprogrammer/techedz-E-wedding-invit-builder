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

(function () {
  const priceMap = {
    signature: '₱800',
    classic: '₱1,800',
    booklet: '₱1,200',
    personal: '₱2,500'
  };

  document.querySelectorAll('[data-theme-link]').forEach((card) => {
    const key = card.getAttribute('data-theme-link');
    const body = card.querySelector('.theme-body');
    if (!body || !priceMap[key]) return;

    const price = document.createElement('div');
    price.className = 'theme-price';
    price.textContent = `Starting at ${priceMap[key]}`;

    const link = body.querySelector('.theme-link');
    if (link) {
      body.insertBefore(price, link);
    } else {
      body.appendChild(price);
    }
  });
})();
