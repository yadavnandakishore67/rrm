import { createSlice } from '@reduxjs/toolkit';
import { UserDetails } from '../utils/types';
import { deleteRequestRequested, getRequestList, getUserDataRequested, loginUserRequested, updateUserProfile } from './backend.action';
import { initialState } from './state';

const slice = createSlice({
    name: 'rrm',
    initialState: initialState,
    reducers: {
        userLoggedOutRequested: (state) => {
            state.userLoggedIn = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getRequestList.fulfilled, (state: any, action: { payload: any; }) => {
            return {
                ...state,
                requestList: action.payload
            }
        })
        builder.addCase(loginUserRequested.fulfilled, (state: any, action: { payload: UserDetails }) => {
            localStorage.setItem('user_Id', action.payload._id);
            localStorage.setItem('userName', action.payload.first_name);
            return {
                ...state,
                userDetails: action.payload,
                userLoggedIn: true,
                userName: action.payload.first_name
            }
        })
        builder.addCase(updateUserProfile.fulfilled, (state: any, action: { payload: any }) => {
            return {
                ...state,
                requestList: action.payload
            }
        })
        builder.addCase(deleteRequestRequested.fulfilled, (state: any, action: { payload: any }) => {
            return {
                ...state,
                requestList: action.payload
            }
        })
        builder.addCase(getUserDataRequested.fulfilled, (state: any, action: { payload: UserDetails }) => {
            localStorage.setItem('user_Id', action.payload._id)
            return {
                ...state,
                userDetails: action.payload,
                userLoggedIn: true,
                userName: action.payload.first_name
            }
        })
    }
})

export const { actions, reducer } = slice