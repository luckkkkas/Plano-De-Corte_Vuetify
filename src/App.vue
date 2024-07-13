<template>
  <v-app>
    <v-container>
        <router-view>
          <Home />
        </router-view> <!-- Componente para renderizar as rotas -->
      </v-container>
  </v-app>
</template>

<script>
import Home from './views/Home.vue'
import Roupeiro from './views/Roupeiro.vue'
export default {
  components: { Home },
  // Sua configuração padrão aqui
}
</script>
<style>
  *{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>