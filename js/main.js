/**
 * Ristorante Pizzeria Sperone D'Italia - Main JavaScript
 * 100% Vanilla JS: Translation Engine (IT/EN), Dark Mode Switcher, Mobile Navigation, Video Helpers
 */

(function () {
  'use strict';

  // --- 1. Translation Dictionaries ---
  const translations = {
    it: {
      navFood: "Specialità",
      navMenu: "Menu",
      navExperience: "Esperienza",
      navVisit: "Visita",
      theme: "Cambia tema",
      call: "Chiama",
      since: "L’emozione di piatti unici",
      sea: "Specialità di Mare",
      handmade: "Impasto, calore, carattere",
      pizza: "Pizza Artigianale",
      discover: "Scopri il mare",
      menu: "Esplora il menu",
      emotion: "L’emozione di piatti unici",
      identityTag: "La nostra identità",
      identityTitle: "Due anime, una tavola italiana.",
      identityBody: "Sapori di mare generosi, pizza fragrante e un’accoglienza semplice e autentica. Sperone D’Italia è il posto dove ogni tavolo trova il suo momento.",
      sinceLabel: "anni di ospitalità",
      souls: "anime",
      seaPizza: "mare e pizza",
      platterAlt: "Grande selezione di specialità di mare servita al tavolo",
      pastaAlt: "Linguine ai frutti di mare con cozze e gamberi",
      menuTag: "Il gusto prima di tutto",
      menuTitle: "Il menu che mette d’accordo tutti.",
      menuBody: "Dal mare alla pizzeria, fino al dolce: scopri la proposta completa del ristorante senza prezzi o piatti inventati.",
      menuSea: "Cucina di mare",
      menuSeaText: "Piatti ricchi, profumi mediterranei e materia prima protagonista.",
      menuPizza: "Pizzeria",
      menuPizzaText: "Pizza ben cotta, croccante e generosamente farcita.",
      menuDessert: "Dolci",
      menuDessertText: "Il finale della casa, pensato per chiudere la cena con dolcezza.",
      fullMenu: "Apri il menu completo",
      menuImageAlt: "Piatto di linguine con gamberi, cozze e vongole",
      familyTag: "A misura di famiglia",
      familyTitle: "Voi vi godete la cena. Loro si godono il gioco.",
      familyBody: "L’area bimbi con playground interattivo rende la serata più leggera per i genitori e più divertente per i piccoli.",
      interactive: "Playground interattivo",
      fun: "Spazio per divertirsi",
      relax: "Più relax a tavola",
      reviewsTag: "Parola agli ospiti",
      reviewsTitle: "Qui si torna volentieri.",
      googleReviews: "Vedi su Google Maps",
      review1: "Bellissima esperienza! Cibo ottimo, staff preparato, efficiente e molto cordiale.",
      review2: "Ambiente semplice ma accogliente, servizio velocissimo, pizza buona, fritto misto ottimo e dolci top.",
      review3: "Angolo separato per far giocare i bambini, personale simpatico e preparato. Ottima anche la pizza gluten free.",
      galleryTag: "Dalla nostra cucina",
      galleryTitle: "Piatti che arrivano al tavolo con carattere.",
      follow: "Seguici su Instagram",
      visitTag: "Organizza la tua visita",
      visitTitle: "Il tuo tavolo ti aspetta.",
      visitBody: "Per prenotare, chiamaci direttamente. Per raggiungerci, apri le indicazioni su Google Maps.",
      callNow: "Chiama e prenota",
      directions: "Indicazioni",
      location: "Sarezzo, provincia di Brescia",
      hours: "Orari",
      wed: "Mercoledì",
      thu: "Giovedì",
      fri: "Venerdì",
      sat: "Sabato",
      sun: "Domenica",
      mon: "Lunedì",
      tue: "Martedì",
      langBtn: "IT | EN"
    },
    en: {
      navFood: "Specialties",
      navMenu: "Menu",
      navExperience: "Experience",
      navVisit: "Visit",
      theme: "Switch theme",
      call: "Call",
      since: "The emotion of unique dishes",
      sea: "Seafood Specialties",
      handmade: "Dough, heat, character",
      pizza: "Artisan Pizza",
      discover: "Discover seafood",
      menu: "Explore the menu",
      emotion: "The emotion of unique dishes",
      identityTag: "Our identity",
      identityTitle: "Two souls, one Italian table.",
      identityBody: "Generous seafood flavours, fragrant pizza and simple, genuine hospitality. Sperone D’Italia is where every table finds its moment.",
      sinceLabel: "years of hospitality",
      souls: "souls",
      seaPizza: "seafood and pizza",
      platterAlt: "Large selection of seafood specialties served at the table",
      pastaAlt: "Seafood linguine with mussels and prawns",
      menuTag: "Taste comes first",
      menuTitle: "A menu for everyone.",
      menuBody: "From seafood to pizza and dessert: discover the restaurant’s complete offering, with no invented dishes or prices.",
      menuSea: "Seafood cuisine",
      menuSeaText: "Generous dishes, Mediterranean aromas and ingredients at centre stage.",
      menuPizza: "Pizzeria",
      menuPizzaText: "Well-baked, crisp pizza with generous toppings.",
      menuDessert: "Desserts",
      menuDessertText: "A house-made finale to end dinner on a sweet note.",
      fullMenu: "Open the full menu",
      menuImageAlt: "Linguine with prawns, mussels and clams",
      familyTag: "Made for families",
      familyTitle: "You enjoy dinner. They enjoy playtime.",
      familyBody: "The kids’ area with an interactive playground makes evenings more relaxing for parents and more fun for little ones.",
      interactive: "Interactive playground",
      fun: "Room to have fun",
      relax: "More relaxed dining",
      reviewsTag: "From our guests",
      reviewsTitle: "A place worth returning to.",
      googleReviews: "View on Google Maps",
      review1: "A wonderful experience! Excellent food, efficient, knowledgeable and very friendly staff.",
      review2: "Simple but welcoming atmosphere, very fast service, good pizza, excellent mixed fry and top desserts.",
      review3: "A separate corner for children to play, friendly and knowledgeable staff. The gluten-free pizza is excellent too.",
      galleryTag: "From our kitchen",
      galleryTitle: "Dishes served with real character.",
      follow: "Follow us on Instagram",
      visitTag: "Plan your visit",
      visitTitle: "Your table is waiting.",
      visitBody: "To reserve, call us directly. To find us, open directions in Google Maps.",
      callNow: "Call to reserve",
      directions: "Directions",
      location: "Sarezzo, Brescia province",
      hours: "Opening hours",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
      mon: "Monday",
      tue: "Tuesday",
      langBtn: "EN | IT"
    }
  };

  // --- 2. State Management ---
  let currentLang = localStorage.getItem('sperone_lang') || 'it';
  let isDarkMode = localStorage.getItem('sperone_theme') === 'dark' || 
                   (!('sperone_theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // --- 3. DOM Elements ---
  const btnLang = document.getElementById('btnLang');
  const btnTheme = document.getElementById('btnTheme');
  const iconTheme = document.getElementById('iconTheme');

  // --- 4. Language Engine ---
  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'it';
    currentLang = lang;
    localStorage.setItem('sperone_lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Update image alts
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) {
        el.setAttribute('alt', t[key]);
      }
    });

    // Update aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) {
        el.setAttribute('aria-label', t[key]);
      }
    });

    // Update Lang button text
    if (btnLang) {
      btnLang.textContent = t.langBtn;
    }
  }

  function toggleLanguage() {
    applyLanguage(currentLang === 'it' ? 'en' : 'it');
  }

  // --- 5. Dark Mode Engine ---
  function applyTheme(isDark) {
    isDarkMode = isDark;
    localStorage.setItem('sperone_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (iconTheme) {
        // Sun Icon
        iconTheme.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        `;
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (iconTheme) {
        // Moon Icon
        iconTheme.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        `;
      }
    }
  }

  function toggleTheme() {
    applyTheme(!isDarkMode);
  }

  // --- 6. Event Listeners Initialization ---
  function init() {
    // Apply initial theme & lang
    applyTheme(isDarkMode);
    applyLanguage(currentLang);

    // Lang toggle listener
    if (btnLang) {
      btnLang.addEventListener('click', toggleLanguage);
    }

    // Theme toggle listener
    if (btnTheme) {
      btnTheme.addEventListener('click', toggleTheme);
    }

    // Update copyright year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Ensure videos autoplay properly
    document.querySelectorAll('video').forEach(video => {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay may need user gesture on some browsers
      });
    });
  }

  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
