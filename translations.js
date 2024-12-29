const translations = {
    pl: {
        'wedding-announcement': 'Pobierają się!',
        'ceremony-title': 'Ceremonia',
        'reception-title': 'Przyjęcie',
        'place-title': 'Miejsce Slubu i Wesela',
        'faq-title': 'Często Zadawane Pytania',
        'dress-code-q': 'Jaki jest dress code?',
        'dress-code-a': 'Strój formalny. Panowie proszeni są o garnitury, a panie o sukienki koktajlowe lub stroje wieczorowe.',
        'ceremony-venue': 'Miejsce Ceremonii',
        'reception-venue': 'Miejsce Przyjęcia',
        'dress-code-title': 'Dress Code',
        'ladies-heading': 'Dla Pań',
        'gentlemen-heading': 'Dla Panów',
        'ladies-description': 'Długie suknie koktajlowe w pastelowych lub jasnych kolorach. Prosimy unikać białego koloru oraz bardzo jasnych odcieni, które mogą wyglądać jak biel na zdjęciach.',
        'gentlemen-description': 'Jasny garnitur w kolorze beżowym lub jasnoszarym. Preferowana jasna koszula i pasujący krawat lub mucha. Możliwe są również kamizelki.',
        'accommodation-title': 'Zakwaterowanie',
        'extended-stay': 'Przedłużenie Pobytu',
        'hotel-contact': 'Kontakt do Hotelu',
        'phone': 'Telefon',
        'travel-to-samos-title': 'Jak Dotrzeć na Samos',
        'air-travel': 'Podróż Samolotem',
        'sea-travel': 'Podróż Promem',
        'samos-airport': 'Port Lotniczy Samos',
        'flight-options': 'Opcje Lotów',
        'ferry-connections': 'Połączenia Promowe',
        'samos-ports': 'Porty na Samos'
    },
    el: {
        'wedding-announcement': 'Παντρεύονται!',
        'ceremony-title': 'Τελετή',
        'reception-title': 'Δεξίωση',
        'place-title': 'Χώρος Γάμου',
        'faq-title': 'Συχνές Ερωτήσεις',
        'dress-code-q': 'Ποιος είναι ο κώδικας ένδυσης;',
        'dress-code-a': 'Επίσημο ένδυμα. Οι άνδρες παρακαλούνται να φορούν κοστούμια και οι γυναίκες κοκτέιλ φορέματα ή βραδινά.',
        'ceremony-venue': 'Χώρος Τελετής',
        'reception-venue': 'Χώρος Δεξίωσης',
        'dress-code-title': 'Dress Code',
        'ladies-heading': 'Για τις Κυρίες',
        'gentlemen-heading': 'Για τους Κυρίους',
        'ladies-description': 'Μακριά κοκτέιλ φορέματα σε παστέλ ή ανοιχτά χρώματα. Παρακαλούμε αποφύγετε το λευκό και πολύ ανοιχτές αποχρώσεις που μπορεί να φαίνονται λευκές στις φωτογραφίες.',
        'gentlemen-description': 'Ανοιχτόχρωμο κοστούμι σε μπεζ ή ανοιχτό γκρι. Προτιμάται ανοιχτόχρωμο πουκάμισο και ασορτί γραβάτα ή παπιγιόν. Τα γιλέκα είναι επίσης αποδεκτά.',
        'accommodation-title': 'Διαμονή',
        'extended-stay': 'Επέκταση Διαμονής',
        'hotel-contact': 'Επικοινωνία με το Ξενοδοχείο',
        'phone': 'Τηλέφωνο',
        'travel-to-samos-title': 'Πώς να Φτάσετε στη Σάμο',
        'air-travel': 'Ταξίδι με Αεροπλάνο',
        'sea-travel': 'Ταξίδι με Πλοίο',
        'samos-airport': 'Αεροδρόμιο Σάμου',
        'flight-options': 'Επιλογές Πτήσεων',
        'ferry-connections': 'Ακτοπλοϊκές Συνδέσεις',
        'samos-ports': 'Λιμάνια της Σάμου'

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
