# MongoDB — GUIA DE CONSULTA PARA PROVA

## COMO USAR NO VS CODE
Os arquivos `.js` contêm comandos MongoDB. Você pode copiar os comandos e colar no `mongosh`, ou executar um arquivo com `mongosh arquivo.js` se seu ambiente permitir.

## MAPA: PALAVRA DO ENUNCIADO -> COMANDO

- colocar dados no MongoDB -> `mongoimport`
- tirar dados do MongoDB -> `mongoexport`
- CSV -> `--type=csv`
- primeira linha é cabeçalho -> `--headerline`
- arquivo de entrada -> `--file`
- arquivo de saída -> `--out`
- filtrar exportação -> `--query`
- acelerar importação com 2 workers -> `--numInsertionWorkers=2`
- backup BSON -> `mongodump`
- comprimir -> `--gzip`
- backup em arquivo único -> `--archive=nome.archive`
- restaurar -> `mongorestore`
- substituir coleção durante restore -> `--drop`
- tirar/adicionar valor fixo -> `$inc`
- aumentar por percentual/fator -> `$mul`
- criar/alterar campo -> `$set`
- remover campo -> `$unset`
- remover item de array -> `$pull`
- adicionar item -> `$push`
- adicionar vários itens individualmente -> `$push` + `$each`
- maior ou igual -> `$gte`
- maior -> `$gt`
- menor ou igual -> `$lte`
- diferente -> `$ne`
- OU -> `$or`
- índice -> `createIndex()`
- verificar índice -> `.explain("executionStats")`
- índice usado -> `IXSCAN`
- varredura da coleção -> `COLLSCAN`
- retornados -> `nReturned`
- documentos examinados -> `totalDocsExamined`
- chaves examinadas -> `totalKeysExamined`
- limitar a 5 -> `.limit(5)`
- usuário -> `db.createUser()`
- permissões -> `roles`

## 1. MODELAGEM SQL -> MONGODB

Quando o enunciado pedir para eliminar JOIN usando dados embutidos:

```javascript
db.clientes.insertOne({
  nome: "Carlos",
  cpf: "123.456.789-00",
  enderecos: [
    { rua: "Rua A", numero: 10, cidade: "Jahu" },
    { rua: "Av B", numero: 200, cidade: "Bauru" }
  ]
})
```

PEGADINHA: vários endereços = array de objetos. Se o objetivo for embedded documents, não separe em duas coleções por referência.

## 2. OPERADORES

```javascript
db.remessas.find({
  peso_kg: { $gte: 50 },
  $or: [
    { destino: "SP" },
    { status: "Pendente" }
  ]
})
```

Lê-se: peso >= 50 E (destino SP OU status Pendente).

`$or` recebe um array de objetos. Campos diferentes no mesmo filtro já representam AND implícito.

## 3. UPDATES

Tirar 5:

```javascript
db.produtos.updateOne({ _id: 10 }, { $inc: { preco: -5 } })
```

Aumentar 5%:

```javascript
db.contas.updateMany(
  { status: "Ativa" },
  {
    $mul: { saldo: 1.05 },
    $set: { ultima_atualizacao: 2026 }
  }
)
```

Remover tag e adicionar várias:

```javascript
db.postagens.updateOne(
  { _id: 505 },
  {
    $pull: { tags: "antigo" },
    $push: { tags: { $each: ["performance", "json"] } }
  }
)
```

PEGADINHA: `$push` sem `$each` pode inserir o array como um único elemento.

## 4. IMPORT / EXPORT

Import:

```bash
mongoimport --db Receita --collection socios --type=csv --headerline --numInsertionWorkers=2 --file socios_sem_aspas
```

Export:

```bash
mongoexport --db Receita --collection socios --type=json --out socios.json
```

Export filtrado:

```bash
mongoexport --db Receita --collection socios --type=json --out socios_curitiba.json --query='{"cidade":"Curitiba"}'
```

PEGADINHAS: import usa `--file`; export usa `--out`; cabeçalho usa `--headerline`.

## 5. BACKUP / RESTORE

Backup:

```bash
mongodump --db Receita --out ./backup
```

Com compressão:

```bash
mongodump --db Receita --out ./backup --gzip
```

Archive:

```bash
mongodump --db Receita --archive=receita.archive --gzip
```

Restore:

```bash
mongorestore --db Receita ./backup/Receita
```

Restore substituindo coleções:

```bash
mongorestore --drop --db Receita ./backup/Receita
```

`mongodump` faz backup; `mongorestore` restaura.

## 6. ÍNDICES / ESR / EXPLAIN

Consulta:

```javascript
db.pacientes.find({ cidade: "Curitiba" }).sort({ ano_nascimento: -1 })
```

Índice:

```javascript
db.pacientes.createIndex({ cidade: 1, ano_nascimento: -1 })
```

ESR: Equality -> Sort -> Range.

Explain:

```javascript
db.pacientes.find({ cidade: "Curitiba" })
  .sort({ ano_nascimento: -1 })
  .explain("executionStats")
```

Observe `nReturned`, `totalDocsExamined`, `totalKeysExamined`, `executionTimeMillis` e os estágios `IXSCAN`/`COLLSCAN`.

## 7. LIMIT

```javascript
db.socios.find({ nome: "Ana" }).limit(5)
```

## 8. USUÁRIOS

```javascript
use admin

db.createUser({
  user: "rootUser",
  pwd: "super123",
  roles: [
    { role: "root", db: "admin" }
  ]
})
```

Atenção ao banco da role.

# EXERCÍCIOS NÍVEL DE PROVA

1. Modele clientes e vários endereços em um único documento usando embedded documents.
2. Encontre remessas com `peso_kg >= 50` E `(destino == "SP" OU status == "Pendente")`.
3. Aumente em 5% o saldo das contas Ativas e crie `ultima_atualizacao: 2026`.
4. Na postagem 505, remova `antigo` e acrescente `performance` e `json` individualmente.
5. Importe `socios_sem_aspas` para `Receita.socios`, CSV, cabeçalho e 2 workers.
6. Exporte apenas sócios de Curitiba para JSON.
7. Faça backup comprimido de Receita.
8. Restaure o backup substituindo as coleções.
9. Crie índice para `find({cidade:"Curitiba"}).sort({ano_nascimento:-1})`.
10. Rode `explain("executionStats")` e interprete IXSCAN, COLLSCAN e métricas.
11. Crie índice simples em nome e limite a 5 resultados.
12. Crie rootUser com senha super123 e role root.



Se perguntarem:

"Como comprovar que o índice foi utilizado?"

Você pode falar:

Verifico a presença de IXSCAN no estágio de execução e analiso totalKeysExamined e totalDocsExamined. A presença de COLLSCAN indicaria uma varredura completa da coleção.

/*Consulte os sócios cujo nome seja "JOAO DA SILVA", utilize o índice criado, retorne no máximo 5 documentos e analise o plano de execução com executionStats.*/


db.socios.find({
    nome: "JOAO DA SILVA"
}).limit(5).explain("executionStats")