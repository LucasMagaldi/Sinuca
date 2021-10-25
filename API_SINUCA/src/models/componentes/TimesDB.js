const Sequelize = require('sequelize');
const connection = require('../../database/Database');
const TabelaDB = require('./TabelaDB');


var TimesDB = connection.define('times',{
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    jogador1:{
        type: Sequelize.STRING,
        allowNull: false
    },
    jogador2:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pontos:{
        type: Sequelize.TINYINT,
        allowNull: false 
    }
});

TimesDB.belongsTo(TabelaDB);
TimesDB.sync({force: false});

module.exports = TimesDB;