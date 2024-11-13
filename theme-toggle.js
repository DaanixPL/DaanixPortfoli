// Funkcja do ustawiania motywu i tekstu przycisku
function setTheme(themeName) {
    const mainElement = document.querySelector('main'); // Pobierz element <main>
    const themeToggleButton = document.getElementById('theme-toggle'); // Pobierz przycisk

    // Dodanie klasy motywu do <body> i <main>
    if (themeName === 'light-theme') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        if (mainElement) {
            mainElement.classList.add('light-theme');
            mainElement.classList.remove('dark-theme');
        }
        themeToggleButton.textContent = "Dark Mode";
    } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        if (mainElement) {
            mainElement.classList.add('dark-theme');
            mainElement.classList.remove('light-theme');
        }
        themeToggleButton.textContent = "Light Mode";
    }

    // Zapisz motyw w localStorage
    localStorage.setItem('theme', themeName);
}

// Funkcja do przełączania między motywami
function toggleTheme() {
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
