const Sequelize = require('sequelize');

require('dotenv').config();

const get = () => {
    const dbName = 'funcionarios';
    const dbUser = 'admin';
    const dbPassword = '12345678';
    const dbHost = 'database-1.cjr2rlksblsf.us-east-1.rds.amazonaws.com';
    const dbPort = 3306;
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