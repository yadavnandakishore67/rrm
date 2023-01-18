import {createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value++;
        },
        decrement:(state)=>{
            state.value--;
        }

    }
})

export const {actions,reducer}= slice