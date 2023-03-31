import Task from './Task'
import { useSelector } from 'react-redux'

/**
 * Container for task list
 */
export default function Container() {
	const tasks = useSelector((state) => state.tasks.value) // get all tasks from store

	return (
		<div className='mt-6'>
			{tasks.map((item) => (
				<Task key={item.id} id={item.id} content={item.content} />
			))}
		</div>
	)
}
