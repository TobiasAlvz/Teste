function calcularTotal(valor) {
  return valor;
}

function pagarCartao(valor) {
  return "Pagamento aprovado no cartão: " + valor;
}

function pagarDinheiro(valor) {
  return "Pagamento aprovado em dinheiro: " + valor;
}

function pagarPix(valor) {
  return "Pagamento aprovado via PIX: " + valor;
}

function emitirRecibo(valor, metodo) {
  return "Recibo emitido - " + metodo + " - Total: " + valor;
}

const total = calcularTotal(100);

const testeCartao = pagarCartao(total);
console.assert(
  testeCartao === "Pagamento aprovado no cartão: 100",
  "Erro no pagamento com cartão"
);

const testeDinheiro = pagarDinheiro(total);
console.assert(
  testeDinheiro === "Pagamento aprovado em dinheiro: 100",
  "Erro no pagamento em dinheiro"
);

const testePix = pagarPix(total);
console.assert(
  testePix === "Pagamento aprovado via PIX: 100",
  "Erro no pagamento via PIX"
);

const recibo = emitirRecibo(total, "PIX");
console.assert(
  recibo === "Recibo emitido - PIX - Total: 100",
  "Erro na emissão do recibo"
);

console.log(testeCartao);
console.log(testeDinheiro);
console.log(testePix);
console.log(recibo);