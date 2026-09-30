# MongoDB — Comandos de Terminal

## 1. mongoexport — JSON

```bash
mongoexport --db loja --collection produtos --type=json --out produtos.json
```

### Com filtro

```bash
mongoexport \
  --db Receita \
  --collection socios \
  --type=json \
  --out socios_filtrados.json \
  --query='{"cidade":"Curitiba"}'
```


`--query` = filtra o que será exportado.

---

## 2. mongoimport — CSV

```bash
mongoimport \
  --db Receita \
  --collection socios \
  --type csv \
  --file socios.csv
```

### Primeira linha como cabeçalho

```bash
mongoimport --db Receita --collection socios --type=csv --headerline --file socios.csv


### Dois workers

```bash
mongoimport \
  --db Receita \
  --collection socios \
  --type csv \
  --headerline \
  --numInsertionWorkers=2 \
  --file socios.csv
```

`--numInsertionWorkers=2` = dois workers de inserção para paralelizar a carga.

Não confundir com `--numParallelCollections`, usado no contexto de `mongodump`.

---

## 3. Preparar CSV com Python

Quando o arquivo estiver em ISO-8859-1 e usar `;`:

```python
import pandas as pd

df = pd.read_csv(
    "dados.csv",
    encoding="ISO-8859-1",
    sep=";"
)

df.to_csv(
    "dados_tratados.csv",
    encoding="utf-8",
    index=False
)
```

Depois:

```bash
mongoimport \
  --db Receita \
  --collection socios \
  --type csv \
  --headerline \
  --numInsertionWorkers=2 \
  --file dados_tratados.csv
```

---

## 4. Monitoramento de hardware

Se o enunciado pedir CPU e Disco durante a importação:

1. Abra o Gerenciador de Tarefas.
2. Execute o `mongoimport`.
3. Observe CPU e Disco.
4. Registre os dados solicitados.

Isso é monitoramento do sistema operacional, não um operador MongoDB.

---

## 5. mongodump — backup BSON

```bash
mongodump \
  --db Receita \
  --out ./backup
```

### Com compressão

```bash
mongodump \
  --db Receita \
  --out ./backup \
  --gzip
```

//UNICO ARQUIVO ARCHINE
```bash
mongodump \
  --db loja \
  --archive=backup_loja.archive \
  --gzip



`mongodump` = backup binário BSON.

`--gzip` = compressão.

---
```

## 6. mongorestore

```bash
mongorestore \
  --db Receita \
  ./backup/Receita
```

## 6.1 mongorestore com drop
```bash
mongorestore \
  --db Receita \
  --drop \
  ./backup/Receita
```
### Backup comprimido

```bash
mongorestore \
  --db Receita \
  --gzip \
  ./backup/Receita
```

---

/RESTAURAR O BACKUP COM ARQ COMPACTADO
```Bash
mongorestore \
  --archive=backup_loja.archive \
  --gzip
  ```
-----------------------------------------
  mongodump    → FAZ o backup
mongorestore → DEVOLVE o backup para o Mongo

--archive    → backup está em UM arquivo
--gzip       → arquivo está compactado




## 7. Tabela para não confundir

| Tarefa | Comando |
|---|---|
| Exportar JSON/CSV | `mongoexport` |
| Importar JSON/CSV | `mongoimport` |
| Backup BSON | `mongodump` |
| Restaurar BSON | `mongorestore` |
| Filtrar exportação | `--query` |
| Cabeçalho CSV | `--headerline` |
| Paralelismo de importação | `--numInsertionWorkers=2` |
| Compressão do dump | `--gzip` |
