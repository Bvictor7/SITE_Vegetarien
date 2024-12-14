// Fonction pour afficher ou cacher le bouton Go to Top
window.onscroll = function() {
    var goToTopBtn = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goToTopBtn.style.display = "block"; // Afficher le bouton
    } else {
        goToTopBtn.style.display = "none"; // Cacher le bouton
    }
};

// Fonction pour revenir en haut de la page
document.getElementById("goToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};