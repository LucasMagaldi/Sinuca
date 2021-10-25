const TimesDB = require("../models/componentes/TimesDB");
const TabelaDB = require("../models/componentes/TabelaDB")

class Times{
    async CadastroTime(time, jogador1, jogador2, idTabela){
        var mensagem;
        try{
            await TimesDB.create({
                 nome: time,
                 jogador1: jogador1,
                 jogador2: jogador2,
                 pontos: 0,
                 tabelaId: idTabela
            });
            return mensagem = "Cadastrado!"
        }
        catch(erro){
            console.log(erro);
        }
    }

    async NomeTime(nome){
        try{
            var timeExiste = await TimesDB.findOne({where:{nome:nome}});
            return timeExiste
        }
        catch(erro){
            console.log(erro)
        }
    }

    async ListaTimes(){
        try{
            var listaTimes = await TimesDB.findAll();   
            return listaTimes; 
        }
        catch(erro){
            console.log(erro)
        }
    }

    async SomarPonto(id){
        try{
          var resultado = await TimesDB.findOne({where:{id:id}});
          var resultadoPontos = resultado.pontos
          var pontuacao = await TimesDB.update({pontos: resultadoPontos+1},
            {where:{id:id}}
            );
           return pontuacao
           
        }
        catch(erro){
            console.log(erro)
        }
    }

    async Vencedor(id){
        var time = await TimesDB.findOne({where: {id: id}});
        var pontosTime = time.pontos;
        var tabelaId = time.tabelaId
        var tabela = await TabelaDB.findOne({where: {id: tabelaId}})
        var pontuacaoTabela = tabela.pontuacaoLimite

        if(pontosTime == pontuacaoTabela ){
            return time
        }
    }
}

module.exports = new Times();