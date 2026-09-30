/*Use $or para retornar todos os produtos que custam menos de 2000
ou têm estoque maior que 20.*/

db.produtos.find({
    $or: [
        { preco: { $lt: 2000 } },
        { estoque: { $gt: 20 } }
    ]
})