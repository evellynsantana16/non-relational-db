//use Loja

//criar indice para paciente
db.pacientes.createIndex({
    cidade: 1,
    ano_nascimento: -1
})


db.socios.find({ nome: "Ana" }).limit(5)

db.pacientes.createIndex({
  cidade: 1,
  ano_nascimento: -1
})



/*Execute a consulta de pacientes de Curitiba,
 ordenados pelo ano de nascimento de forma decrescente, utilizando explain("executionStats"),
  e analise o resultado para verificar se o índice está sendo utilizado.*/
db.pacientes.find({
  cidade: "Curitiba"
}).sort({
  ano_nascimento: -1
}).explain("executionStats")

// Procure:
// IXSCAN / COLLSCAN
// nReturned
// totalDocsExamined
// totalKeysExamined
// executionTimeMillis
