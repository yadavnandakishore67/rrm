export const initialState: State = {
    loggedIn: false,
    count : 0,
    requestList:[]
}

export interface State {
    loggedIn: boolean,
    userName?:string,
    count:number,
    requestList:any[]
}
