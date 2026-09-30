//use admin

db.PetShop.createUser({
  user: "rootUser",
  pwd: "super123",
  roles: [
    { role: "root", db: "admin" }
  ]
})

/*O professor entregou o arquivo socios.csv, contendo os campos cnpj_basico, nome_socio, cpf_cnpj_socio e cidade.
Importe o arquivo para o banco Receita, na coleção socios, utilizando a primeira linha como cabeçalho.

Depois, consulte somente os sócios chamados "JOAO DA SILVA" que sejam da cidade "Jahu".
 A consulta deve retornar apenas os campos nome_socio e cidade, ocultando o _id, e deve limitar o resultado a 5 documentos.*/

 /*iimportar o csv 
 mongoimport \
  --db Receita \
  --collection socios \
  --type=csv \
  --headerline \
  --file socios.csv

  CSV
↓
mongoimport

primeira linha = nomes dos campos
↓
--headerline

arquivo que vou LER
↓
--file

//cnsultar os socios

db.socios.find(
    {
        nome_socio: "JOAO DA SILVA",
        cidade: "Jahu"
    },
    {
        nome_socio: 1,
        cidade: 1,
        _id: 0
    }
).limit(5)*/