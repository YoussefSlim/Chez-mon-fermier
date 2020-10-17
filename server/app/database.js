const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL,{
    define: {
      timestamps: true
    },
});

module.exports = sequelize;