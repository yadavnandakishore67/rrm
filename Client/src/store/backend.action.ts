import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../service";
import { BackendActionTypes } from "./action.types";


export const getRequestList = createAsyncThunk(
    BackendActionTypes.GetRequestList, async () => {
        const resp = await get('userProfiles');
        return resp.data.requestList;
    }
)