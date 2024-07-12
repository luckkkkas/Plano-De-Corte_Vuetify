<template>
    <v-app>
      <div class="d-flex justify-space-around">
        <div class=" d-col  w-100 w-sm-75 w-lg-50">
          <h1 class="my-15">Plano de Corte do Roupeiro</h1>
          <v-form @submit.prevent="atribuirValores">  
            
            <v-select
              v-model="inputs.tamponamento"
              label="Tamponamento"
              :items="['parede 2 lados', 'parede 1 lados', 'Sem parede', 'closet']"
            />
            <v-select
              label="Acabamento Superior"
              :items="['até o teto', 'Acabamento simples']"
              v-model="inputs.acSuperior" 
            />
            <v-text-field 
              type="number" 
              label="Largura (mm)"
              hint="Informe a Largura em MM"
              v-model="inputs.largura"
            />
            <v-text-field 
              type="number" 
              label="Altura (mm)"
              hint="Informe a Altura em MM"
              v-model="inputs.altura"
            />
            <v-text-field 
              type="number" 
              label="espessura do Tamponamento (mm)"
              hint="Informe a Altura em MM"
              v-model="inputs.espessura"
            />
            <v-text-field 
              type="number" 
              label="Profundidade (mm)"
              hint="Informe a Profundidade em MM"
              v-model="inputs.profundidade"
            />
            <v-select
              v-model="inputs.nVaos" 
              label="Nº de Vãos" 
              :items="['1','2','3']" 
            />
            <v-select
              v-model="inputs.nGavetas" 
              label="Nº de Gavetas" 
              :items="['1','2','3','4','5','6','7','8','9','10','11','12']" 
            />
            <v-select
              v-model="inputs.nPortas"
              label="Nº de portas" 
              :items="['2','3']" 
            />
            <div class="d-flex justify-space-around">
              <Button @click="limpar" label="Limpar"/>
              <v-btn type="submit" color="primary">Calcular</v-btn>
            </div>
          </v-form>
        </div>
        <div v-if="resultado">
          <h2>Resultado</h2>
          <pre>{{ resultado }}</pre>
        </div>
      </div>
    </v-app>
  </template>
  
<script>
  import { cortarRoupeiro } from '@/utils/cortarRoupeiro.ts'
  export default {
    data() {
      return {
        inputs: {
          tamponamento: '',
          acSuperior: '',
          largura: '',
          altura: '',
          profundidade: '',
          nVaos: '',
          nGavetas: '',
          nPortas: '',
          espessura:'',
        },
        resultado: null, 
    };
  }, 
  methods: {   
   atribuirValores(){
      const params = {
          tamponamento: this.inputs.tamponamento,
          acSuperior: this.inputs.acSuperior,
          largura: this.inputs.largura,
          altura: this.inputs.altura,
          profundidade: this.inputs.profundidade,
          nVaos: this.inputs.nVaos,
          nGavetas: this.inputs.nGavetas,
          nPortas: this.inputs.nPortas,
          espessuraTamponamento: this.inputs.espessura, 
      };
      this.resultado = cortarRoupeiro(params);
    },
    limpar(resultado){
      this.resultado = ''
    }
  }
};
</script>  