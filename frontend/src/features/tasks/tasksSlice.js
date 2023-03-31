import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		value: [
			/* {
				id: 1,
				content: 'abc',
			},
			*/
		],
	},
	reducers: {
		intiateTasks: (state, action) => {
			state.value = [...action.payload]
		},
		addTask: (state, action) => {
			state.value = [...state.value, action.payload]
		},
		deleteTask: (state, action) => {
			state.value = state.value.filter(
				(item) => item.id !== action.payload.id
			)
		},
		updateTask: (state, action) => {
			state.value = state.value.map((item) => {
				if (item.id === action.payload.id) return action.payload
				else return item
			})
		},
	},
})

// Action creators are generated for each case reducer function
export const { intiateTasks, addTask, deleteTask, updateTask } =
	tasksSlice.actions

export default tasksSlice.reducer
