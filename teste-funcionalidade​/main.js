function enviarEmail(destinatario, assunto, mensagem) {
  if (assunto === "") {
    return "Erro: assunto obrigatório";
  }

  if (destinatario === "") {
    return "Erro: destinatário obrigatório";
  }

  return "Email enviado com sucesso";
}

function enviar() {
  let destinatario = document.getElementById("destinatario").value;
  let assunto = document.getElementById("assunto").value;
  let mensagem = document.getElementById("mensagem").value;

  let resultado = enviarEmail(destinatario, assunto, mensagem);

  document.getElementById("resultado").innerText = resultado;
}

console.assert(
  enviarEmail("teste@gmail.com", "", "Mensagem") ===
    "Erro: assunto obrigatório",
  "Falha ao enviar o email",
);
