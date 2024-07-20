<template>
    <v-app>
        <div>
            <h1 class="text-center w-100 pb-5">Plano de Corte Balcão Banheiro reto </h1>
            <v-number-input type="number" label="altura">sad</v-number-input>
            <V-text-field label="Comprimento" ></V-text-field>
            <V-text-field label="Largura" ></V-text-field>
            
        </div>
    </v-app>
    
</template>
<script>
import { VNumberInput } from 'vuetify/labs/VNumberInput'

export default {
  components: {
    VNumberInput,
  },
}
</script>