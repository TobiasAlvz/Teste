
let feedbacks = [];

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

function reportarFeedback(usuario, mensagem) {
  const feedback = {
    usuario,
    mensagem
  };

  feedbacks.push(feedback);
}


let teste1 = usarAplicativo("João", "erro_login");
reportarFeedback("João", teste1);

let teste2 = usarAplicativo("Maria", "erro_pagamento");
reportarFeedback("Maria", teste2);

let teste3 = usarAplicativo("Carlos", "sugestao");
reportarFeedback("Carlos", teste3);


console.log("Feedbacks recebidos no Beta:");

feedbacks.forEach(f => {
  console.log(f.usuario + ": " + f.mensagem);
});