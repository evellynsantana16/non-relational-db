//O Taco agora vem com "Guacamole". Adicione esse ingrediente à lista ingredients.

db.menu.updateOne(
    { dish: "Taco" },
    {
        $push: { ingredients: "Guacamole"
        }
    }
)

db.menu.findOne({ dish: "Taco" })