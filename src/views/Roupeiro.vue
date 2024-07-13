<template>
    <v-app>
      <div class="flex-xm-column d-md-flex">
        <div class=" d-flex flex-column mx-auto w-100 w-sm-75 w-lg-50">
          <h1 class="my-15">Plano de Corte do Roupeiro</h1>
          <v-form @submit.prevent="atribuirValores">  
            
            <v-select
              v-model="inputs.tamponamento"
              label="Tamponamento"
              :items="['parede 2 lados', 'parede 1 lados', 'Sem parede']"
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
              v-model.number="inputs.largura"
            />
            <v-number-input 
              type="number" 
              label="Altura (mm)"
              hint="Informe a Altura em MM"
              v-model.number="inputs.altura"
            />
            <v-number-input 
              type="number" 
              label="espessura do Tamponamento (mm)"
              hint="Informe a Altura em MM"
              v-model.number="inputs.espessura"
            />
            <v-number-input 
              type="number" 
              label="Profundidade (mm)"
              hint="Informe a Profundidade em MM"
              v-model.number="inputs.profundidade"
            />
            <v-number-input 
              type="number" 
              label="Prateleiras"
              hint="Informe quantidade de Prateleira"
              v-model.number="inputs.nPrateleiras"
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
            <div class="d-flex flex-column justify-lg-space-around">
              <Button @click="limpar" class="ma-1" label="Limpar"/>
              <v-btn type="submit" class="ma-1" color="secondary">Calcular</v-btn>
            </div>
          </v-form>
        </div>
        <div class="d-flex px-10 flex-column text-center" v-if="resultado">
          <div class="mx-auto">
            <h3 class="mt-5">Interno</h3>
            <v-data-table-virtual v-if="resultado"
            class="mt-10 mx-4"
              :headers="headers"  
              :items="interno"
              height="420"
              item-value="name"  
            >{{ resultado }}</v-data-table-virtual>
          </div>
          <div class="mx-auto" >
            <h3 class="mt-5">Tamponamento</h3>
            <v-data-table-virtual 
            class="mt-10 mx-4"
              :headers="headers"  
              :items="tamponamento"
              height="content"
              item-value="name"  
            >{{ resultado }}</v-data-table-virtual>
          </div>
          <div >
            <h3 class="mt-5">Acessórios</h3>
            <v-data-table-virtual 
            class="mt-10 mx-4"
              :headers="acessoriosHead"  
              :items="acessorios"
              height="320"
              item-value="name"  
            >{{ resultado }}</v-data-table-virtual>
          </div>
        </div> 
      </div>
    </v-app>
  </template>
  
<script>
  import { cortarRoupeiro } from '@/utils/cortarRoupeiro.ts'
  import { VNumberInput } from 'vuetify/labs/VNumberInput'
  export default {
    components: {
      VNumberInput,
    },
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
          nPrateleiras: '',
        },
        resultado: null, 
        headers: [
          { title: 'Quantidade', align: 'start', key: 'Quantidade' },
          { title: 'Comprimento', align: 'end', key: 'Comprimento' },
          { title: 'Largura', align: 'end', key: 'Largura' },
          { title: 'Nome', align: 'end', key: 'Nome' },
          
        ],
        acessoriosHead:[
          { title: 'Quantidade', align: 'start', key: 'Quantidade' },
          { title: 'Comprimento', align: 'end', key: 'Comprimento' },
          { title: 'Nome', align: 'end', key: 'Nome' },
          
        ],
       tamponamento: [],
       interno: [],
       portas: [],
       acessorios: [],
      };
    },
    methods: {   
       async atribuirValores(){
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
        espacoTrilho: 80,
        alturaRodape: 110,
        alturaAcSuperior: 100,
        espessurabase: 15,
        espessuraLateral: 15,
        suporteCabide: 5,
        descontoGaveta: 57,
        descontoFundo: 5,
        descontoPortaDeTras: 20,
        descontoAlturaPorta: 5,
        descontoPortaDaFrente: 5,
        alturaAcSuperiorSimples: 30,
        descontoFundoGaveta: 15,
  };
  try {
    this.resultado = await cortarRoupeiro(params);
    console.log(this.resultado);
  }  catch(error){
    console.log(error)
  }

  this.tamponamento = [
      {
        Quantidade: '2',
        Comprimento: this.resultado.calcularTamponamento.baseTetoTamponamento,
        Largura: '120',
        Nome: 'Tamponamento Teto/Base',
      },
      {
        Quantidade: '1',
        Comprimento: this.resultado.calcularTamponamento.acRodapeAcTeto,
        Largura: '8',
        Nome: 'Acabamento do Rodape',
      },{
        Quantidade: '1',
        Comprimento: this.resultado.calcularTamponamento.acRodapeAcTeto,
        Largura: '6',
        Nome: 'Acabamento Superior',
      },
      {
        Quantidade: this.resultado.calcularTamponamento.quantLateraisTamponada,
        Comprimento: this.resultado.calcularTamponamento.lateralTamponadaAltura,
        Largura: this.resultado.calcularTamponamento.lateralTamponadaProfundidade,
        Nome: 'Lateral Inteira',
      },
      {
        Quantidade: this.resultado.calcularTamponamento.quantAcParede,
        Comprimento: this.resultado.calcularTamponamento.lateralTamponadaAltura,
        Largura: '120',
        Nome: 'Lareral Parede',
      },
      // Adicione mais itens conforme necessário usando `this.resultado`
    ];
  this.interno = [
    {
      Quantidade: '2',
      Comprimento: this.resultado.calcularCorpo.baseComp,
      Largura: this.resultado.calcularCorpo.lateralProf,
      Nome: 'Base/Teto',
    },
    {
      Quantidade: this.resultado.calcularCorpo.quantLaterais,
      Comprimento: this.resultado.calcularCorpo.lateralAltura,
      Largura: this.resultado.calcularCorpo.lateralProf,
      Nome: 'Laterais/divisórias',
    },
    {
      Quantidade: this.inputs.nPrateleiras,
      Comprimento: this.resultado.calcularCorpo.prateleiraComp,
      Largura: this.resultado.calcularCorpo.prateleiraProf,
      Nome: 'Prateleiras',
    },
    {
      Quantidade: this.inputs.nVaos,
      Comprimento: this.resultado.calcularCorpo.fundoAltura,
      Largura: this.resultado.calcularCorpo.fundoLargura,
      Nome: 'Fundos Roupeiro',
    },
    {
      Quantidade: this.resultado.calcularCorpo.quantFundoGavetas,
      Comprimento: this.resultado.calcularCorpo.fundoGavetaComp,
      Largura: this.resultado.calcularCorpo.fundoGavetaProf,
      Nome: 'Fundos gavetas',
    },
    {
      Quantidade: this.resultado.calcularCorpo.quantTravessaGaveta,
      Comprimento: this.resultado.calcularCorpo.travessaGavetaComp,
      Largura: this.resultado.calcularCorpo.alturaTravessaGaveta,
      Nome: 'Trvessa Gaveta',
    },
    {
      Quantidade: this.resultado.calcularCorpo.quantLateraisGaveta,
      Comprimento: this.resultado.calcularCorpo.quantLateraisGaveta,
      Largura: '140',
      Nome: 'Laterais Gavetas',
    },
  ];
  this.portas = [
  {
      Quantidade: '1',
      Comprimento: this.resultado.calcularCorpo.portaAltura,
      Largura: this.resultado.calcularCorpo.porta1Comp,
      Nome: 'Porta Frontal',
    },
    {
      Quantidade: this.inputs.nPortas,
      Comprimento: this.resultado.calcularCorpo.portaAltura,
      Largura: this.resultado.calcularCorpo.porta2Comp,
      Nome: 'Porta posterior',
    },
  ];
  this.acessorios = [
  {
    Quantidade: this.inputs.nVaos,
    Comprimento: this.resultado.calcularCorpo.cabideComp,
    Nome: 'Cabides',
  },
  {
    Quantidade: this.resultado.calcularCorpo.quantPuxadores,
    Comprimento: this.resultado.calcularCorpo.puxadorComp,
    Nome: 'Puxadores',
  },
  {
    Quantidade: '1',
    Comprimento: this.resultado.calcularCorpo.trilhoComp,
    Nome: 'Trilho',
  },
  ]
  },
  limpar(resultado){
    this.resultado = ''
  }
  }, 
};
  </script>  