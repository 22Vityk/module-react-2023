import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = {
	users: [],
	errors: null,
	loading: null,
	selectedUser: null
}
const getAll = createAsyncThunk(
	'userSlice/getAll',
	async (_,{rejectWithValue})=>{
		try {
		const {data} = await  userService.getAll()
			return data
		}catch (e) {
			return rejectWithValue(e.response.data)
		}
	}
)
const userSlice = createSlice( {


	name: 'userSlice',
	initialState,
	reducers: {
		// getAll: (state, action) => {
		// 	state.users = action.payload
		// },

		setSelectedUser:(state,action)=>{
			 state.selectedUser = action.payload
		},
	extraReducers:{
	[getAll.fulfilled]: (state, action)=>{
		state.users = action.payload
	}
	}
	}
})

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice

const userAction = {
	getAll,
	setSelectedUser
}


export {
	userReducer,
	userAction,


}