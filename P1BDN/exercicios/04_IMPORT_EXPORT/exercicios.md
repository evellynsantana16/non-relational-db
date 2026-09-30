# 10 EXERCÍCIOS — IMPORT/EXPORT

## 01
**Enunciado:** Importe socios.csv para Receita.socios com cabeçalho.
```bash
mongoimport --db Receita --collection socios --type=csv --headerline --file socios.csv
```
**Por quê:** CSV + cabeçalho.

## 02
**Enunciado:** Importe usando 2 workers.
```bash
mongoimport --db Receita --collection socios --type=csv --headerline --numInsertionWorkers=2 --file socios.csv
```
**Por quê:** paralelismo de inserção.

## 03
**Enunciado:** Importe JSON.
```bash
mongoimport --db loja --collection produtos --type=json --file produtos.json
```
**Por quê:** arquivo JSON.

## 04
**Enunciado:** Exporte toda a coleção em JSON.
```bash
mongoexport --db Receita --collection socios --type=json --out socios.json
```
**Por quê:** exportação usa --out.

## 05
**Enunciado:** Exporte apenas sócios de Jahu.
```bash
mongoexport --db Receita --collection socios --type=json --out socios_jahu.json --query='{"cidade":"Jahu"}'
```
**Por quê:** --query filtra.

## 06
**Enunciado:** Exporte vendas >= 1000.
```bash
mongoexport --db loja --collection vendas --type=json --out vendas.json --query='{"valor":{"$gte":1000}}'
```
**Por quê:** $gte = maior/igual.

## 07
**Enunciado:** Exporte vendas >= 1000 de Jahu.
```bash
mongoexport --db loja --collection vendas --type=json --out vendas_jahu.json --query='{"valor":{"$gte":1000},"cidade":"Jahu"}'
```
**Por quê:** duas condições = AND.

## 08
**Enunciado:** Exporte pedidos Pendente OU Aguardando.
```bash
mongoexport --db loja --collection pedidos --type=json --out pendentes.json --query='{"$or":[{"status":"Pendente"},{"status":"Aguardando"}]}'
```
**Por quê:** $or recebe array.

## 09
**Enunciado:** Importe socios_sem_aspas.csv.
```bash
mongoimport --db Receita --collection socios --type=csv --headerline --file socios_sem_aspas.csv
```
**Por quê:** continua sendo CSV; siga a estrutura real solicitada.

## 10
**Enunciado:** Exporte Jahu para CSV.
```bash
mongoexport --db Receita --collection socios --type=csv --fields nome_socio,cidade --out socios_jahu.csv --query='{"cidade":"Jahu"}'
```
**Por quê:** CSV precisa dos campos em --fields.
