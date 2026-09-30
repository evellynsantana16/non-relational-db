# BACKUP / RESTORE

Pasta:
```bash
mongodump --db Receita --out ./backup --gzip
```

Arquivo único:
```bash
mongodump --db Receita --archive=receita.archive --gzip
```

Restore de pasta:
```bash
mongorestore --db Receita ./backup/Receita
```

Restore com limpeza:
```bash
mongorestore --db Receita --drop ./backup/Receita
```

Restore de archive gzip:
```bash
mongorestore --archive=receita.archive --gzip
```

`--out` = pasta.
`--archive` = arquivo único.
`--gzip` = compressão.
`--drop` = remove coleção existente antes de restaurar.
