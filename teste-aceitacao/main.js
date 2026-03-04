function cadastrarProduto(nome, preco, estoque, produtos) {
  if (!nome) return "Erro: nome do produto é obrigatório";
  if (preco <= 0) return "Erro: preço inválido";

  produtos.push({ nome, preco, estoque });
  return "Produto cadastrado com sucesso";
}

function registrarVenda(nomeProduto, quantidade, produtos, vendas) {
  const produto = produtos.find((p) => p.nome === nomeProduto);

  if (!produto) return "Erro: produto não encontrado";

  if (quantidade > produto.estoque) {
    return "Erro: estoque insuficiente";
  }

  produto.estoque -= quantidade;

  vendas.push({
    produto: nomeProduto,
    quantidade,
    total: produto.preco * quantidade,
  });

  return "Venda registrada com sucesso";
}

function gerarRelatorio(vendas) {
  return vendas;
}

let produtos = [];
let vendas = [];
