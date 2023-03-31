const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
require('dotenv').config()

// import routes
const indexRoutes = require('./routes/index')
const taskRoutes = require('./routes/task')

// In development frontend needs CORS, because it is configured to run on different port
if (process.env.NODE_ENV !== 'production') {
	app.use(cors())
}

// serve react build
app.use(express.static(path.join(__dirname, '../frontend/build')))

// parse urlencoded and json data, to make it available in req.body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// set up database connection
require('./utils/db')

// use routes
app.use(indexRoutes)
app.use(taskRoutes)

const port = process.env.PORT
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
