import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/login";
import RequestList from "../components/requestList/requestList";


function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/requestList" element={<RequestList />} />
            </Routes>
        </div>
    );
}

export default Routers;
