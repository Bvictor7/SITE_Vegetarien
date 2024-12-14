//      Menu hamburger

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuIcon && mobileMenu) {
        // Bascule le menu au clic sur l'icône hamburger
        menuIcon.addEventListener("click", (event) => {
            event.stopPropagation(); // Empêche la propagation du clic
            mobileMenu.classList.toggle("active");
        });

        // Ferme le menu au clic ailleurs
        document.addEventListener("click", (event) => {
            if (!mobileMenu.contains(event.target) && !menuIcon.contains(event.target)) {
                mobileMenu.classList.remove("active");
            }
        });
    } else {
        console.error(
            "L'élément avec id 'menu-icon' ou 'mobile-menu' est introuvable dans le DOM."
        );
    }
});





