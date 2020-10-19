require('dotenv').config();

const express = require('express');

const app = express();
//const session = require('express-session');

//the router
const router = require('./app/router');

const PORT = process.env.PORT || 5050;
//app.set('models', './app/models');
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
app..use(session({
    secret: process.env.APP_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: (1000*60*60*5)
    }
}));
// et hop, notre middleware magique
const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);
*/
// app.use(express.static( __dirname + './app/public' ));

app.use(express.json());
app.use(router);

// lancement du serveur
app.listen( PORT,  () => {
    console.log(`Listening on ${PORT}`);
  });