//O Sushi teve um reajuste e agora custa 35. Atualize esse valor.

db.menu.updateOne(
    { dish: "Sushi" },
    {  $inc: { price: -9 } }
)

db.menu.findOne({ dish: "Sushi" })