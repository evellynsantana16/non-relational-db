# PROJEÇÃO — PEGADINHA IMPORTANTE

```javascript
db.usuarios.find(
    { cidade: "São Paulo" },
    { idade: 1, _id: 0 }
)
```

Primeiro objeto = quais documentos entram.
Segundo objeto = quais campos aparecem.

`1` = mostra.
`0` = oculta.

Exemplo:
```javascript
db.clientes.find(
    { idade: { $gte: 18 } },
    { nome: 1, cidade: 1, _id: 0 }
)
```

Não faça:
```javascript
db.clientes.find({
    { nome: 1 },
    { idade: 1 }
})
```
Isso mistura filtro e projeção.
