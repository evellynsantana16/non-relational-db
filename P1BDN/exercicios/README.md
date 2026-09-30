# COLINHA MONGODB — PROVA COM CONSULTA

Abra esta pasta no VS Code. Use `00_MAPA_RAPIDO.md` para achar rapidamente o assunto.

## Erros do treino destacados
- Índice não entra no `find()`: crie com `createIndex()`.
- Primeiro objeto do `find()` = filtro; segundo = projeção.
- `1` mostra; `0` oculta. `_id` normalmente precisa de `_id: 0`.
- “diferente” -> `$ne`.
- “possui o campo” -> `$exists: true`.
- aumento percentual -> `$mul`.
- valor fixo -> `$inc`.
- remover array -> `$pull`.
- vários itens no array -> `$push` + `$each`.
- importação lê -> `--file`.
- exportação grava -> `--out`.
- CSV com cabeçalho -> `--headerline`.
- 2 workers -> `--numInsertionWorkers=2`.
- dump em pasta -> `--out`.
- dump em arquivo único -> `--archive`.
- compressão -> `--gzip`.
- apagar antes do restore -> `--drop`.
- índice composto -> pense em ESR.
- `IXSCAN` = índice.
- `COLLSCAN` = varredura da coleção.
- `.limit(5)` limita resultados.
