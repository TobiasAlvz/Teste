// valor - desconto
//valor = 100
//desconto = 10
// valor total = 90

function calcularDesconto(valor) {
  return valor * 0.1;
}

//teste de integração
function calcularTotalCompra(valor) {
  const desconto = calcularDesconto(valor);
  return valor - desconto;
}

console.assert(
  calcularTotalCompra(100) == 90,
  "O valor dessa compra deveria ser 90",
);
console.assert(
  calcularTotalCompra(100) == 10,
  "O valor dessa compra deveria ser 90",
);
