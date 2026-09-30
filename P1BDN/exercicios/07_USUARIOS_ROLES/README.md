# USUÁRIOS E ROLES

Molde:
```javascript
db.PetShop.createUser({
  user: "rootUser",
  pwd: "super123",
  roles: [
    { role: "root", db: "admin" }
  ]
})
```

O `db` antes do `createUser` é o banco onde o usuário é criado.
O `db` dentro de `roles` indica o banco associado à role.

Usuário != role:
- usuário = conta.
- role = permissões.
