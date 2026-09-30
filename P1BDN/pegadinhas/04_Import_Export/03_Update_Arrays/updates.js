//use Loja

db.produtos.updateOne(
  { _id: 10 },
  { $inc: { preco: -5 } }
)

db.contas.updateMany(
  { status: "Ativa" },
  {
    $mul: { saldo: 1.05 },
    $set: { ultima_atualizacao: 2026 }
  }
)

db.postagens.updateOne(
  { _id: 505 },
  {
    $pull: { tags: "antigo" },
    $push: { tags: { $each: ["performance", "json"] } }
  }
)
