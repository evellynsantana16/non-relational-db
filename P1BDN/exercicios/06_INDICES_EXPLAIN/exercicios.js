// 01 — índice simples
db.socios.createIndex({ nome_socio: 1 });
// POR QUÊ: índice no campo de busca.

// 02 — consulta
db.socios.find({ nome_socio: "JOAO DA SILVA" });
// POR QUÊ: consulta no campo indexado.

// 03 — ESR
db.pacientes.createIndex({
    cidade: 1,
    ano_nascimento: -1
});
// POR QUÊ: Equality antes de Sort.

// 04 — explain
db.pacientes.find({
    cidade: "Curitiba"
}).sort({
    ano_nascimento: -1
}).explain("executionStats");
// POR QUÊ: analisar plano e métricas.

// 05 — índice + limit + explain
db.socios.find({
    nome_socio: "JOAO DA SILVA"
}).limit(5).explain("executionStats");
// POR QUÊ: busca limitada e análise.

// 06 — outro composto
db.pessoas.createIndex({
    cidade: 1,
    idade: -1
});
// POR QUÊ: cidade = Equality; idade = Sort.

// 07 — consulta correspondente
db.pessoas.find({
    cidade: "Jahu"
}).sort({
    idade: -1
});
// POR QUÊ: corresponde ao índice.

// 08 — produto
db.produtos.createIndex({
    categoria: 1,
    preco: -1
});
// POR QUÊ: categoria + ordenação por preço.

// 09 — analisar
db.produtos.find({
    categoria: "Eletrônico"
}).sort({
    preco: -1
}).explain("executionStats");
// POR QUÊ: verificar IXSCAN/COLLSCAN.

// 10 — limit
db.socios.find({
    nome_socio: "MARIA"
}).limit(5).explain("executionStats");
// POR QUÊ: filtro + limit + explain.
