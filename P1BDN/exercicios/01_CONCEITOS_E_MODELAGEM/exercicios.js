// 01 — Cliente com vários endereços
// ENUNCIADO: modele um cliente com dois endereços embutidos.
db.clientes.insertOne({
    nome: "Carlos",
    cpf: "123.456.789-00",
    enderecos: [
        { rua: "Rua A", numero: 10, cidade: "Jahu" },
        { rua: "Av B", numero: 200, cidade: "Bauru" }
    ]
});
// POR QUÊ: vários endereços -> array de subdocumentos.

// 02 — Empresa com telefones
db.empresas.insertOne({
    razao_social: "Empresa X",
    telefones: [
        { tipo: "comercial", numero: "14999990000" },
        { tipo: "suporte", numero: "14111110000" }
    ]
});
// POR QUÊ: vários contatos relacionados.

// 03 — Pedido com produtos
db.pedidos.insertOne({
    cliente: { nome: "Maria", cidade: "Jahu" },
    produtos: [
        { nome: "Notebook", quantidade: 1, preco: 3500 },
        { nome: "Mouse", quantidade: 2, preco: 80 }
    ]
});
// POR QUÊ: cliente é subdocumento; produtos são array.

// 04 — Aluno com contatos
db.alunos.insertOne({
    nome: "João",
    contatos: [
        { tipo: "email", valor: "joao@email.com" },
        { tipo: "telefone", valor: "14999999999" }
    ]
});
// POR QUÊ: vários contatos.

// 05 — Paciente com endereço
db.pacientes.insertOne({
    nome: "Ana",
    endereco: { rua: "Rua Central", numero: 50, cidade: "Curitiba" },
    telefones: [
        { tipo: "celular", numero: "41999999999" },
        { tipo: "residencial", numero: "4133333333" }
    ]
});
// POR QUÊ: endereço único = objeto; vários telefones = array.

// 06 — Loja com produtos
db.lojas.insertOne({
    nome: "Loja Central",
    cidade: "Jahu",
    produtos: [
        { nome: "Notebook", preco: 3000 },
        { nome: "Celular", preco: 1800 },
        { nome: "Teclado", preco: 200 }
    ]
});
// POR QUÊ: produtos relacionados ficam embutidos.

// 07 — Funcionário com unidades
db.funcionarios.insertOne({
    nome: "Pedro",
    enderecos_trabalho: [
        { unidade: "Matriz", cidade: "Jahu" },
        { unidade: "Filial", cidade: "Bauru" }
    ]
});
// POR QUÊ: múltiplos endereços.

// 08 — SQL -> documento único
db.clientes.insertOne({
    id_cliente: 10,
    nome: "Lucia",
    enderecos: [
        { id_endereco: 1, rua: "A", cidade: "Jahu" },
        { id_endereco: 2, rua: "B", cidade: "Bauru" }
    ]
});
// POR QUÊ: dados da tabela relacionada foram embutidos.

// 09 — Pedido completo
db.pedidos.insertOne({
    numero: 500,
    comprador: { nome: "Rafael", cidade: "Jahu" },
    itens: [
        { produto: "Cadeira", quantidade: 1 },
        { produto: "Mesa", quantidade: 2 }
    ]
});
// POR QUÊ: comprador + itens relacionados.

// 10 — Clínica
db.clinicas.insertOne({
    nome: "Clínica Vida",
    endereco: { rua: "Rua Saúde", numero: 100, cidade: "Jahu" },
    servicos: [
        { nome: "Limpeza", preco: 100 },
        { nome: "Avaliação", preco: 80 }
    ]
});
// POR QUÊ: embedding evita separar dados relacionados.
