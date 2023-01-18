import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ClosedRequest from "./closedRequests";
import Dashboard from "./dashboard";
import Login from "./login";
import NewRequest from "./newRequest";
import RequestList from "./requestList";

function Home() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/requestList" element={<RequestList />} />
                <Route path="/newRequest" element={<NewRequest />} />
                <Route path="/closedRequests" element={<ClosedRequest />} />
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}

export default Home;
