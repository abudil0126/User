import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    saved: []
}

const savedUserSlice = createSlice({
    name: 'savedUser',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            const exist = state.saved.findIndex(user => user.id === action.payload.id)
            if(exist === -1){
                state.saved.push(action.payload)
            }
            return state
        }
    }
})

export const { saveUser } = savedUserSlice.actions
export default savedUserSlice.reducer