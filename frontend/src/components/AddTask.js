import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/tasksSlice'

/**
 * Input field and "Add Task" button
 * create new task
 */
export default function AddTask() {
	const [newTask, setNewTask] = useState('') // input field task content

	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()

		if (!newTask) {
			// empty input field
			return
		}

		axios
			.post(`${process.env.REACT_APP_API_URL}/task`, {
				task: {
					content: newTask,
				},
			})
			.then((response) => {
				const _newTask = response.data.task
				if (_newTask) {
					// task created in db and returned back
					dispatch(
						addTask({ id: _newTask._id, content: _newTask.content })
					)
					setNewTask('')
				} else {
					// no task created in db, because of duplicacy
					alert('Duplicate task!')
				}
			})
			.catch((error) => {
				console.error(error)
				alert('Something went wrong, please try again.')
			})
	}

	return (
		<form onSubmit={onSubmit} className='grid grid-cols-3 gap-8 text-lg '>
			<input
				type='text'
				placeholder='Add new Task...'
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				className='rounded col-span-2 p-1
            outline-0 
            border-2 border-gray-300 focus:border-rose-500 focus:shadow-lg focus:shadow-rose-500/30'
			/>

			<button
				type='submit'
				className='rounded-md p-1
            text-white
            outline-0
            bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 hover:bg-emerald-800/90 active:bg-emerald-800'
			>
				Add Task
			</button>
		</form>
	)
}
