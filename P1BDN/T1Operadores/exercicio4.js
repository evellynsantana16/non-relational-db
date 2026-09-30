/*Escreva uma consulta que retorne apenas os produtos que possuem
o campo avaliacao.*/

db.produtos.find({
    avaliacao: { $exists: true }
})