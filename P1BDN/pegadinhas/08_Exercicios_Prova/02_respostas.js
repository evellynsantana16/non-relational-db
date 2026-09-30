// RESPOSTAS DOS EXERCÍCIOS

// 1
db.clientes.insertOne({
  nome: "Carlos",
  cpf: "123.456.789-00",
  enderecos: [
    { rua: "Rua A", numero: 10, cidade: "Jahu" },
    { rua: "Av B", numero: 200, cidade: "Bauru" }
  ]
})

// 2
db.remessas.find({
  peso_kg: { $gte: 50 },
  $or: [{ destino: "SP" }, { status: "Pendente" }]
})

// 3
db.contas.updateMany(
  { status: "Ativa" },
  { $mul: { saldo: 1.05 }, $set: { ultima_atualizacao: 2026 } }
)

// 4
db.postagens.updateOne(
  { _id: 505 },
  { $pull: { tags: "antigo" },
    $push: { tags: { $each: ["performance", "json", "mongodb"] } } }
)

// 9
db.pacientes.createIndex({ cidade: 1, ano_nascimento: -1 })

// 10
db.pacientes.find({ cidade: "Curitiba" })
  .sort({ ano_nascimento: -1 })
  .explain("executionStats")

// 11
db.socios.find({ nome: "Ana" }).limit(5)

// 12
db.createUser({
  user: "rootUser",
  pwd: "super123",
  roles: [{ role: "root", db: "admin" }]
})
