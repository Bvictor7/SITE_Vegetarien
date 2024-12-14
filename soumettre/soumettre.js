document.getElementById('submitForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    const nom_recette = document.getElementById('nom_recette').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    try {
        const response = await fetch('/soumettre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nom_recette, ingredients, instructions })
        });

        const result = await response.text();
        alert(result); // Affiche un message de succès ou d'erreur
        document.getElementById('submitForm').reset();
    } catch (error) {
        console.error('Erreur :', error);
        alert('Erreur lors de l’envoi du formulaire.');
    }
});

