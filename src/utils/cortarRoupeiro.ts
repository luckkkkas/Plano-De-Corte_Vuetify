interface ParametrosRoupeiro{
  tamponamento: string,
  acSuperior: number,
  largura: number,
  altura: number,
  profundidade: number,
  nVaos: number,
  nGavetas: number,
  nPortas: number,
}




export function cortarRoupeiro(params: ParametrosRoupeiro) {
    // Implementar a lógica de cálculos aqui
  const resultado = {
    tamponamento: params.tamponamento,
    acSuperior: params.acSuperior,
    largura:params.largura,
    altura:params.altura,
    profundidade: params.profundidade,
    nVaos: params.nVaos,
    nGavetas: params.nGavetas,
    nPortas: params.nPortas,
  }
console.log(params)
console.log(resultado)
 // Aqui você pode realizar os cálculos necessários com os parâmetros recebidos
  // Exemplo de cálculo fictício




}