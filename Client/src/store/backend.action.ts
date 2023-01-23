import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../service";
import { Login } from "../utils/types";
import { BackendActionTypes } from "./action.types";


export const getRequestList = createAsyncThunk(
    BackendActionTypes.GetRequestList, async () => {
        const resp = await get('userProfiles');
        return resp.data.requestList;
    }
)

export const loginUserRequested = createAsyncThunk(
    BackendActionTypes.LoginUser, async (input: Login) => {
        const resp = await post('users/login', input);
        return resp.data.userDetails[0];
    }
)