const { Client } = require('pg');

// il faut définir les informations de connexion dans un .env
const client = new Client();

client.connect();

module.exports = client;