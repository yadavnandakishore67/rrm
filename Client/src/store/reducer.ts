import { createSlice } from '@reduxjs/toolkit';
import { UserDetails } from '../utils/types';
import { getRequestList, loginUserRequested } from './backend.action';
import { initialState } from './state';

const slice = createSlice({
    name: 'rrm',
    initialState: initialState,
    reducers: {
        // userLoggedIn: (state, actions) => {
        //     state.loggedIn = true;
        //     state.userName = actions.payload.empId;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getRequestList.fulfilled, (state: any, action: { payload: any; }) => {
            return {
                ...state,
                requestList: action.payload
            }
        })
            builder.addCase(loginUserRequested.fulfilled, (state: any, action: { payload: UserDetails }) => {
                return {
                    ...state,
                    userDetails: action.payload,
                    userLoggedIn:true
                }
            })
    }
})

export const { actions, reducer } = slice