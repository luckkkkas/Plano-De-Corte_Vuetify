<template>
  <v-app>
    <v-container>
        <router-view>
          <Roupeiro/>
        </router-view> <!-- Componente para renderizar as rotas -->
      </v-container>
  </v-app>
</template>

<script>
import Banheiro from './views/Banheiro.vue';
import CozinhaRow from './views/CozinhaRow.vue';
import Home from './views/Home.vue'
import Roupeiro from './views/Roupeiro.vue';
import Roupeiro from './views/Roupeiro.vue';
export default {
  components: { Home, Roupeiro, CozinhaRow, Banheiro},
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