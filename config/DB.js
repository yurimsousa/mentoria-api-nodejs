const Sequelize = require('sequelize');

require('dotenv').config();

const get = () => {
    const dbName = process.env.DB_NAME;
    const dbUser = process.env.DB_USER;
    const dbPassword = '';
    const dbHost = process.env.DB_HOST;
    const dbPort = 3307;
    const dbDialect = 'mysql';
   console.log(dbName);
    return {
      dialect: dbDialect,
      host: dbHost,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      port: dbPort,
      logging: false,
      define: {
        underscored: true,
        underscoredAll: true,
        freezeTableName: true,
        timestamps: true,
      },
    };
  };
   
  module.exports = {
    get,
    Op: Sequelize.Op,
    Sequelize,
  };