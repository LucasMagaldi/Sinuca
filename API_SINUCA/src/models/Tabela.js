
const TabelaDB = require('./componentes/TabelaDB');
const TimesDB = require('./componentes/TimesDB')

class Tabela {
    async CadastroTabela(nome, premiacao, descricaoPontuacao, pontuacaoLimite){
        try{
            await TabelaDB.create({
                nome: nome,
                premiacao: premiacao,
                descricaoPontuacao: descricaoPontuacao,
                pontuacaoLimite: pontuacaoLimite          
            });
        }
        catch(erro){
            console.log(erro)
        }
    }

    async NomeTabela(nome){
        try{
            var tabelaExiste = await TabelaDB.findOne({where:{nome: nome}});
            return tabelaExiste;
        }
        catch(erro){
            console.log(erro)
        }
    }

    async ListaTabela(){
        try{
            var listaTabela = await TabelaDB.findAll();
            return listaTabela;
        }
        catch(erro){
            console.log(erro)
        }
    }

    async TimesPertencentes(id){
        try{
            var times = await TimesDB.findAll({where:{tabelaId:id}});
            return times
        }
        catch(erro){
            console.log(erro)
        }
    }
}

module.exports = new  Tabela();