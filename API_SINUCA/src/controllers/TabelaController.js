const TabelaDB = require("../models/componentes/TabelaDB");
const Tabela = require("../models/Tabela");

class TabelaController{
    async NovaTabela(req,res){
        var {
            nome, 
            premiacao,
            descricaoPontuacao,
            pontuacaoLimite
        } = req.body;

        if(nome == undefined || nome == '' || nome == " "){
            res.status(400);
            res.json({mensagem: "Prencha o nome"});
        }
        if(premiacao == undefined || premiacao == '' || premiacao == " "){
            res.status(400);
            res.json({mensagem: "Prencha a premiação"});
        }
        if(descricaoPontuacao == undefined || descricaoPontuacao == '' || descricaoPontuacao == " "){
            res.status(400);
            res.json({mensagem: "Prencha a descrição"});
        }
        if(pontuacaoLimite == undefined || pontuacaoLimite == '' || pontuacaoLimite == " "){
            res.status(400);
            res.json({mensagem: "Prencha a pontuação limite"});
        }
        else{
            var tabelaExiste = await Tabela.NomeTabela(nome);
            if(tabelaExiste != null){
                res.status(400);
                res.json({mensagem: 'Tabela já cadastrada!', status: 400})
            }
            else{
                await Tabela.CadastroTabela(nome, premiacao,descricaoPontuacao,pontuacaoLimite);
                res.status(200);
                res.json({mensagem: "Tabela Cadastrada!", status: 200})
            }
            
        }
    }

    async ListaDeTabelas(req,res){
        var lista = await Tabela.ListaTabela();
        res.status(200)
        res.json({tabelas: lista, status: 200})
    }

    
}

module.exports = new TabelaController();    