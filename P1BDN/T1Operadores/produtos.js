
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


// criar 10.000 doc 
for (let i = 1; i <= 10000; i++) {
    db.produtos_teste.insertOne({
        codigo: i,
        nome: "Produto " + i,
        categoria: i % 2 === 0 ? "Eletrônicos" : "Móveis",
        preco: Math.floor(Math.random() * 5000) + 100,
        estoque: Math.floor(Math.random() * 100) + 1,
        avaliacao: Number((Math.random() * 4 + 1).toFixed(1)),
        tags: i % 2 === 0
            ? ["tecnologia", "eletrônico"]
            : ["casa", "móvel"]
    });
}

/*E cada produto terá:

codigo
nome
categoria
preco
estoque
avaliacao
tags → array*/