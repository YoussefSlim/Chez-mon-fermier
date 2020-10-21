if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');

const app = express();
//const session = require('express-session');

//the router
const router = require('./app/router');
const session = require('express-session');
const PORT = process.env.PORT || 5050;

//app.set('models', './app/models');
/*
// réglages des views pour le back-office
app.set('views', 'app/views');
app.set('view engine', 'ejs');
// les statiques
app.use(express.static('public'));
*/

// on rajoute la gestion des POST body
app.use(express.urlencoded({extended: true}));
// et on rajoute la gestion des sessions

app.use(session({
    secret: 'keyboard cat',
    resave:false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// et hop, notre middleware magique
/*const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);*/

// app.use(express.static( __dirname + './app/public' ));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5050');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
next();
});
app.use(express.json());
app.use(router);

// lancement du serveur
app.listen( PORT,  () => {
    console.log(`Listening on ${PORT}`);
  });

  // toutes les promesses qu'on n'entoure pas d'un try/catch seront automatiquement stoppées ici si elles sont rejetées
process.on('unhandledRejection', (err) => {
    console.log('Interception d\'un rejet de promesse');
    console.error(err);
});
module.exports = app;