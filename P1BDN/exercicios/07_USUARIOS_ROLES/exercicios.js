// 01
db.PetShop.createUser({
    user: "rootUser",
    pwd: "super123",
    roles: [{ role: "root", db: "admin" }]
});
// POR QUÊ: padrão de criação de usuário + role.

// 02
db.loja.createUser({
    user: "leitor",
    pwd: "senha123",
    roles: [{ role: "read", db: "loja" }]
});
// POR QUÊ: somente leitura.

// 03
db.loja.createUser({
    user: "operador",
    pwd: "senha123",
    roles: [{ role: "readWrite", db: "loja" }]
});
// POR QUÊ: leitura e escrita.

// 04
db.loja.createUser({
    user: "gerente",
    pwd: "senha123",
    roles: [
        { role: "readWrite", db: "loja" },
        { role: "read", db: "relatorios" }
    ]
});
// POR QUÊ: várias roles.

// 05
use admin
db.createUser({
    user: "administrador",
    pwd: "senha123",
    roles: [{ role: "root", db: "admin" }]
});
// POR QUÊ: usuário criado no admin.

// 06
db.Receita.createUser({
    user: "consulta",
    pwd: "senha123",
    roles: [{ role: "read", db: "Receita" }]
});
// POR QUÊ: read no banco Receita.

// 07
db.Receita.createUser({
    user: "importador",
    pwd: "senha123",
    roles: [{ role: "readWrite", db: "Receita" }]
});
// POR QUÊ: escrita no banco.

// 08
db.sistema.createUser({
    user: "gestor",
    pwd: "senha123",
    roles: [
        { role: "readWrite", db: "sistema" },
        { role: "read", db: "relatorios" }
    ]
});
// POR QUÊ: duas permissões.

// 09
db.PetShop.createUser({
    user: "rootPet",
    pwd: "super123",
    roles: [{ role: "root", db: "admin" }]
});
// POR QUÊ: mesma estrutura da questão de prova.

// 10 — molde
db.NOME_DO_BANCO.createUser({
    user: "NOME_USUARIO",
    pwd: "SENHA",
    roles: [{ role: "ROLE", db: "BANCO_DA_ROLE" }]
});
// POR QUÊ: substitua somente os valores pedidos.
