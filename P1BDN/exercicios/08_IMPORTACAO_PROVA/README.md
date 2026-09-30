# QUANDO O PROFESSOR ENTREGA O BANCO

1. Veja a extensão: `.json` ou `.csv`.
2. Importe.
3. Abra `mongosh`.
4. `show dbs`
5. `use Receita`
6. `show collections`
7. `db.socios.find().limit(5)` para descobrir os campos.
8. Só então monte as consultas.

JSON:
```bash
mongoimport --db Receita --collection socios --type=json --file socios.json
```

CSV com cabeçalho:
```bash
mongoimport --db Receita --collection socios --type=csv --headerline --file socios.csv
```

CSV + 2 workers:
```bash
mongoimport --db Receita --collection socios --type=csv --headerline --numInsertionWorkers=2 --file socios.csv
```

Se a questão pedir Python para sanitização, siga exatamente o tratamento exigido pelo enunciado.
