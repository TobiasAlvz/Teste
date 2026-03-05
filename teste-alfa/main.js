const cardapio = [
  {
    id: 1,
    nome: "Hamburguer",
    preco: 12,
    id: 2,
    nome: "Pizza",
    preco: 20,
    id: 3,
    nome: "Coxinha",
    preco: 6,
    id: 4,
    nome: "Suco",
    preco: 5,
  },
];

let usarios = [];
let pedidos = [];

function cadastrarUsuario(nome, email) {
  if (!nome) {
    return "Erro: O nome é obrigatorio";
  }

  if (!email) {
    return "Erro: O email é obrigatorio";
  }

  const usario = {
    id: usarios.length + 1,
    nome,
    email,
  };

  usarios.push(usario);
  return usario;
}

function buscarPrato(idPrato) {
  return cardapio.find((p) => p.id === idPrato);
}

function criarPedido(idUsuario, idPrato, quantidade) {
  if (!idUsuario) {
    return "Erro: Usuario invalido";
  }

  const prato = buscarPrato(idPrato);

  if (!prato) {
    return "Erro: Prato não encontrado";
  }

  if (quantidade <= 0) {
    return "Erro: quantidade invalida";
  }

  const total = prato.preco * quantidade;

  const pedido = {
    id: pedidos.length + 1,
    usarios: idUsuario,
    prato: prato.nome,
    quantidade,
    total,
  };

  pedidos.push(pedido);

  return pedido;
}
