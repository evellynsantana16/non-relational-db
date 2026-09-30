# COLA RÁPIDA — MongoDB

## CONSULTA

```text
>       $gt
>=      $gte
<       $lt
<=      $lte
!=      $ne
OU      $or
existe  $exists
```

```javascript
db.produtos.find({ preco: { $gte: 200 } })
```

### E + OU

```javascript
db.remessas.find({
  peso_kg: { $gte: 50 },
  $or: [
    { destino: "SP" },
    { status: "Pendente" }
  ]
})
```

## ALTERAÇÃO

```text
1 doc  -> updateOne
vários -> updateMany
```

```text
$set   -> cria/altera campo
$unset -> remove campo
$inc   -> soma/subtrai
$mul   -> multiplica
$min   -> menor
$max   -> maior
```

### Tirar 5

```javascript
$inc: { estoque: -5 }
```

### Aumentar 5%

```javascript
$mul: { saldo: 1.05 }
```

## ARRAYS

```text
$push -> adiciona
$pull -> remove
$each -> vários
```

```javascript
$push: {
  tags: {
    $each: ["performance", "json"]
  }
}
```

## ÍNDICES

```javascript
db.socios.createIndex({ nome: 1 })
```

### ESR

```text
E = Equality
S = Sort
R = Range

E -> S -> R
```

### Explain

```javascript
db.socios.find({ nome: "João" })
  .explain("executionStats")
```

```text
IXSCAN  -> usou índice
COLLSCAN -> varreu coleção
```

Métricas:

```text
totalKeysExamined
totalDocsExamined
nReturned
executionTimeMillis
```

### Limitar

```javascript
.limit(5)
```

## IMPORT / EXPORT

```text
mongoexport -> JSON/CSV
mongoimport -> JSON/CSV
```

```text
--query -> filtro
--headerline -> 1ª linha é cabeçalho
--numInsertionWorkers=2 -> paralelismo
```

## BACKUP

```text
mongodump -> BSON/backup
mongorestore -> restaura
--gzip -> comprime
```

## USUÁRIOS / ROLES

```text
createUser()
getUsers()
getUser()
createRole()
grantRolesToUser()
grantPrivilegesToRole()
revokeRolesFromUser()
revokePrivilegesFromRole()
```

```text
resource -> onde
            banco + coleção

actions  -> o que pode fazer
```

### COUNT

```javascript
db.grantPrivilegesToRole(
  "leitorApenasClientes",
  [{
    resource: {
      db: "Receita",
      collection: "clientes"
    },
    actions: ["count"]
  }]
)
```

## PALAVRAS DO ENUNCIADO → COMANDO

```text
"tirar 5"             -> $inc: -5
"aumentar 5%"         -> $mul: 1.05
"remover tag"         -> $pull
"adicionar tags"      -> $push
"várias tags"         -> $push + $each
"maior ou igual"      -> $gte
"OU"                  -> $or
"índice"              -> createIndex
"verificar índice"    -> explain
"máximo 5"            -> limit(5)
"exportar filtrado"   -> mongoexport + --query
"CSV + cabeçalho"     -> --headerline
"2 workers"           -> --numInsertionWorkers=2
"backup comprimido"   -> mongodump + --gzip
"somente leitura"     -> role read
"leitura e escrita"   -> role readWrite
"criar role"          -> createRole
"dar role"            -> grantRolesToUser
"dar permissão"       -> grantPrivilegesToRole
"permitir count"      -> actions: ["count"]
```
