const Sequelize = require('sequelize');
const connection = require('../../database/Database');

var TabelaDB  = connection.define('tabela', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    premiacao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descricaoPontuacao:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    pontuacaoLimite:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

TabelaDB.sync({force: false});

module.exports = TabelaDB;
