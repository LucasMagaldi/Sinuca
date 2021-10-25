const express = require('express');
const router = express.Router();
const TimesController = require("../controllers/TimesController");
const TabelaController = require('../controllers/TabelaController');
const TabelaDB = require('../models/componentes/TabelaDB');


router.post("/create", TimesController.NovoTime);
router.get("/home", TimesController.ListaDeTimes);
router.post("/table/new", TabelaController.NovaTabela);
router.get('/tables', TabelaController.ListaDeTabelas);
router.get('/table/:id', TimesController.Tabelas); 
router.put('/table', TimesController.Pontuar );


module.exports = router;