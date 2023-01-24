import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, } from 'react-router-dom';
import { State } from "./store/state";


const ProtectedRoute = (props: { children: ReactElement }) => {
    const {children} = props;
    const isLoggerIn = useSelector((state: State) => state.userLoggedIn);
    return  isLoggerIn? children : <Navigate to='/' replace/>;
}

export default ProtectedRoute;