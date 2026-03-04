function cadastrarCliente(nome, email, senha, usuarios) {
  if (!nome) {
    return "O nome é obrigatorio";
  }
  if (!email.includes("@")) {
    return "email invalido";
  }
  if (senha.lenght < 6) {
    return "Senha muito curta";
  }
  if (usuarios.includes(email)) {
    return "Email já cadastrado";
  }
  usuarios.push(email);

  return "usuario cadastrado com sucesso";
}

let usuarios = ["joao@email.com"];

// test valido pois o retorno foi aquilo que se esperava
console.assert(
  cadastrarCliente("Maria", "maria@email.com", "123456", usuarios) ===
    "usuario cadastrado com sucesso",
  "Erro, no cadastro valido",
);

console.assert(
  cadastrarCliente("Maria", "maria@email.com", "123456", usuarios) ===
    "O nome é obrigatorio",
  "erro no cadastro valido",
);

console.assert(
  cadastrarCliente("", "maria@email.com", "123456", usuarios) ===
    "O nome é obrigatorio",
  "Nome vazio",
);

console.assert(
  cadastrarCliente("", "mariaemail.com", "123456", usuarios) ===
    "usuario cadastrado com sucesso",
  "Nome vazio",
);
