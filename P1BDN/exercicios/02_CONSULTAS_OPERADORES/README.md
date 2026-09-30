# CONSULTAS E OPERADORES

Primeiro objeto do `find()` = filtro.
Segundo objeto = projeção.

`$gte` maior ou igual; `$gt` maior; `$lte` menor ou igual; `$lt` menor; `$ne` diferente.
`$or` recebe ARRAY de condições.
`$exists` verifica existência do campo.

Exemplo:
```javascript
db.usuarios.find(
  { cidade: "São Paulo" },
  { idade: 1, _id: 0 }
)
```

Não confunda filtro com projeção.
