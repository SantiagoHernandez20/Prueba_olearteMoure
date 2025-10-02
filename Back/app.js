function EnviarDatos() {
  document.getElementById('btn')
  console.log('click')
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log('score nuevo')
    return result

  })

}


const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'scores'
})


connection.connect()
console.log('CONEXIÓN ESTABLECIDA')
const sql = "INTER INTO score (id, player_name, score) VALUES ('1', 'santiago', 20)"

app.get('/', (req, res) => {
  res.send('Página inicial')

})

app.post('/', function (req, res) {
  const button = document.getElementById('btn')
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log('score nuevo')
    return result

  })



})
app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`)
})
