import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../protected-route";
import Login from "../components/login/login";
import RequestForm from "../components/request-form/request-form";
import RequestList from "../components/requestList/requestList";


function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                {/* <ProtectedRoute path="/requestList" element={<RequestList />} /> */}
                {/* <Route path="/requestList" element={<RequestList />} /> */}
                <Route path="/requestForm" element={<RequestForm />} />
                <Route
                    path="/requestList"
                    element={
                        <ProtectedRoute >
                            <RequestList />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default Routers;
