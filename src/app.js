const express = require("express");

// créer une instance d'express

const app = express();
const PORT = 9000;

// configurer le chemin des vues, quand la méthode render demande un affichage d'un fichier c'est de ce chemin qu'il va se servir
app.set("views", "./src/views");
// configurer le type de fichier utiliser par le moteur de rendu
app.set("view engine", "ejs");

// express est basé sur l'utilisation de middleware 
// va s'executer à chaque cycle de request/response
app.use(express.static("public"));

// get est une méthode de l'instance app
// on va parler de verbe ou méthode HTTP
// on cherche à "obtenir" une url spécifique ( un endpoint) ensuite on effectue des instructions en rapport, là en l'occurence quand il reçoit l'url "/" on lui demande de répondre avec un code status 200 (tout va bien) et de rendre (afficher la page home), on ne spécifie pas l'extension du fichier car onj l'a fait lors de la configuration du moteur de rendu ligne 10 !
app.get("/", (req, res) => {
    console.log("on est sur la home !!!");
    res.status(200).render("home");
});

app.get("/shop", (req, res) => {
    console.log("on est sur le shop !!!");
});



app.listen(PORT, ()=> console.log(`running on http://localhost:${PORT}`));