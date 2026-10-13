

db.carros.insertMany([
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2024,
    preco: 150000
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    preco: 145000
  },
  {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2024,
    preco: 85000
  },
  {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2022,
    preco: 55000
  },
  {
    marca: "Hyundai",
    modelo: "HB20",
    ano: 2023,
    preco: 78000
  },
  {
    marca: "Fiat",
    modelo: "Argo",
    ano: 2024,
    preco: 82000
  },
  {
    marca: "Jeep",
    modelo: "Compass",
    ano: 2023,
    preco: 135000
  },
  {
    marca: "BMW",
    modelo: "320i",
    ano: 2022,
    preco: 220000
  },
  {
    marca: "Ford",
    modelo: "Ranger",
    ano: 2024,
    preco: 200000
  },
  {
    marca: "Renault",
    modelo: "Kwid",
    ano: 2023,
    preco: 62000
  }
])



db.carros.createIndex({ marca: 1 })

db.carros.countDocuments()