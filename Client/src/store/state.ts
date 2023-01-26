import { RequestForm, UserDetails } from "../utils/types"

export const initialState: State = {
    loggedIn: false,
    count: 0,
    requestList: [],
    userLoggedIn: false
}

export interface State {
    loggedIn: boolean,
    userName?: string,
    count: number,
    requestList: RequestForm[],
    requestDetails?: RequestForm,
    userDetails?: UserDetails,
    userLoggedIn: boolean
}
