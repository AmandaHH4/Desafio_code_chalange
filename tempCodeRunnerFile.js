// calculo da quantidade de tinta necessária
const calculateTinta = (medidasParedes, numJanelas, numPortas) => {
    //  altura da porta
    const alturaPorta = 1.90;
    // altura da parede considerando a altura da porta
    const alturaParede = alturaPorta + 0.30;
    // área de uma janela
    const areaJanela = 2.00 * 1.20;
    // área de uma porta
    const areaPorta = 0.80 * alturaPorta;
  
    // área total das paredes
    const areaParedes = medidasParedes.reduce((total, medida) => total + medida, 0);
    const areaTotal = areaParedes - (numJanelas * areaJanela) - (numPortas * areaPorta);
  
    // quantidade de litros de tinta necessária
    const litrosTinta = areaTotal / 5;
  
    //  latas de tinta necessárias 
    const latasTinta = [
      { tamanho: 18, quantidade: Math.floor(litrosTinta / 18) }, // Lata de 18 litros
      { tamanho: 3.6, quantidade: Math.floor((litrosTinta % 18) / 3.6) }, // Lata de 3.6 litros
      { tamanho: 2.5, quantidade: Math.floor((litrosTinta % 3.6) / 2.5) }, // Lata de 2.5 litros
      { tamanho: 0.5, quantidade: Math.floor((litrosTinta % 2.5) / 0.5) } // Lata de 0.5 litros
    ];
  
    // Retorno das latas de tinta necessárias
    return latasTinta.filter(lata => lata.quantidade > 0);
  };
  
  // Exemplo de uso
  const medidasParedes = [4, 5, 4, 5]; // metros quadrados das 4 paredes
  const numJanelas = 2; // janelas nas paredes
  const numPortas = 1; //portas nas paredes
  
  // Chamada da função calculateTinta com os parâmetros definidos acima
  const resultadoTinta = calculateTinta(medidasParedes, numJanelas, numPortas);
  console.log(resultadoTinta);