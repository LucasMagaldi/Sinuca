<template>
    <div>
        <br>
        <h1 class="title">REGISTRO DE JOGADORES</h1>
        <hr>
        <div class="columns is-centered">
            <div class="column is-half">
                
                <h4>Preencha as informações</h4><br>
                <h5>Nome do time</h5>
                <input type="text" placeholder="Nome do time" class="input" v-model="nome"><br>
                <h5>Jogador 1</h5>
                <input type="text" placeholder="Nome do Jogador 1" class="input" v-model="jogador1"><br>
                <h5>Jogador 2</h5>
                <input type="text" placeholder="Nome do Jogador 2" class="input" v-model="jogador2"><br>
                <br>
                <h5>N° da tabela que irá jogar</h5>
                <input type="text" placeholder="Tabela" class="input" v-model="tabela"><br>
                <br>
                <div v-if="erro !=undefined">
                    <div class="notification is-danger">
                        <p>{{erro}}</p>
                        
                    </div>
                </div>
                <br>
                <button type="submit" class="button is-success" @click="Register">Cadastrar</button>
            </div>
        </div>
        
    </div>

</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                nome: '',
                jogador1: '', 
                jogador2: '',
                tabela: '',
                erro: undefined
            }
        },

        methods:{
            Register(){
                axios.post("http://localhost:3000/create", {
                    time: this.nome,
                    jogador1: this.jogador1,
                    jogador2: this.jogador2,
                    idTabela: this.tabela
                }).then(res=>{
                    console.log(res)
                    this.$router.push({name: 'Home'});
                }).catch(erro=>{
                    console.log(erro.response)
                    this.erro = erro.response.data.mensagem
                    
                })
                console.log(this.nome);
                console.log(this.jogador1);
                console.log(this.jogador2);
            }
        }
    }

</script>

<style>
    .title{
        
        color: #fff;
        font-size: 30px;
        font-weight: 700;
    
    }
</style>