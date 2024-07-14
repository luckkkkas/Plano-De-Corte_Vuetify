interface IParametrosRoupeiro{
  tamponamento: string,
  acSuperior: string,
  largura: number,
  altura: number,
  profundidade: number,
  nVaos: number,
  nGavetas: number,
  nPortas: number,
  espessuraTamponamento: number
  espacoTrilho: number;
  alturaRodape: number;
  alturaAcSuperior: number;
  espessuraBase: number;
  espessuraLateral: number;
  suporteCabide: number;
  descontoGaveta: number;
  descontoFundo: number;
  descontoPortaDeTras: number;
  descontoAlturaPorta: number;
  descontoPortaDaFrente: number;
  alturaAcSuperiorSimples: number;
  descontoFundoGaveta: number;
  descontoProfundidadeGaveta: number;
}

interface IResultadoRoupeiro {
  lateralAltura?: number;
  quantlaterais?: number; 
  lateralProf?: number;
  baseComp?: number;
  baseProfu?: number;
  prateleiraComp?: number; 
  prateleiraProf?: number;
  travessaGavetaAltura?: number;
  travessaGavetaComp?: number;
  fundoAltura?: number; 
  fundoComp?: number; 
  portaAltura?: number;
  porta1Comp?: number;
  porta2Comp?: number;
  puxadorComp?: number; 
  cabideComp?: number; 
  trilhoComp?: number;
  fundoGavetasComp?: number;
  fundoGavetasProf?: number;
  rodape?: number;
  espessuraTamponamento?: number;
  fundoGavetaProf?: number;
  fundoGavetaComp?: number;
  quantFundoGavetas?: number;
  quantTravessaGaveta?: number;
  quantLaterais?: number;
  quantLateraisGaveta?: number;
  fundoLargura?: number;
  alturaTravessaGaveta?: number;
  quantPuxadores?: number;
  lateraisGavetaComp?: number;
}

function corpo(params: IParametrosRoupeiro): IResultadoRoupeiro{
  const { largura, nPortas, descontoProfundidadeGaveta, nGavetas, altura, profundidade,nVaos, acSuperior, espessuraTamponamento,descontoFundo, descontoFundoGaveta, alturaAcSuperiorSimples, descontoPortaDeTras, descontoPortaDaFrente, descontoAlturaPorta, descontoGaveta, suporteCabide,espessuraLateral, espacoTrilho, alturaAcSuperior, alturaRodape} = params;
  if (largura <= 0 || altura <= 0 || profundidade <= 0) {
    // faz verificação para ver se os elementos são válidos
    alert('Altura, largura ou profundidade inválida');
    return {};
  } else {
    //calcula as operações comum para todos
      const espTamponamentoX2 = (espessuraTamponamento *2);
      const quantDivisorias = nVaos - 1;
      const espLateralX2 = espessuraLateral * 2;
      const lateralProf = (profundidade - espacoTrilho);
      const prateleiraProf = lateralProf -espessuraLateral;
      const quantLaterais = ((Number(nVaos)) + 1);
      const baseComp = largura - espTamponamentoX2
      const trilhoComp = (baseComp - 2); // desconta 2 mm da base para ter uma folga
      const prateleiraComp = Math.trunc( ((largura - espLateralX2 - espTamponamentoX2 - (espessuraLateral*quantDivisorias)) / nVaos));//verificar essa linha novamente 
      const cabideComp = prateleiraComp - suporteCabide;
      const travessaGavetaComp = (prateleiraComp - descontoGaveta);
      const fundoLargura = prateleiraComp + espTamponamentoX2 - descontoFundo; // verificar desconto do fundo
      const porta1Comp = prateleiraComp - descontoPortaDeTras ;
      const porta2Comp = prateleiraComp + descontoPortaDaFrente; 
      const quantLateraisGaveta = (nGavetas * 2);
      const quantTravessaGaveta = quantLateraisGaveta;
      const quantFundoGavetas = nGavetas;
      const fundoGavetaComp = travessaGavetaComp + descontoFundoGaveta; 
      const lateralGavetaProf = lateralProf - alturaAcSuperiorSimples;
      const fundoGavetaProf = lateralGavetaProf - descontoFundoGaveta; 
      const quantPuxadores = Number(nPortas) + 1; 
      const lateraisGavetaComp = lateralProf - descontoProfundidadeGaveta;
      // --------------------;
      if (acSuperior === 'até o teto') {
        //calcula as peças se o movel for ate o teto
        // abixo operções comum para todos.
          const portaAltura = altura - alturaAcSuperior - alturaRodape  - espLateralX2 - descontoAlturaPorta;
          const lateralAltura = altura - (alturaRodape + alturaAcSuperior+ espLateralX2);
          const puxadorComp = lateralAltura - descontoAlturaPorta;
          const fundoAltura = altura - alturaRodape - alturaAcSuperior - descontoFundo;
          return{
            prateleiraProf,
            fundoGavetaProf,
            fundoGavetaComp,
            quantFundoGavetas,
            portaAltura,
            quantTravessaGaveta,
            lateralProf,
            baseComp,
            trilhoComp,
            prateleiraComp,
            quantLaterais,
            lateralAltura,
            cabideComp,
            travessaGavetaComp,
            fundoLargura,
            porta1Comp,
            porta2Comp,
            puxadorComp,
            fundoAltura,
            quantLateraisGaveta,
            quantPuxadores,
            lateraisGavetaComp,
          }
          //====================abaixo nao é ate o teto==================================================================
      }else{
          //calculo comum para todos
          const portaAltura = altura - alturaAcSuperiorSimples - alturaRodape  - espLateralX2 - descontoAlturaPorta;
          const lateralAltura = altura - alturaRodape - alturaAcSuperiorSimples;
          const fundoAltura = altura - alturaAcSuperiorSimples - alturaRodape - descontoFundo;
          const puxadorComp = lateralAltura - descontoAlturaPorta;
          return {
            lateraisGavetaComp,
            prateleiraProf,
            fundoGavetaProf,
            fundoGavetaComp,
            quantFundoGavetas,
            portaAltura,
            quantTravessaGaveta,
            lateralProf,
            baseComp,
            trilhoComp,
            prateleiraComp,
            quantLaterais,
            lateralAltura,
            cabideComp,
            travessaGavetaComp,
            fundoLargura,
            porta1Comp,
            porta2Comp,
            puxadorComp,
            fundoAltura,
            quantLateraisGaveta,
            quantPuxadores,
          }
      }
     
  }

}

function tamponamento(params: IParametrosRoupeiro){
  const {largura, altura, tamponamento,profundidade, espessuraTamponamento} = params;
  const espTamponamentoX2 = (espessuraTamponamento*2)
  const baseTetoTamponamento = largura - espTamponamentoX2 ;
  const acRodapeAcTeto = largura - espTamponamentoX2;
  const lateralTamponadaAltura= altura;
  const lateralTamponadaProfundidade = profundidade;
  if(tamponamento === 'parede 2 lados' ){
      const quantLateraisTamponada = 0;
      const quantAcParede = 2;
      return {
        baseTetoTamponamento,
        acRodapeAcTeto,
        lateralTamponadaAltura,
        lateralTamponadaProfundidade,
        quantLateraisTamponada,
        quantAcParede
      }


  }else if(tamponamento === 'parede 1 lados'){
    const quantLateraisTamponada = 1;
    const quantAcParede = 1;
    return {
      baseTetoTamponamento,
      acRodapeAcTeto,
      lateralTamponadaAltura,
      lateralTamponadaProfundidade,
      quantLateraisTamponada,
      quantAcParede
    }
  }else if('closet'){
    const quantLateraisTamponada = 0;
    const quantAcParede = 0;
    return {
      baseTetoTamponamento,
      acRodapeAcTeto,
      lateralTamponadaAltura,
      lateralTamponadaProfundidade,
      quantLateraisTamponada,
      quantAcParede
    }
  }else{
    const quantLateraisTamponada = 1;
    const quantAcParede = 1;
    return {
      baseTetoTamponamento,
      acRodapeAcTeto,
      lateralTamponadaAltura,
      lateralTamponadaProfundidade,
      quantLateraisTamponada,
      quantAcParede
    }
  }
}

export async function cortarRoupeiro(params: IParametrosRoupeiro){
  const calcularCorpo = corpo(params);
  const  calcularTamponamento = tamponamento(params);
  return {
    calcularCorpo,
    calcularTamponamento
  };
}
