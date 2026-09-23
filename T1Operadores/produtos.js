
//banco slide
db.produtos.insertMany([
  {
    _id: 1,
    nome: "Notebook Dell",
    categoria: "Eletrônicos",
    preco: 4500,
    estoque: 15,
    avaliacao: 4.7
  },
  {
    _id: 2,
    nome: "Smartphone Samsung",
    categoria: "Eletrônicos",
    preco: 2500,
    estoque: 30,
    avaliacao: 4.5
  },
  {
    _id: 3,
    nome: "Cadeira Gamer",
    categoria: "Móveis",
    preco: 1200,
    estoque: 10,
    avaliacao: 4.8
  }
])