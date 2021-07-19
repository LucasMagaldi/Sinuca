<template>
    <div class="container">
        <h1>TABELA</h1>
        <hr>
        <div class="columns is-centered">
            <div class="column">
                <table class="table">
                    <thead>
                        <tr>
                        <th>Time</th>
                        <th>Jodador 1</th>
                        <th>Jogador 2</th>
                        <th>Pontuação</th>
                        <th>Pontuar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="time in timesTabela" :key="time.id">
                        <td>{{time.nome}}</td>
                        <td>{{time.jogador1}}</td>
                        <td>{{time.jogador2}}</td>
                        <td :value="time.id" id="valorId">{{time.pontos}}</td>
                        <td><button class="button is-success" @click="Pontuar(time.id)">1 Ponto</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        methods:{
            Pontuar(id){
                console.log(id)
                axios.put('http://localhost:3000/table', {
                    id: id
                })
                .then(res=>{
                    console.log(res)
                })
                .catch(erro =>{
                    console.log(erro.response)
                })
                
            }
        },
        created(){
            var link = window.location.href;
            var url_api = link.replace("8080", "3000");
            console.log(url_api)
            axios.get(url_api)
            .then(res=>{
                this.timesTabela = res.data.times;
                console.log(this.timesTabela)
                this.numeroTabela = this.timesTabela[0].tabelaId
            })
            .catch(erro=>{
                console.log(erro.response)
            });
        },
        data(){
            return{
                timesTabela: [],
                numeroTabela: 0
            }
        }
    }
</script>


<style>

</style>