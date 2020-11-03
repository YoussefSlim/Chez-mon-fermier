if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
<<<<<<< HEAD
=======

>>>>>>> 7dbd2cf49fa11b3c67093307dd0c7ba951b8ec4e
  require("dotenv").config();
}
console.log(process.env.CLIENT_URL);
const express = require("express");
const cors = require("cors");
const sanitizeData = require("./app/middlewares/sanitizeData");
const app = express();
const corsConfig = require("./app/config/cors");

<<<<<<< HEAD
const session = require('express-session');
=======
const session = require("express-session");
>>>>>>> 7dbd2cf49fa11b3c67093307dd0c7ba951b8ec4e

//the router
const router = require("./app/router");
const multer = require("multer");
const bodyParser = multer();

<<<<<<< HEAD
app.use(cors(corsConfig));

 app.use((req, res, next) => {
    // on autorise explicitement le domaine du front
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // on autorise le partage du cookie
    res.header("Access-Control-Allow-Credentials", true);
    // on autorise le partage de ressources entre origines
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Set-Cookie"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, OPTIONS, PUT, DELETE"
    );
    next();
  });
  app.set("models", "/app/models");
  // réglages des views pour le back-office
  
  app.set("view engine", "ejs");
  app.set('views', __dirname + '/app/views');
  app.set('static', __dirname + '/app/public');

  // les statiques
  //app.use(express.static('public'));
  app.use(express.static(__dirname + "/app/public"));


const PORT = process.env.PORT || 5050;


//app.use(cors());
=======
// cors

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8080",
  })
);

//session

app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// header

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept, Set-Cookie"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");

  next();
});

// // app.use(
// //   cors({
// //     credentials: true,
// //     origin: "http://localhost:8080",
// //   })
// // );
// app.use(cors(corsConfig));
// // app.use(cors());
//  app.use((req, res, next) => {
// //   // on autorise explicitement le domaine du front
// //   res.header("Access-Control-Allow-Origin", "*");
// //   // on autorise le partage du cookie
// //   res.header("Access-Control-Allow-Credentials", true);
// //   // on autorise le partage de ressources entre origines
//  res.header(
//      "Access-Control-Allow-Headers",
//      "Origin, X-Requested-With, Content-Type, Accept, Set-Cookie"
//    );
// //   res.header(
// //     "Access-Control-Allow-Methods",
// //     "GET, POST, PATCH, OPTIONS, PUT, DELETE"
// //   );
//   next();
// // });
app.use(express.static(__dirname + "./app/public"));

const PORT = process.env.PORT || 5050;

app.set("models", "./app/models");
/**/
// réglages des views pour le back-office
app.set("views", "app/views");
app.set("view engine", "ejs");
// les statiques
app.use(express.static("public"));
>>>>>>> 7dbd2cf49fa11b3c67093307dd0c7ba951b8ec4e

// on rajoute la gestion des POST body
app.use(express.urlencoded({ extended: true }));
// et on rajoute la gestion des sessions

// et hop, notre middleware magique
/*const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);*/
app.use(express.json());
app.use(bodyParser.none());
app.use(sanitizeData);
app.use(router);

<<<<<<< HEAD
app.use(session({
  secret: 'keyboard cat',
  resave:true,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
  },
}));
=======
// app.use(
//   session({
//     secret: "keyboard cat",
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       httpOnly: true,
//       secure: false,
//       maxAge: 1000 * 60 * 60 * 24,
//     },
//   })
// );
>>>>>>> 7dbd2cf49fa11b3c67093307dd0c7ba951b8ec4e

// lancement du serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

// toutes les promesses qu'on n'entoure pas d'un try/catch seront automatiquement stoppées ici si elles sont rejetées
process.on("unhandledRejection", (err) => {
  console.log("Interception d'un rejet de promesse");
  console.error(err);
});
module.exports = app;
<<<<<<< HEAD
=======

>>>>>>> 7dbd2cf49fa11b3c67093307dd0c7ba951b8ec4e
