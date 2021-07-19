<template>
    <div class="container">
        <br>
        <h1 class="title">TABELAS</h1>
        <hr>

        <br>
    <div class="columns is-centered">
        <div class="column">
          <table class="table">
            <thead>
                <tr>
                <th>Numero da Tabela</th>
                <th>Tabela</th>
                <th>Premiação</th>
                <th>Descrição</th>
                <th>Pontuação Limite</th>
                <th>informações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tabela in tabelas" :key="tabela.id">
                <td>{{tabela.id}}</td>
                <td>{{tabela.nome}}</td>
                <td>{{tabela.premiacao}}</td>
                <td>{{tabela.descricaoPontuacao}}</td>
                <td>{{tabela.pontuacaoLimite}}</td>
                <td><button class="button is-success"><a :href="'/table/' + tabela.id">Ver</a></button></td>
                </tr>
            </tbody>
          </table>
      
          <div>
          <button class="button is-success"><a href="/register/table">Cadastrar nova tabela</a></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    
    export default{
        methods:{
           Info(id){
               console.log(id)
           }
        },
        created(){
            axios.get('http://localhost:3000/tables')
             .then(res=>{
                this.tabelas = res.data.tabelas;
                console.log(res.data)
                console.log(this.tabelas)
                
                })
             .catch(erro=>{
                console.log(erro.response)
                });
        },
        data(){
            return{
                tabelas: [],
                
            }
        }
    }
</script>

<style>

    .container h1{
        color: #fff;
        font-size: 30px;
        font-weight: 700;
    }

    table{
        border-radius: 5px;
    }
</style>
