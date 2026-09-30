//use Loja

/*find(
    { FILTRO },
    { PROJEÇÃO }
)*/

db.remessas.find({
  peso_kg: { $gte: 50 },
  $or: [
    { destino: "SP" },
    { status: "Pendente" }
  ]
})

db.clientes.find({
  cidade: "Curitiba",
  idade: { $gte: 18 }
})

//existe o campo promoçaõ
db.produtos.find({
    promocao: { $exists: true }
})



db.socios.find({
  nome_socio: "EVERTON RIBEIRO DE CARVALHO"
})


//Consulte os clientes cuja idade seja maior ou igual a 18 anos
//  e que morem em "São Paulo". Retorne somente nome, idade e cidade, ocultando o _id.
db.clientes.find(
    {
        idade: { $gte: 18 },
        cidade: "São Paulo"
    },
    {
        nome: 1,
        idade: 1,
        cidade: 1,
        _id: 0
    }
)