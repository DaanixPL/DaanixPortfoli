// Funkcja do ustawiania motywu
function setTheme(themeName) {
    console.log("Ustawianie motywu:", themeName);

    const mainElement = document.querySelector('main'); // Pobierz element <main>

    // Dodanie klasy motywu do <body> i <main>
    if (themeName === 'light-theme') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');

        // Dodaj klasę light-theme do <main>
        if (mainElement) {
            mainElement.classList.add('light-theme');
            mainElement.classList.remove('dark-theme');
        }
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');

        // Dodaj klasę dark-theme do <main>
        if (mainElement) {
            mainElement.classList.add('dark-theme');
            mainElement.classList.remove('light-theme');
        }
    }

    // Zapisz motyw w localStorage
    localStorage.setItem('theme', themeName);
}

// Funkcja do przełączania między motywami
function toggleTheme() {
    console.log("Przełączanie motywu...");
    if (document.body.classList.contains('light-theme')) {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
}

// Sprawdź motyw w localStorage przy załadowaniu strony
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else {
    // Ustaw domyślny motyw na ciemny, jeśli nie zapisano żadnego motywu
    setTheme('dark-theme');
}

// Przypisanie funkcji toggleTheme do przycisku zmiany motywu
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
