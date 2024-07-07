<template>
  <v-app>
    <v-container>
        <router-view></router-view> <!-- Componente para renderizar as rotas -->
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
