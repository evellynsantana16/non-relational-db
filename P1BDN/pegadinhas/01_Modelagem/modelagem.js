//use Loja

db.clientes.insertOne({
  nome: "Carlos",
  cpf: "123.456.789-00",
  enderecos: [
    { rua: "Rua A", numero: 10, cidade: "Jahu" },
    { rua: "Av B", numero: 200, cidade: "Bauru" }
  ]
})

//diferente ne
/*Retorne os pedidos cujo status seja diferente de
 "Cancelado" e que tenham forma de pagamento "Pix" OU "Cartão".*/

db.pedidos.find({
    status: { $ne: "Cancelado" },
    $or: [
        { forma_pagamento: "Pix" },
        { forma_pagamento: "Cartão" }
    ]
})