/*O restaurante removeu "Beef" dos Tacos e substituiu por "Chicken".
Atualize a lista de ingredientes do Taco.*/

db.menu.updateOne(
    { dish: "Taco" },
    {
      $push: {
            ingredients: "Chicken"
        }
    }
    
)
 
