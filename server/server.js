if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const sanitizeData = require('./app/middlewares/sanitizeData');
const app = express();
//const session = require('express-session');

//the router
const router = require('./app/router');
const session = require('express-session');
const multer = require('multer');
//const bodyParser = multer();

app.use(session({
    secret: 'keyboard cat',
    name: 'sessionId',
    resave:true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    },
}));



app.set('models', './app/models');
/**/
// réglages des views pour le back-office
app.set('views', 'app/views');
app.set('view engine', 'ejs');
// les statiques
app.use(express.static('public'));
//app.use(cors());
// Par exemple, je ne veux autoriser l'accès que depuis localhost, et mon serveur AWS
app.use( cors({
       credentials: true,
    origin: ['http://localhost:5050', 'ec2-3-93-241-49.compute-1.amazonaws.com:5050']
}));

// middleware urlencoded (pour les body sur les routes POST et PATCH)
app.use(express.urlencoded({extended: true}));
// et on rajoute la gestion des sessions
const PORT = process.env.PORT || 5050;


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
// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !

app.use( multer().none() );
app.use(sanitizeData);
app.use(router);

// permet d'ajouter une sécurité en "cachant" que l'application tourne sur un server Express et donc plus difficile de lancer des attaques spécifiquement ciblées
app.disable('x-powered-by');

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