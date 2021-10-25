var Times = require('../models/Times');
var Tabela = require("../models/Tabela");

class TimesController{
    async NovoTime(req,res){
        var{time, jogador1, jogador2, idTabela} = req.body;
        if(time == undefined || time == '' || time == " "){
            res.status(400);
            res.json({mensagem: "Prencha o nome do time"});
        }
        if(jogador1 == undefined || jogador1 == '' || jogador1 == " "){
            res.status(400);
            res.json({mensagem: "Prencha o nome do jogador1"});
        }
        if(jogador2 == undefined || jogador2 == '' || jogador2 == " "){
            res.status(400);
            res.json({mensagem: "Prencha o nome do jogador2"});
        }
        if(jogador2 == jogador1){
            res.status(400);
            res.json({mensagem: "Os nomes não podem ser iguais", status: 400});
        }
        if(idTabela == undefined || idTabela == '' || idTabela == " "){
            res.status(400);
            res.json({mensagem: "Informe a tabela que irá jogar"});
        }
        else{
           var timeExiste = await Times.NomeTime(time);
           if(timeExiste != null){
               res.status(400);
               res.json({mensagem: 'Time já cadastrado!', status: 400})
           }
           else{
              await Times.CadastroTime(time, jogador1, jogador2, idTabela);
              res.status(200) ;
              res.json({mensagem: "Sucesso no Cadastro, boa sorte!", status: 200})
           }  
        }   
    }

    async ListaDeTimes(req,res){
        var lista = await Times.ListaTimes();
        res.status(200)
        res.json({times: lista, status: 200})
    }

    async Tabelas(req,res){
        var {id} = req.params
        var times = await Tabela.TimesPertencentes(id);
        res.json({times: times, status:200})

    }

    async Pontuar(req,res){
        var {id} = req.body;
        var pontuacao = await Times.SomarPonto(id);
        var ganhador = await Times.Vencedor(id);
        if(ganhador != null){
            res.json({vencedor: ganhador})
        }
        res.json({pontos: pontuacao})

        

    }

}

module.exports = new TimesController();