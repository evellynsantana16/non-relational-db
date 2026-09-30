# 10 EXERCÍCIOS COMBINADOS

## 01 — import + consulta + projeção + limit
**Enunciado:** importe socios.csv e busque JOAO DA SILVA de Jahu, mostrando nome/cidade e no máximo 5.
```bash
mongoimport --db Receita --collection socios --type=csv --headerline --file socios.csv
```
```javascript
db.socios.find(
  { nome_socio: "JOAO DA SILVA", cidade: "Jahu" },
  { nome_socio: 1, cidade: 1, _id: 0 }
).limit(5)
```
**Por quê:** filtro + projeção + limit.

## 02 — índice + explain
**Enunciado:** crie índice no nome e analise busca.
```javascript
db.socios.createIndex({ nome_socio: 1 })
db.socios.find({ nome_socio: "JOAO DA SILVA" }).limit(5).explain("executionStats")
```
**Por quê:** índice + desempenho.

## 03 — ESR
**Enunciado:** cidade Curitiba + sort por ano decrescente.
```javascript
db.pacientes.createIndex({ cidade: 1, ano_nascimento: -1 })
```
**Por quê:** Equality antes de Sort.

## 04 — update percentual
**Enunciado:** contas ativas +5% e ano 2026.
```javascript
db.contas.updateMany(
  { status: "Ativa" },
  { $mul: { saldo: 1.05 }, $set: { ultima_atualizacao: 2026 } }
)
```
**Por quê:** $mul + $set.

## 05 — arrays
**Enunciado:** remova antigo e adicione performance/json.
```javascript
db.postagens.updateOne(
  { _id: 505 },
  {
    $pull: { tags: "antigo" },
    $push: { tags: { $each: ["performance", "json"] } }
  }
)
```
**Por quê:** pull + push + each.

## 06 — export filtrado
**Enunciado:** vendas >= 1000 de Jahu.
```bash
mongoexport --db loja --collection vendas --type=json --out vendas.json --query='{"valor":{"$gte":1000},"cidade":"Jahu"}'
```
**Por quê:** query com $gte + AND.

## 07 — dump archive gzip
**Enunciado:** backup em arquivo único comprimido.
```bash
mongodump --db Receita --archive=receita.archive --gzip
```
**Por quê:** archive + gzip.

## 08 — restore drop
**Enunciado:** restaure dump de pasta apagando coleções existentes.
```bash
mongorestore --db Receita --drop ./backup/Receita
```
**Por quê:** drop antes de restaurar.

## 09 — exists + projeção
**Enunciado:** produtos que possuem promoção, mostrando nome/preço sem id.
```javascript
db.produtos.find(
  { promocao: { $exists: true } },
  { nome: 1, preco: 1, _id: 0 }
)
```
**Por quê:** exists + projeção.

## 10 — ne + or
**Enunciado:** pedidos não cancelados com Pix ou Cartão.
```javascript
db.pedidos.find({
  status: { $ne: "Cancelado" },
  $or: [
    { forma_pagamento: "Pix" },
    { forma_pagamento: "Cartão" }
  ]
})
```
**Por quê:** $ne + $or.
