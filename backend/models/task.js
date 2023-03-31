const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
	content: {
		type: String,
		required: true,
		unique: true,
	},
})

module.exports = mongoose.model('Task', taskSchema)
