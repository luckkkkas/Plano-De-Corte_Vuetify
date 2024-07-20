<template>
  <v-app>
    <div class="w-100">
      <h1>Plano de corte balcão banheiro reto</h1>
      <div>
        <v-text-field v-model.number="comprimento" type="number" label="Comprimento (mm)" />
        <v-text-field v-model.number="altura" type="number" label="Altura (mm)" />
        <v-text-field v-model.number="largura" type="number" label="Largura (mm)" />
        <v-text-field v-model.number="nGavetas" type="number" label="Nº gavetas" />
        <v-text-field v-model.number="portas" type="number" label="Portas "/>
        <v-text-field v-model.number="espTamponamento" type="number" label="Espessura do Tamponamento (mm)"/>
        <v-text-field v-model.number="espCorpo" type="number" label="Espessura do corpo (mm)"/>
        <div class="d-flex flex-column flex-lg-row justify-space-around">
          <v-btn color="">Limpar</v-btn>
          <v-btn color="success" @click="cortarBanheiro">Cortar</v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex flex-xm-column" v-if="resultado">
      <h1>resultado</h1>
      <table class="w-50">
        <thead class="text-center">
          <tr class="pa-3">
            <th>Quantidade</th>
            <th>Comprimento</th>
            <th>largura</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(valores, index) in valoresCorpo" :key="index">
            <td>{{ valores.Quantidade }}</td>
            <td>{{ valores.comprimento }}</td>
            <td>{{ valores.largura }}</td>
            <td>{{ valores.nome }}</td>
          </tr>
        </tbody>
      </table>
      <table class="w-50">
        <thead>
          <tr>
            <th>Quantidade</th>
            <th>Comprimento</th>
            <th>largura</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(valores, index) in valoresTampo" :key="index">
            <td>{{ valores.Quantidade }}</td>
            <td>{{ valores.comprimento }}</td>
            <td>{{ valores.largura }}</td>
            <td>{{ valores.nome }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { id } from 'vuetify/locale';

const resultado = ref(1)


const comprimento = ref()
const altura = ref()
const largura = ref()
const nGavetas = ref(3)
const portas = ref(1)
const espTamponamento = ref(30);
const espCorpo = ref(15);
const valoresCorpo = ref([]);
const valoresTampo = ref([]);

function cortarBanheiro(){
  cortarCorpo()
  cortarTamponamento()
}

const cortarTamponamento = () =>{
  

  return(valoresTampo.value =[
    {comprimento: altura.value, largura: largura.value, Quantidade: 1, nome: 'Lateral', id:1},
    {comprimento: altura.value, largura: 10, Quantidade: 1, nome: 'Lateral parede', id:2},
   ])
}


const  cortarCorpo = ()=> {
  const nGaveta = nGavetas.value; 
  const espTamponamentoX2 = espTamponamento.value * 2;
  const espCorpoX3 = espCorpo.value * 3;
  const descontoTravessaGaveta = 57;
  const descontoTamponamento = 25;
  const larguraTravessa = 8;
  const alturaGavetas = 10;

  const baseComp = comprimento.value - espTamponamentoX2;
  const corpoLarg = Math.trunc(largura.value - descontoTamponamento);
  const lateralComp = altura.value - espCorpo.value;
  const divisoria = lateralComp - espCorpo.value;
  const prateleiraComp = Math.trunc((comprimento.value - espTamponamentoX2 - espCorpoX3)/(portas.value + 2) );
  const travessa = baseComp - (espCorpo.value *2);
  
  if(nGaveta >= 1 ){
    const espacoGavetas = comprimento.value - espCorpoX3 - espTamponamentoX2 - prateleiraComp;
    const travessaGavetas = espacoGavetas - descontoTravessaGaveta;
    const lateraisGavetas = largura.value - descontoTamponamento - 20; 
    const travessaMenor = espacoGavetas + espCorpo.value;
    const travessaMaior = prateleiraComp;
  
    return(
   valoresCorpo.value = [
    {nome: "Base", comprimento: baseComp, largura: corpoLarg, Quantidade: '1', id:1},
    {nome: "Lateral", comprimento: lateralComp, largura: corpoLarg, Quantidade: '2', id:2},
    {nome: "Prateleira", comprimento: prateleiraComp, largura: corpoLarg, Quantidade: '1', id:3},
    {nome: "Divisória", comprimento: divisoria, largura: corpoLarg, Quantidade: '1', id:4},
    {nome: "Travessa maior", comprimento: travessaMaior, largura: larguraTravessa, Quantidade: '2', id:5},
    {nome: "Travessa menor", comprimento: travessaMenor, largura: larguraTravessa, Quantidade: '2', id:6},
    {nome: "Travessa Gaveta", comprimento: travessaGavetas, largura: alturaGavetas, Quantidade: nGavetas, id:7},
    {nome: "Lateral Gaveta", comprimento: lateraisGavetas, largura: alturaGavetas, Quantidade: nGavetas, id:8},
  ])
  }
  valoresCorpo.value = [
    {nome: "Base", comprimento: baseComp, largura: corpoLarg, Quantidade: '1', id:1},
    {nome: "Lateral", comprimento: lateralComp, largura: corpoLarg, Quantidade: '2', id:2},
    {nome: "Prateleira", comprimento: prateleiraComp, largura: corpoLarg, Quantidade: '1', id:3},
    {nome: "Travessa", comprimento: travessa, largura: larguraTravessa, Quantidade: '2', id:5},    
  ]
}

</script>
