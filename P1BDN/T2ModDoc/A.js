//O restaurante decidiu aumentar o preço de todos os pratos em 10%.
//  Atualize os preços.
db.menu.updateMany(
    {},
    {
        $mul: {
            price: 1.10 }
    }
)

db.menu.find()