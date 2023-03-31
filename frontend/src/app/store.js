import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/tasksSlice'

/**
 * Configure Redux store
 * Assign task related reducer
 */
export default configureStore({
	reducer: {
		tasks: tasksReducer,
	},
})
