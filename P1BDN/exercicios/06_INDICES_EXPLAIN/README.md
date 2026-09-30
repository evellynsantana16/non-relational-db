# ÍNDICES / EXPLAIN

ESR = Equality -> Sort -> Range.

Exemplo:
```javascript
db.pacientes.createIndex({
  cidade: 1,
  ano_nascimento: -1
})
```
para:
```javascript
db.pacientes.find({cidade:"Curitiba"})
  .sort({ano_nascimento:-1})
```

Análise:
```javascript
.explain("executionStats")
```

Procure:
- `IXSCAN` -> índice.
- `COLLSCAN` -> varredura da coleção.
- `nReturned` -> retornados.
- `totalKeysExamined` -> chaves do índice examinadas.
- `totalDocsExamined` -> documentos examinados.
