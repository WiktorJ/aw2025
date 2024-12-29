const translations = {
    pl: {
        'wedding-announcement': 'Pobierają się!',
        'ceremony-title': 'Ceremonia',
        'reception-title': 'Przyjęcie',
        'travel-title': 'Informacje o Dojeździe',
        'faq-title': 'Często Zadawane Pytania',
        'dress-code-q': 'Jaki jest dress code?',
        'dress-code-a': 'Strój formalny. Panowie proszeni są o garnitury, a panie o sukienki koktajlowe lub stroje wieczorowe.',
        'ceremony-venue': 'Miejsce Ceremonii',
        'reception-venue': 'Miejsce Przyjęcia',
        'venues-travel': 'Lokalizacje i Dojazd',
    },
    el: {
        'wedding-announcement': 'Παντρεύονται!',
        'ceremony-title': 'Τελετή',
        'reception-title': 'Δεξίωση',
        'travel-title': 'Πληροφορίες Ταξιδιού',
        'faq-title': 'Συχνές Ερωτήσεις',
        'dress-code-q': 'Ποιος είναι ο κώδικας ένδυσης;',
        'dress-code-a': 'Επίσημο ένδυμα. Οι άνδρες παρακαλούνται να φορούν κοστούμια και οι γυναίκες κοκτέιλ φορέματα ή βραδινά.',
        'ceremony-venue': 'Χώρος Τελετής',
        'reception-venue': 'Χώρος Δεξίωσης',
        'venues-travel': 'Τοποθεσίες και Πληροφορίες',
    }
};

function changeLanguage(lang) {
    document.documentElement.lang = lang;

    // Update all elements with data-pl and data-el attributes
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });

    // Update elements using the translations object
    Object.keys(translations[lang]).forEach(key => {
        const elements = document.getElementsByClassName('translate-' + key);
        for (let element of elements) {
            element.textContent = translations[lang][key];
        }
    });

    // Store the language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Set initial language based on stored preference or default to Polish
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage') || 'pl';
    changeLanguage(storedLang);
});
