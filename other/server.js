const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware pour parser les données POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques (comme ton soumettre.html et les assets)
app.use(express.static(path.join(__dirname, 'public')));

// Créer et ouvrir la base de données SQLite
const db = new sqlite3.Database('recettes.db', (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données :', err.message);
    } else {
        console.log('Connecté à la base de données SQLite.');
    }
});

// Route pour afficher la page de soumission de recette
app.get('/soumettre', (req, res) => {
    res.sendFile(path.join(__dirname, 'soumettre.html')); // Assurez-vous que soumettre.html est dans le bon répertoire
});

// Route pour gérer la soumission du formulaire
app.post('/soumettre', (req, res) => {
    const { 'recipe-name': name, 'recipe-description': description, ingredients, steps } = req.body;

    // Préparer et insérer les données dans la base de données SQLite
    const sql = 'INSERT INTO recettes (name, description, ingredients, steps) VALUES (?, ?, ?, ?)';
    db.run(sql, [name, description, ingredients, steps], function(err) {
        if (err) {
            console.error('Erreur lors de l\'ajout de la recette :', err.message);
            return res.status(500).send('Erreur lors de la soumission de la recette.');
        }
        res.send('Recette soumise avec succès!');
    });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

