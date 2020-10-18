require('dotenv').config();

const express = require('express');

const app = express();

//le routage
const router = require('./app/router');

const PORT = process.env.PORT || 5050;

/*
// réglages des views pour le back-office
app.set('views', 'app/views');
app.set('view engine', 'ejs');
// les statiques
app.use(express.static('public'));
*/
/*
Enlever les comments quand ce sera bon
// on rajoute la gestion des POST body
app.use(express.urlencoded({extended: true}));
// et on rajoute la gestion des sessions
const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'Un Super Secret'
}));
// et hop, notre middleware magique
const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);
*/

//app.use(express.json());
app.use(router);

// lancement du serveur
app.listen( PORT,  () => {
    console.log(`Listening on ${PORT}`);
  });