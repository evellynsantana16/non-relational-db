// 01 — rendimento 5% e ano
db.contas.updateMany(
    { status: "Ativa" },
    {
        $mul: { saldo: 1.05 },
        $set: { ultima_atualizacao: 2026 }
    }
);
// POR QUÊ: percentual -> $mul; campo novo -> $set.

// 02 — tirar 5 reais
db.produtos.updateOne(
    { nome: "Cadeira" },
    { $inc: { preco: -5 } }
);
// POR QUÊ: valor fixo -> $inc.

// 03 — aumentar estoque em 10
db.produtos.updateMany(
    { categoria: "Eletrônico" },
    { $inc: { estoque: 10 } }
);
// POR QUÊ: incremento fixo.

// 04 — criar disponível
db.produtos.updateMany(
    {},
    { $set: { disponivel: true } }
);
// POR QUÊ: {} seleciona todos.

// 05 — remover campo
db.produtos.updateMany(
    {},
    { $unset: { campo_antigo: "" } }
);
// POR QUÊ: $unset remove.

// 06 — pull + push + each
db.postagens.updateOne(
    { _id: 505 },
    {
        $pull: { tags: "antigo" },
        $push: {
            tags: { $each: ["performance", "json"] }
        }
    }
);
// POR QUÊ: pull remove; push adiciona; each adiciona vários.

// 07 — vários ingredientes
db.receitas.updateOne(
    { nome: "Taco" },
    {
        $push: {
            ingredientes: {
                $each: ["frango", "cebola", "queijo"]
            }
        }
    }
);
// POR QUÊ: vários elementos -> $each.

// 08 — trocar beef por chicken
db.receitas.updateOne(
    { nome: "Taco" },
    {
        $pull: { ingredientes: "beef" },
        $push: { ingredientes: "chicken" }
    }
);
// POR QUÊ: remove um e adiciona outro.

// 09 — aumentar preços 10%
db.produtos.updateMany(
    { categoria: "Eletrônico" },
    { $mul: { preco: 1.10 } }
);
// POR QUÊ: percentual -> multiplicação.

// 10 — atualizar usuário
db.usuarios.updateOne(
    { email: "maria@email.com" },
    {
        $set: {
            ativo: true,
            ultima_atualizacao: 2026
        }
    }
);
// POR QUÊ: updateOne para um documento específico.
