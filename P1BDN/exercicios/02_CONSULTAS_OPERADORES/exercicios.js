// 01 — peso >= 50 E destino SP OU status Pendente
db.remessas.find({
    peso_kg: { $gte: 50 },
    $or: [
        { destino: "SP" },
        { status: "Pendente" }
    ]
});
// POR QUÊ: $gte = maior/igual; campos juntos = AND; $or = OU.

// 02 — idade >= 18 e São Paulo
db.clientes.find({
    idade: { $gte: 18 },
    cidade: "São Paulo"
});
// POR QUÊ: duas condições simultâneas.

// 03 — preço entre 100 e 500
db.produtos.find({
    preco: { $gte: 100, $lte: 500 }
});
// POR QUÊ: dois limites no mesmo campo.

// 04 — diferente de Cancelado
db.pedidos.find({
    status: { $ne: "Cancelado" }
});
// POR QUÊ: diferente -> $ne.

// 05 — Pix OU Cartão
db.pedidos.find({
    $or: [
        { forma_pagamento: "Pix" },
        { forma_pagamento: "Cartão" }
]
});
// POR QUÊ: OU -> $or + array.

// 06 — possui promoção
db.produtos.find({
    promocao: { $exists: true }
});
// POR QUÊ: verifica se o campo existe.

// 07 — não possui promoção
db.produtos.find({
    promocao: { $exists: false }
});
// POR QUÊ: false procura ausência.

// 08 — Curitiba e nascimento <= 2000
db.pacientes.find({
    cidade: "Curitiba",
    ano_nascimento: { $lte: 2000 }
});
// POR QUÊ: igualdade + comparação.

// 09 — SP OU RJ, não cancelado
db.remessas.find({
    status: { $ne: "Cancelado" },
    $or: [
        { destino: "SP" },
        { destino: "RJ" }
    ]
});
// POR QUÊ: AND entre status e grupo OR.

// 10 — projeção
db.usuarios.find(
    { cidade: "São Paulo" },
    { idade: 1, _id: 0 }
);
// POR QUÊ: idade:1 mostra; _id:0 oculta.
