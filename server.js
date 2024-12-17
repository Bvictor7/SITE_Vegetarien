const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); // Importer SQLite
const app = express();
const port = 3000;

// Créer ou ouvrir la base de données SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données SQLite :', err.message);
    } else {
        console.log('Connecté à la base de données SQLite');
        
        // Créer la table recettes si elle n'existe pas
        db.run(`
            CREATE TABLE IF NOT EXISTS recettes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nom_recette TEXT,
                description TEXT,
                ingredients TEXT,
                steps TEXT
            )
        `);
    }
});

// Middleware pour analyser les requêtes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route pour la soumission des recettes
app.post('/soumettre', (req, res) => {
    const { nom_recette, description, ingredients, steps } = req.body;

    const query = `INSERT INTO recettes (nom_recette, description, ingredients, steps) 
                   VALUES (?, ?, ?, ?)`;

    db.run(query, [nom_recette, description, ingredients, steps], function (err) {
        if (err) {
            console.error('Erreur lors de l\'insertion de la recette :', err.message);
            return res.status(500).send('Erreur lors de l\'insertion de la recette');
        }
        res.status(200).send('Recette soumise avec succès!');
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});


