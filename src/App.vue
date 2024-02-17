<template>
  <NavBar/>
  <h1>Universidad Central del Ecuador (UCE)</h1>
  <router-view></router-view>
  <h2>Todos los derechos reservados</h2>

  <!-- <Estudiante /> -->
</template>

<script>

import NavBar from './components/NavBar.vue';
import Estudiante from './pages/EstudiantePage.vue'

export default {
  name: 'App',
  components: {

    Estudiante,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.form {
    margin-top: 2rem;
    display: grid;
    padding: 1rem;
    background-color: #dda15e;
    border-radius: 2rem;

}

label {
    text-align: left;
}

input {
    background-color: #fefae0;
}
</style>
