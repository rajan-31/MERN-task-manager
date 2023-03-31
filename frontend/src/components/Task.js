import axios from 'axios'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../features/tasks/tasksSlice'

/** A task with content, edit and delete buttons */
export default function Task({ content, id }) {
	const dispatch = useDispatch()

	function handleDelete(e) {
		e.preventDefault()

		axios
			.delete(`${process.env.REACT_APP_API_URL}/task`, {
				data: {
					task: {
						id: id,
					},
				},
			})
			.then((response) => {
				if (response.status === 200) dispatch(deleteTask({ id }))
			})
			.catch((error) => {
				console.error(error)
				alert('Something went wrong, please try again.')
			})
	}

	function handleEdit(e) {
		e.preventDefault()

		const updatedContent = prompt('Edit task content: ', content)
		if (updatedContent && updatedContent !== content) {
			axios
				.put(`${process.env.REACT_APP_API_URL}/task`, {
					task: {
						id: id,
						updatedContent: updatedContent,
					},
				})
				.then((response) => {
					if (response.status === 200)
						dispatch(
							updateTask({ id: id, content: updatedContent })
						)
				})
				.catch((error) => {
					console.error(error)
					alert('Something went wrong, please try again.')
				})
		}
	}

	return (
		<div
			className='bg-orange-400/70
        rounded hover:shadow-lg hover:shadow-orange-300/60
        mb-3 py-1 px-2 text-lg
        flex flex-row justify-between
        '
		>
			<div
				className='p-1 text-black/80 text-justify flex-grow'
				onDoubleClick={handleEdit}
			>
				{content}
			</div>
			<div className='flex flex-row'>
				<div className='flex justify-center'>
					<button
						className='py-1 px-2 mx-2 fill-stone-600 hover:bg-black/30 active:bg-black/50 rounded-md'
						onClick={handleEdit}
						aria-label='Edit Task'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='17'
							viewBox='0 0 512 512'
						>
							<path d='M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z' />
						</svg>
					</button>
				</div>
				<div className='flex justify-center'>
					<button
						className='py-1 px-2 fill-rose-700 hover:bg-black/30 active:bg-black/50 rounded-md'
						onClick={handleDelete}
						aria-label='Delete Task'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='17'
							viewBox='0 0 512 512'
						>
							<path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z' />
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}
