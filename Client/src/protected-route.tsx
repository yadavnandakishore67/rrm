import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, } from 'react-router-dom';
import { State } from "./store/state";


const ProtectedRoute = (props: { children: ReactElement }) => {
    const {children} = props;
    const isLoggerIn = localStorage.getItem('user_Id');
    return  !!isLoggerIn? children : <Navigate to='/' replace/>;
}

export default ProtectedRoute;