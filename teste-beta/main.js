// Sistema liberado em versão BETA

let feedbacks = [];

// usuário usa o aplicativo
function usarAplicativo(usuario, acao) {
  console.log(usuario + " está usando o aplicativo...");

  if (acao === "erro_login") {
    return "Erro: não conseguiu fazer login";
  }

  if (acao === "erro_pagamento") {
    return "Erro: pagamento falhou";
  }

  if (acao === "sugestao") {
    return "Sugestão: adicionar modo escuro";
  }

  return "Aplicativo funcionando normalmente";
}

// usuário reporta feedback
function reportarFeedback(usuario, mensagem) {
  const feedback = {
    usuario,
    mensagem,
  };

  feedbacks.push(feedback);
  return feedback;
}

//
// ===== TESTES BETA =====
//

// teste 1 (funcionando)
const teste1 = usarAplicativo("João", "normal");
console.assert(
  teste1 === "Aplicativo funcionando normalmente",
  "Erro: app deveria funcionar"
);

// teste 2 (erro login)
const teste2 = usarAplicativo("Maria", "erro_login");
console.assert(
  teste2 === "Erro: não conseguiu fazer login",
  "Erro: login deveria falhar"
);

// teste 3 (erro pagamento)
const teste3 = usarAplicativo("Carlos", "erro_pagamento");
console.assert(
  teste3 === "Erro: pagamento falhou",
  "Erro: pagamento deveria falhar"
);

// teste 4 (sugestão)
const teste4 = usarAplicativo("Ana", "sugestao");
console.assert(
  teste4 === "Sugestão: adicionar modo escuro",
  "Erro: sugestão não registrada"
);

// registrar feedbacks
reportarFeedback("João", teste1);
reportarFeedback("Maria", teste2);
reportarFeedback("Carlos", teste3);
reportarFeedback("Ana", teste4);

// teste da quantidade de feedbacks
console.assert(
  feedbacks.length === 4,
  "Erro: número de feedbacks incorreto"
);

// mostrar feedbacks
console.log("Feedbacks recebidos no Beta:");
feedbacks.forEach((f) => {
  console.log(f.usuario + ": " + f.mensagem);
});