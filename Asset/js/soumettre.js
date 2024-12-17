document.getElementById('submitForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs des champs du formulaire
    const nom_recette = document.getElementById('recipe-name').value;
    const description = document.getElementById('recipe-description').value;
    const ingredients = document.getElementById('ingredients').value;
    const steps = document.getElementById('steps').value;

    // Créer un objet avec les données de la recette
    const recette = {
        nom_recette,
        description,
        ingredients,
        steps
    };

    try {
        // Envoyer les données au serveur via une requête POST
        const response = await fetch('http://localhost:3000/soumettre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recette) // Convertir l'objet en JSON pour l'envoyer
        });

        const result = await response.text();
        alert(result); // Afficher un message de succès ou d'erreur
        document.getElementById('submitForm').reset(); // Réinitialiser le formulaire
    } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        alert('Erreur lors de l’envoi de la recette.');
    }
});







