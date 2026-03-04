function calcularJuros(valor, taxa) {
  return valor * taxa;
}

//Teste de unidade feito com sucesso
console.assert(calcularJuros(100, 0.1) === 10, "erro juros invalido");

console.assert(calcularJuros(100, 0.1) === 100, "Erros");
