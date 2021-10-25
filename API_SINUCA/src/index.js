const express = require('express');
const server = express();
const connection = require('./database/Database');
const router = require("./routes/routes")
const bodyParser = require("body-parser");
const cors = require('cors');

server.use(bodyParser.json());
server.use(cors());

connection.authenticate()
    .then(()=>{
        console.log("Conexão realizada com o MySQL")
    })
    .catch((erro)=>{console.log(erro)});

const TabelaDB = require("./models/componentes/TabelaDB");
const Times = require("./models/componentes/TimesDB");

server.use("/", router);
server.listen(3000, ()=>{
    console.log('RODANDO NA 3000')
});