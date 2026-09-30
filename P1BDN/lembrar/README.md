# MongoDB — Consulta para Prova

Material pensado para ficar aberto no VS Code durante uma prova com consulta.

## COMO USAR

No VS Code, use `Ctrl + Shift + F` e pesquise uma palavra do enunciado:

- `tirar 5` / `diminuir` → `$inc`
- `5%` / `rendimento` → `$mul`
- `tag` / `ingrediente` → `$push` / `$pull`
- `vários de uma vez` → `$push + $each`
- `maior ou igual` → `$gte`
- `OU` → `$or`
- `existe` → `$exists`
- `índice` → `createIndex`
- `ESR` → Equality / Sort / Range
- `explain` → `executionStats`
- `IXSCAN` / `COLLSCAN`
- `limite 5` → `.limit(5)`
- `import` / `workers` / `headerline`
- `export` / `query`
- `backup` / `gzip`
- `usuário` / `role` / `count`

## MAPA MENTAL

```text
MONGODB
│
├── CONSULTAR
│   ├── find()
│   ├── $gt $gte $lt $lte $ne
│   ├── $or $and $nor $exists
│   └── limit()
│
├── ALTERAR
│   ├── updateOne / updateMany
│   ├── $set $unset
│   ├── $inc $mul $min $max
│   └── $push $pull $each
│
├── DESEMPENHO
│   ├── createIndex()
│   ├── ESR = Equality → Sort → Range
│   ├── explain("executionStats")
│   ├── IXSCAN / COLLSCAN
│   └── totalKeysExamined / totalDocsExamined / nReturned
│
├── ARQUIVOS
│   ├── mongoexport / mongoimport
│   ├── --query / --headerline
│   ├── --numInsertionWorkers=2
│   ├── mongodump / mongorestore
│   └── --gzip
│
└── ADMINISTRAÇÃO
    ├── createUser / getUsers / getUser
    ├── createRole
    ├── grantRolesToUser
    ├── grantPrivilegesToRole
    └── revoke...
```

## REGRAS DE OURO

| Enunciado | Use |
|---|---|
| maior que | `$gt` |
| maior ou igual | `$gte` |
| menor que | `$lt` |
| menor ou igual | `$lte` |
| diferente | `$ne` |
| OU | `$or` |
| existe campo | `$exists: true` |
| um documento | `updateOne()` |
| vários documentos | `updateMany()` |
| criar/alterar campo | `$set` |
| remover campo | `$unset` |
| somar/subtrair | `$inc` |
| multiplicar | `$mul` |
| menor valor | `$min` |
| maior valor | `$max` |
| adicionar ao array | `$push` |
| remover do array | `$pull` |
| adicionar vários | `$push + $each` |
| limitar | `.limit(5)` |
| criar índice | `createIndex()` |
| verificar índice | `.explain("executionStats")` |
| índice usado | `IXSCAN` |
| varredura coleção | `COLLSCAN` |
| exportar JSON/CSV | `mongoexport` |
| importar JSON/CSV | `mongoimport` |
| primeira linha do CSV | `--headerline` |
| importação paralela | `--numInsertionWorkers=2` |
| backup BSON | `mongodump` |
| restaurar BSON | `mongorestore` |
| compressão | `--gzip` |
| criar usuário | `createUser()` |
| criar role | `createRole()` |
| dar role ao usuário | `grantRolesToUser()` |
| dar permissão à role | `grantPrivilegesToRole()` |
| remover role | `revokeRolesFromUser()` |
| remover privilégio | `revokePrivilegesFromRole()` |

## PEGADINHAS

### Tirar 5 de um estoque

```javascript
db.produtos.updateOne(
  { _id: 10 },
  { $inc: { estoque: -5 } }
)
```

Não é `$mul`. É `$inc` negativo.

### Aumentar 5%

```javascript
$mul: { saldo: 1.05 }
```

### Remover tag

```javascript
$pull: { tags: "antigo" }
```

### Adicionar várias tags

```javascript
$push: {
  tags: {
    $each: ["performance", "json"]
  }
}
```

### E + OU

Para `A E (B OU C)`:

```javascript
{
  A,
  $or: [ B, C ]
}
```

### ESR

`E = Equality`, `S = Sort`, `R = Range`.

Exemplo:

```javascript
db.pacientes.createIndex({
  cidade: 1,
  ano_nascimento: -1
})
```

porque `cidade` é igualdade e `ano_nascimento` é ordenação.

### Explain

```javascript
db.pacientes.find({ cidade: "Curitiba" })
  .sort({ ano_nascimento: -1 })
  .explain("executionStats")
```

Procure `IXSCAN`, `COLLSCAN`, `totalKeysExamined`, `totalDocsExamined`, `nReturned` e `executionTimeMillis`.

---

# ESTRUTURA DOS ARQUIVOS

- `EXERCICIOS_NIVEL_PROVA.mongodb` — exercícios completos com respostas.
- `COMANDOS_TERMINAL.md` — import/export, dump/restore e Python.
- `COLA_RAPIDA.md` — comandos para achar em segundos.
