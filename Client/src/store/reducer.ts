import { createSlice } from '@reduxjs/toolkit';
import { RequestForm, UserDetails } from '../utils/types';
import { getRequestedUserProfile, getRequestList, loginUserRequested } from './backend.action';
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
                    userLoggedIn:true,
                    userName:action.payload.emp_ID
                }
            })
            builder.addCase(getRequestedUserProfile.fulfilled, (state: any, action: { payload: any }) => {
                return {
                    ...state,
                    requestDetails: action.payload
                }
            })
    }
})

export const { actions, reducer } = slice