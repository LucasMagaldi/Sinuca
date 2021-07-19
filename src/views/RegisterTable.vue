<template>
    <div>
        <br>
        <h1>CADATRO DE TABELAS</h1>
        <hr>
        <div class="columns is-centered">
            <div class="column is-half">
                
                <h4>Preencha as informações</h4><br>
                <h5>Tabela</h5>
                <input type="text" placeholder="Nome do time" class="input" v-model="tabela"><br>
                <h5>Premiação</h5>
                <input type="text" placeholder="Premio" class="input" v-model="premiacao"><br>
                <h5>Descrição da Pontuação</h5>
                <input type="text" placeholder="Descrição" class="input" v-model="descricao"><br>
                <h5>Pontuação máxima</h5>
                <input type="text" placeholder="Insira aqui" class="input" v-model="pontuacao"><br>
                <br>
                <div v-if="erro !=undefined">
                    <div class="notification is-danger">
                        <p>{{erro}}</p>
                        
                    </div>
                </div>
                <br>
                <button type="submit" class="button is-success" @click="RegisterTable" >Cadastrar</button>
            </div>
        </div> 
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                tabela: '',
                premiacao: '',
                descricao: '',
                pontuacao: '',
                erro: undefined
            }
        },
        methods:{
            RegisterTable(){
                axios.post('http://localhost:3000/table/new',{
                    nome: this.tabela,
                    premiacao: this.premiacao,
                    descricaoPontuacao: this.descricao,
                    pontuacaoLimite: this.pontuacao
                })
                  .then(res=>{
                      console.log(res)
                      this.$router.push({name: 'Tables'});
                  })
                  .catch(erro=>{
                      console.log(erro.response)
                      this.erro = erro.response.data.mensagem
                  })
            }
        }
    }
</script>

<style>

    
</style>