import Container from './Container'
import AddTask from './AddTask'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { intiateTasks } from '../features/tasks/tasksSlice'
import { useEffect } from 'react'

/**
 * A container for both AddTask and task list Container
 */
export default function MainSection() {
	const dispatch = useDispatch()

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/task`)
			.then((response) => {
				const _tasks = response.data.tasks.map((item) => ({
					id: item._id,
					content: item.content,
				}))
				dispatch(intiateTasks(_tasks))
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

	return (
		<div className='pt-16 px-10 md:px-20 lg:px-52 xl:px-[450px]'>
			<AddTask />
			<Container />
		</div>
	)
}
