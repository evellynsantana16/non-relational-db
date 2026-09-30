# MAPA RÁPIDO

| Enunciado | Use |
|---|---|
| inserir 1 | `insertOne()` |
| inserir vários | `insertMany()` |
| consultar | `find()` |
| mostrar campos | projeção |
| limitar | `.limit()` |
| maior/igual | `$gte` |
| maior | `$gt` |
| menor/igual | `$lte` |
| menor | `$lt` |
| diferente | `$ne` |
| OU | `$or` |
| E explícito | `$and` |
| possui campo | `$exists` |
| remover array | `$pull` |
| adicionar array | `$push` |
| adicionar vários | `$push` + `$each` |
| criar/alterar campo | `$set` |
| valor fixo | `$inc` |
| percentual | `$mul` |
| índice | `createIndex()` |
| desempenho | `.explain("executionStats")` |
| índice usado | `IXSCAN` |
| varredura | `COLLSCAN` |
| importar | `mongoimport` |
| exportar | `mongoexport` |
| backup | `mongodump` |
| restaurar | `mongorestore` |
| CSV cabeçalho | `--headerline` |
| arquivo de entrada | `--file` |
| arquivo de saída | `--out` |
| arquivo único | `--archive` |
| compactar | `--gzip` |
| apagar antes | `--drop` |
| 2 workers | `--numInsertionWorkers=2` |
| usuário/role | `createUser()` |

## ESR
Equality -> Sort -> Range.
