function toggleTheme() {
    document.getElementById("mode").classList.toggle("dark");
}

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("mode").classList.toggle("dark");
}