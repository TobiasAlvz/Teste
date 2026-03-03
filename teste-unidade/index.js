function funcaoSoma(a, b) {
  return a + b;
}

// teste para saber se é positivo
console.assert(funcaoSoma(5, 3) > 0, "Erro, o numero deveria ser positivo");
console.assert(funcaoSoma(-20, 5) > 0, "Erro, o numero deveria ser positivo");

//teste para saber se é negativo
console.assert(funcaoSoma(5, 3) < 0, "Erro, o numero deveria ser negativo");
console.assert(funcaoSoma(-20, 5) < 0, "Erro, o numero deveria ser negativo");

// teste para saber se é negativo
console.assert(
  funcaoSoma(0, 0) === "0",
  "Erro, o numero deveria ser igual a 0",
);
console.assert(funcaoSoma(0, 0) === 0, "Erro, o numero deveria ser igual a 0");
