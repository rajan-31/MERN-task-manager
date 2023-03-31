const express = require('express')
const router = express.Router()

const Task = require('../models/task')

/** Get all task */
router.get('/task', async (req, res) => {
	try {
		const tasks = await Task.find({}).lean()
		res.json({
			tasks: tasks,
		})
	} catch (err) {
		console.error(err)
		res.status(500).json({
			message: 'Server error',
		})
	}
})

/** Add new task */
router.post('/task', async (req, res) => {
	try {
		const task = req.body.task
		const newTask = await Task.create(task)
		res.json({
			task: newTask,
		})
	} catch (err) {
		if (err.code === 11000) {
			res.json({
				message: 'Duplicate task',
			})
		} else {
			console.error(err)
			res.status(500).json({
				message: 'Server error',
			})
		}
	}
})

/** Delte a task using id */
router.delete('/task', async (req, res) => {
	try {
		const task = req.body.task
		const deletedTask = await Task.findByIdAndDelete(task.id)
		res.json({
			message: 'Task deleted successfully',
		})
	} catch (err) {
		console.error(err)
		res.status(500).json({
			message: 'Server error',
		})
	}
})

/** Update content of a task using id */
router.put('/task', async (req, res) => {
	try {
		const task = req.body.task
		const updatedTask = await Task.findByIdAndUpdate(task.id, {
			content: task.updatedContent,
		})
		res.json({
			message: 'Task updated successfully',
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Server error',
		})
	}
})

module.exports = router
