import db from '../../db/config.js'

export const getUsers = async (req, res) => {
	try {
		const users = await db.promise().query('SELECT * FROM usuario')
		res.status(200).send({ status: 200, users: users[0] })
	} catch (error) {
		console.log(error)
		res.status(500).send({ status: 500, message: 'Internal server error' })
	}
}

export const createUser = async (req, res) => {
	const { nome, email, senha } = req.body
	const query = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)'
	const values = [nome, email, senha]

	try {
		await db.promise().query(query, values)
		res.status(201).send({ status: 201, message: 'User created successfully' })
	} catch (error) {
		console.log(error)
		res.status(500).send({ status: 500, message: 'Internal server error' })
	}
}

export const validateCreateUser = (req, res, next) => {
	const { nome, email, senha } = req.body

	if (!nome || !email || !senha) {
		return res.status(400).send({ status: 400, message: 'Invalid data' })
	}

	next()
}

export const getUserEmail = async (req, res, next) => {
	const { email } = req.body
	const query = 'SELECT * FROM usuario WHERE email = ?'
	const values = [email]

	try {
		const user = await db.promise().query(query, values)
		if (user[0].length > 0) {
			return res
				.status(409)
				.send({ status: 409, message: 'User already exists' })
		}
	} catch (error) {
		console.log(error)
		res.status(500).send({ status: 500, message: 'Internal server error' })
	}
	next()
}
