const Sequelize = require("sequelize");
const config = require('database/config');
const connection = createConnection();

function createConnection(){
  if(process.env.DB_IN_MEMORY == 'true'){
    return new Sequelize({
      dialect: process.env.DB_DIALECT,
      storage: process.env.DB_PATH
    });

  }else{
    return new Sequelize(config.development.database, config.development.username, config.development.password, {
      host: config.development.host,
      dialect: config.development.dialect
    });
  }
}

module.exports = connection;