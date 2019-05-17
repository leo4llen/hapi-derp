require('dotenv').config()

const mysql = require('mysql')
const util = require('util')
const con = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

con.getConnection((err, connection) => {
  if (err) return console.error(err)
  if (connection) connection.release()
  console.log('Connected to Database')
})

con.query = util.promisify(con.query)

module.exports = con
