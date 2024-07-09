<template>
    <v-app>
      <div class="d-flex justify-space-around">
        <div class=" d-col  w-100 w-sm-75 w-lg-50">
          <h1 class="my-15">Plano de Corte do Roupeiro</h1>
          <v-form @submit.prevent="atribuirValores">  
            <SelectInput 
              v-model="inputs.tamponamento" 
              label="Tamponamento" 
              :items="['parede 2 lados', 'parede 1 lados', 'closet']" 
              />
            <SelectInput
              v-model="inputs.acSuperior" 
              label="Acabamento Superior"
              :items="['até o teto', 'Acabamento simples']"
            />
            <InputNumber
              v-mode.number="inputs.largura" 
              label="Largura (mm)"
            />
            <InputNumber
              v-model.number="inputs.altura" 
              label="Altura (mm)"
            />
            <InputNumber 
              v-model.number="inputs.profundidade"
              id="profundidade" 
              label="Profundidade (mm)"
            />
            <SelectInput
              v-model="inputs.nVaos" 
              label="Nº de Vãos" 
              :items="['1','2','3']" 
            />
            <SelectInput
              v-model="inputs.nGavetas" 
              label="Nº de Gavetas" 
              :items="['1','2','3','4','5','6','7','8','9','10','11','12']" 
            />
            <SelectInput 
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
          largura: 0,
          altura: 0,
          profundidade: 0,
          nVaos: '',
          nGavetas: '',
          nPortas: '',
        },
        resultado: null
    };
  }, 
  methods: {
   
   atribuirValores(){
      console.log(this.inputs)
      const params = {
          tamponamento: this.inputs.tamponamento,
          acSuperior: this.inputs.acSuperior,
          largura: this.inputs.largura,
          altura: this.inputs.altura,
          profundidade: this.inputs.profundidade,
          nVaos: this.inputs.nVaos,
          nGavetas: this.inputs.nGavetas,
          nPortas: this.inputs.nPortas, 
      };
      this.resultado = cortarRoupeiro(params);
    },
    limpar(resultado){
      this.resultado = ''
    }
  }
};
</script>  