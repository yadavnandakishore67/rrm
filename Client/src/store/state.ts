export const initialState: State = {
    loggedIn: false,
    count : 0
}

export interface State {
    loggedIn: boolean,
    userName?:string,
    count:number
}
