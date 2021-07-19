<template>
  <div class="container">
    <link rel="stylesheet" href="../public/css/bootstrap.min.css">
    <br>
    <h1>HOME</h1>
    <hr>
    
    <br>
    <div class="columns is-centered">
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Jogador 1</th>
              <th>Jogador 2</th>
              <th>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="time in times" :key="time.id">
              <td>{{time.nome}}</td>
              <td>{{time.jogador1}}</td>
              <td>{{time.jogador2}}</td>
              <td>{{time.pontos}}</td>
            </tr>
          </tbody>
        </table>
      
          <div>
          <button class="button is-success"><a href="/register">Cadastrar seu time</a></button>
          </div>
      </div>
    </div>
    

  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    created(){
      axios.get("http://localhost:3000/home")
        .then(res=>{
          console.log(res.data.times);
          this.times = res.data.times;
          console.log(this.times)
        })
        .catch(erro=>{
          console.log(erro.response)
        });
    },
    data(){
      return{
        times: []
      }
    }
  }
</script>


<style>
  button a{
    text-decoration: none;
    color: #fff;
  }
  .container h1{
        color: #fff;
        font-size: 30px;
        font-weight: 700;
    }
    
  .table{
    margin: auto;
    width: 100vh;
    border-radius: 5px ;
  }
</style>