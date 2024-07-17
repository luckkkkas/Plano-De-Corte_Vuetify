<template>
    <v-app>
      <div class="flex-xm-column d-lg-flex ">
        <div class=" d-flex flex-column mx-auto w-100 w-sm-75 w-lg-50">
          <h1 class="mb-15  text-center">
            Lista de Corte de Roupeiro Reto
          </h1>
          <v-form @submit.prevent="atribuirValores">  
            <div class="d-flex align-center">
              <v-select
                v-model="inputs.tamponamento"
                label="Tamponamento"
                :items="['parede 2 lados', 'parede 1 lados', 'Sem parede']"
              />
              <v-dialog max-width="500px">
                <template #activator="{ props }">
                  
                  <v-btn 
                    v-bind="props" 
                    variant="text" 
                    icon="mdi-help-circle-outline" 
                    size="small" 
                  />
                </template>
                  <v-card>
                    <v-card-title class="d-flex justify-space-between">
                      Tamponamento
                    </v-card-title>
                    <v-card-text>
                      Tamponamento de móvel é o processo de aplicar um peça nas laterais dos móveis para criar uma 
                      borda lisa e uniforme. Isso ajuda a esconder as extremidades dos painéis, dar um acabamento estético e 
                      proteger contra danos.
                    </v-card-text>
                    <v-img 
                      cover 
                      src="https://static.wixstatic.com/media/9dc21d_503e6071e88c47f48d712250bf799bc5~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,enc_auto/9dc21d_503e6071e88c47f48d712250bf799bc5~mv2.jpg" alt="Exemplo de Tamponamento"
                    />
                  </v-card>
              </v-dialog>
            </div>
            <div class="d-flex align-center">
              <v-select
              label="Acabamento Superior"
              :items="['Até o teto', 'Sem acabamento superior']"
              v-model="inputs.acSuperior" 
              />
              <v-dialog max-width="500px">
                  <template #activator="{ props }">
                    
                    <v-btn 
                      v-bind="props" 
                      variant="text" 
                      icon="mdi-help-circle-outline" 
                      size="small"
                    />
                  </template>
                    <v-card>
                      <v-card-title class="d-flex justify-space-between">
                        Acabamento Superior
                      </v-card-title>
                      <v-card-text>
                        Acabamento superior pode ser até o teto, onde o móvel se adpata ao ambiente, necessitando um acabamento mais trabalhado,
                        e acbamento simples, quando não vai até o teto.
                      </v-card-text>
                      <v-img 
                        cover 
                        src="../assets/images/IMG_20210428_133205998.jpg" alt="Exemplo de Acabamento Superior até o teto"
                      />
                    </v-card>
                </v-dialog>
            </div>
            <div class="d-flex align-center">
              <v-text-field 
                type="number" 
                label="Comprimento (mm)"
                hint="Informe a Comprimento em MM"
                v-model.number="inputs.largura"
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      <v-btn 
                        v-bind="props" 
                        variant="text" 
                        icon="mdi-help-circle-outline" 
                        size="small" 
                      />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Comprimento
                        </v-card-title>
                        <v-card-text>
                          Quando falamos da comprimento de um roupeiro, estamos nos referindo à distância Horizontal de um lado a outro.
                        </v-card-text>
                        <v-img cover src="../assets/images/Comp.png" alt="Exemplo de Tamponamento"/>
                      </v-card>
                  </v-dialog>
            </div>
            <div class="d-flex align-center">
              <v-number-input 
                type="number" 
                label="Altura (mm)"
                hint="Informe a Altura em MM"
                v-model.number="inputs.altura"
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      
                      <v-btn v-bind="props" variant="text" icon="mdi-help-circle-outline" size="small" />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Altura
                        </v-card-title>
                        <v-card-text>
                          Quando falamos da altura de um roupeiro, estamos nos referindo à distância vertical desde a base (o chão) até o topo do móvel
                        </v-card-text>
                        <v-img 
                          cover 
                          src="../assets/images/Alt.png" 
                          alt="Exemplo de Tamponamento"
                        />
                      </v-card>
                  </v-dialog>
            </div>
            <div class="d-flex align-center">
              <v-number-input 
                type="number" 
                label="espessura do Tamponamento (mm)"
                hint="Informe a Altura em MM"
                v-model.number="inputs.espessura"
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      <v-btn 
                        v-bind="props" 
                        variant="text" 
                        icon="mdi-help-circle-outline" 
                        size="small" 
                      />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Espessura Tamponamento
                        </v-card-title>
                        <v-card-text>
                          Espessura da camada exterior do móvel.
                        </v-card-text>
                        <v-img 
                          cover 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWLE1aqQ0kDUdNX8Y4NRFwgTQgnE5ru6kcw&s" 
                          alt="exemplo de Espessura de chapa"
                        />
                      </v-card>
              </v-dialog>
            </div>
            <div class="d-flex align-center">
              <v-number-input 
                type="number" 
                label="Largura (mm)"
                hint="Informe a Profundidade em MM"
                v-model.number="inputs.profundidade"
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      <v-btn 
                        v-bind="props" 
                        variant="text" 
                        icon="mdi-help-circle-outline" 
                        size="small" 
                      />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Largura
                        </v-card-title>
                        <v-card-text>
                          Profundidade final do móvel.
                        </v-card-text>
                        <v-img 
                          cover 
                          src="../assets/images/Lar.png" 
                          alt="Exemplo de Larguara"
                        />
                      </v-card>
              </v-dialog>
            </div>  
            <div class="d-flex align-center">  
              <v-number-input 
                type="number" 
                label="Prateleiras"
                hint="Informe quantidade de Prateleira"
                v-model.number="inputs.nPrateleiras"
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      
                      <v-btn 
                        v-bind="props" 
                        variant="text" 
                        icon="mdi-help-circle-outline" 
                        size="small" 
                      />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Prateleiras
                        </v-card-title>
                        <v-card-text>
                         Define o tamanho dos vãos do roupeiro
                        </v-card-text>
                      </v-card>
              </v-dialog>
            </div>  
            <div class="d-flex align-center">  
              <v-select
                v-model="inputs.nVaos" 
                label="Nº de Vãos" 
                :items="['1','2','3']" 
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      <v-btn
                        v-bind="props" 
                        variant="text" 
                        icon="mdi-help-circle-outline" 
                        size="small" 
                      />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Quantidade de vãos
                        </v-card-title>
                        <v-card-text>
                          Define quantos vãos o roupeiro terá, podendo ser 1, 2 ou 3 vãos, os quis seram distribuidos conforme a escolha.
                        </v-card-text>
                        <v-img 
                          src="../assets/images/IMG-20210108-WA0005.jpg" 
                        />
                      </v-card>
              </v-dialog>
            </div>  
            <div class="d-flex align-center">  
              <v-select
                v-model="inputs.nGavetas" 
                label="Nº de Gavetas" 
                :items="['1','2','3','4','5','6','7','8','9','10','11','12']" 
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      <v-btn v-bind="props" variant="text" icon="mdi-help-circle-outline" size="small" />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Quantidade De gavetas
                        </v-card-title>
                        <v-card-text>
                          quantidade de gavetas total do roupeiro.
                        </v-card-text>
                        <v-img 
                          cover 
                          src="../assets/images/IMG_20220418_145914887.jpg" 
                          alt="Exemplo de Gavetas"
                        />
                      </v-card>
              </v-dialog>
            </div>
            <div class="d-flex align-center"> 
             <v-select
                v-model="inputs.nPortas"
                label="Nº de portas" 
                :items="['2','3']" 
              />
              <v-dialog max-width="500px">
                    <template #activator="{ props }">
                      <v-btn 
                        v-bind="props" 
                        variant="text" 
                        icon="mdi-help-circle-outline" 
                        size="small" 
                      />
                    </template>
                      <v-card>
                        <v-card-title class="d-flex justify-space-between">
                          Número de portas
                        </v-card-title>
                        <v-card-text>
                          Define a quantidade de portas que irão compor o roupeiro. Exemplo com Duas portas.
                        </v-card-text>
                        <v-img 
                          cover 
                          src="../assets/images/IMG_20220418_145811249.jpg" 
                          alt="Exemplo de Portas"
                        />
                      </v-card>
              </v-dialog>
            </div>
            <div class="d-flex flex-column flex-lg-row justify-space-around">
              <v-btn @click="limpar" class="ma-1" label="Limpar">
                Limpar
              </v-btn>
              <v-btn type="submit" class="ma-1" @click="gerar" color="primary">
                Calcular
              </v-btn>
            </div>
          </v-form>
        </div>
        <div class=" flex-column pa-0 ma-0 text-center" v-if="resultado">
          <div>
            <h3 class="mt-5">
              Interno
            </h3>
            <v-data-table-virtual
              class="mt-10 w-auto"
              :headers="headers"  
              :items="interno"
              height="420"
              item-value="name"  
            >{{ resultado }}</v-data-table-virtual>
          </div>
          <div >
            <h3 class="mt-5">
              Tamponamento
            </h3>
            <v-data-table-virtual 
              class="mt-10 w-auto"
              :headers="headers"  
              :items="tamponamento"
              height="content"
              item-value="name"  
            >{{ resultado }}</v-data-table-virtual>
          </div>
          <div>
            <h3 class="mt-5">
              Acessórios
            </h3>
            <v-data-table-virtual 
              class="mt-10 w-auto"
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
    data: () => {
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
        descontoProfundidadeGaveta: 40,
  };
  try {
    this.resultado = await cortarRoupeiro(params);
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
      Largura: '137',
      Nome: 'Trvessa Gaveta',
    },
    {
      Quantidade: this.resultado.calcularCorpo.quantLateraisGaveta,
      Comprimento: this.resultado.calcularCorpo.lateraisGavetaComp,
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
    this.resultado = '',
    this.inputs.acSuperior  = '';
    this.inputs.altura = '';
    this.inputs.espessura ='';
    this.inputs.tamponamento = '';
    this.inputs.profundidade ='';
    this.inputs.nVaos='';
    this.inputs.nPrateleiras = '';
    this.inputs.nPortas ='';
    this.inputs.nGavetas='';
    this.inputs.largura ='';
  }
  }, 
};
</script>  