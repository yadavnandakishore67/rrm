import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './state';

const slice = createSlice({
    name: 'rrm',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        userLoggedIn: (state,actions)=>{
            state.loggedIn = true;
            state.userName = actions.payload.empId;
        }

    }
})

export const { actions, reducer } = slice