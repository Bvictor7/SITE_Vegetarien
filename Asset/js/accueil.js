// Fonction de recherche de recettes
function searchRecipes() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase(); // Utilisation de la nouvelle ID 'search-bar'
    const recipes = document.querySelectorAll('.recipe-item'); // Sélectionne tous les éléments avec la classe 'recipe-item'

    recipes.forEach(recipe => {
        const recipeName = recipe.querySelector('h3').textContent.toLowerCase(); // Nom de la recette dans la balise <h3>
        const recipeDescription = recipe.querySelector('p').textContent.toLowerCase(); // Description dans la balise <p>

        if (recipeName.includes(searchInput) || recipeDescription.includes(searchInput)) {
            recipe.style.display = ''; // Affiche la recette
        } else {
            recipe.style.display = 'none'; // Cache la recette
        }
    });
}

// Ajouter un écouteur d'événement pour la saisie de texte dans le champ de recherche
const searchInput = document.getElementById('search-bar');
searchInput.addEventListener('input', searchRecipes);

// Fonction de gestion du bouton "Go to Top"
const goToTopBtn = document.getElementById('goToTopBtn');
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopBtn.style.display = 'block'; // Affiche le bouton "Go to Top" lorsque la page défile de 100px ou plus
    } else {
        goToTopBtn.style.display = 'none'; // Cache le bouton quand on est en haut de la page
    }
});

goToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Fait défiler la page en douceur jusqu'en haut
});
