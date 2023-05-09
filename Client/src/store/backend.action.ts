import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteItem, get, getById, post, put } from "../service";
import { IFormInput, Login } from "../utils/types";
import { BackendActionTypes } from "./action.types";

export const getRequestList = createAsyncThunk(
  BackendActionTypes.GetRequestList,
  async () => {
    const resp = await get("userProfiles");
    return resp.data.requestList;
  }
);

export const loginUserRequested = createAsyncThunk(
  BackendActionTypes.LoginUser,
  async (input: Login) => {
    const resp = await post("users/login", input);
    return resp.data.userDetails[0];
  }
);

export const getRequestedUserProfile = createAsyncThunk(
  BackendActionTypes.GetRequirementDetails,
  async (id: string) => {
    const resp = await get(`userProfiles/Users/${id}`);
    return resp.data.data[0];
  }
);

export const createUserProfile = createAsyncThunk(
  BackendActionTypes.CreateUserProfile,
  async (input: IFormInput) => {
    const resp = await post(`userProfiles`, input);
    return resp;
  }
);

export const updateUserProfile = createAsyncThunk(
  BackendActionTypes.UpdateUserProfile,
  async (payload: { id: string; input: any }) => {
    const resp = await put(`userProfiles`, payload.id, payload.input);
    return resp.data.requestList;
  }
);

export const deleteRequestRequested = createAsyncThunk(
  BackendActionTypes.DeleteUserProfile,
  async (id: string) => {
    const resp = await deleteItem("userProfiles", id);
    return resp.data.requestList;
  }
);

export const getUserDataRequested = createAsyncThunk(
  BackendActionTypes.GetUserDetails,
  async (id: string) => {
    const resp = await getById("users", id);
    return resp.data.userDetails[0];
  }
);

export const getSuggestions: any = createAsyncThunk(
  BackendActionTypes.GetSuggestions,
  async () => {
    const resp = await get("suggestions");
    console.log("suggestions response", resp);
    return resp;
  }
);
