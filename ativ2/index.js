import express from 'express'
import db from './db/config.js'

const app = express()

app.get('/', (req, res) => {
	res.send('Hello World')
})

const getUsers = () => {
	db.query('SELECT * FROM usuario', (err, rows) => {
		if (err) throw err
		return rows
	})
}

app.get('/usuario', async (req, res) => {
	const usuario = await getUsers()
	res.send(usuario)
})

app.listen(3000, () => {
	console.log('Server is running on port 3000')
})
