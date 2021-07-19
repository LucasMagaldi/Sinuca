<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
 

      <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Home
            </a>

            <a class="navbar-item" href="/tables">
              Tabelas
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Mais
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item" href="/regras">
                  Regras
                </a>
              </div>
            </div>
          </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" href="/regras">
                <strong>Conheça as regras </strong>
              </a>  
            </div>
          </div>
         </div>
        </div>
    </nav>  
    <div id="app">
      <router-view/>
    </div>
    <footer>
        Feito pelo Desenvolvedor <span>🤠</span> Lucas Magaldi<br/>
        informações obtidas no GitHub
      </footer> 
  </div>
  
</template>

<style>
.container{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #1f2120;
  width: 100%;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
footer{
  font-size: 18px;
  margin: 50px 0;
  text-align: center;
}
footer span{
  font-size: 22px;
}
</style>
