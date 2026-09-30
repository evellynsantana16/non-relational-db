# UPDATE E ARRAYS

`updateOne()` -> um documento.
`updateMany()` -> vários documentos.

`$set` cria/atualiza campo.
`$unset` remove campo.
`$inc` soma/subtrai valor fixo.
`$mul` multiplica.
`$pull` remove item do array.
`$push` adiciona.
`$each` adiciona vários itens individualmente.

Pegadinha:
5% de aumento -> `$mul: { saldo: 1.05 }`.
Tirar 5 reais -> `$inc: { preco: -5 }`.
