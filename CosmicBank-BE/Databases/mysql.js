const mysql = require('mysql2')

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'mafefe4598!',
	database: 'cosmicbank',
})

module.exports = pool.promise()