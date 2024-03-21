import mysql from 'mysql2'

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'opt120',
})

db.connect((err) => {
	if (err) throw err
	console.log('Connected to MySQL Server!')
})

export default db
