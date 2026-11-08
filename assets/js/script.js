document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    // Efek navigasi transparan di atas, dan berwarna solid saat di-scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-lg");
            navbar.classList.add("bg-gray-900/95");
            navbar.classList.remove("bg-gray-900/90");
        } else {
            navbar.classList.remove("shadow-lg");
            navbar.classList.remove("bg-gray-900/95");
            navbar.classList.add("bg-gray-900/90");
        }
    });

    // Skrip tambahan untuk menu hamburger di tampilan mobile dapat ditambahkan di sini nantinya
});