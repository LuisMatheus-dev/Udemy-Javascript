//---------------- FUNÇÔES COMO ARGUMENTOS --------------

const estoque = {
  'batata': 15,
  'laranja': 21,
  'leite': 10,
}

const Retornando_Estoque_Atual = function(itemsComprados) {
  
  for([item, quantidade] of itemsComprados) {
    estoque[item] -= quantidade;
  }
  console.log(estoque)
}

const Atualizando_Estoque = function(produtos,novoEstoque) {
  
  let aDescontar = []
  console.log((novoEstoque.name).replaceAll("_"," "));

  for(item of produtos) {

    let [produto, [unidade, valor]] = item.trim().split("-");
    aDescontar.push([produto.trim(), Number(valor)]);
  }
  novoEstoque(aDescontar);

}

const separarItems = function(texto, atualizarEstoque) {
  //Separa a lista tudo o que foi comprado
  let listaDeProdutos = texto.toLowerCase().split(",");
  
  console.log(`Compra confirmada estamos...`);
  console.log((atualizarEstoque.name).replace("_"," "));
  
  atualizarEstoque(listaDeProdutos,Retornando_Estoque_Atual)

}

let ticket = "Batata - 5 unidades,Laranja - 3 unidades,Leite - 2 Litros"

separarItems(ticket, Atualizando_Estoque);


//-------------- RETORNANDO FUNÇÕES --------------------

console.log("Vamos encontrar o valor delta crianças")

const delta = a => b => c => (b**2) - (4*a*c);

console.log(delta(4)(2)(6));


//-------------- METOCO CALL  --------------------

function adicionarProduto(produto) {
  this.listaDeProdutos.push(produto);
  return this.listaDeProdutos
}

const loja_1 = {
listaDeProdutos: [],
};

const loja_2 = {
  listaDeProdutos: [],
  };

//-------------- METODO BLIND  --------------------

const saudacaoComTratamento = function(tratamento,nome) {
	return `Olá ${tratamento} ,${nome}!`
}

const sr = saudacaoComTratamento.bind(null,"SR");
console.log(sr("José"));


const adicionarProdutoLoja_1 = adicionarProduto.bind(loja_1);
const adicionarProdutoLoja_2 = adicionarProduto.bind(loja_2);

adicionarProdutoLoja_1("ARROZ");
adicionarProdutoLoja_1("FEIJÃO");


adicionarProdutoLoja_2("DADS");
adicionarProdutoLoja_2("DAD");

console.log(loja_1)
console.log(loja_2)

//Retorna: ["Xiami Redmi Note 8","Pocco Phone Ultra", "Apple iPhone 25" ]
