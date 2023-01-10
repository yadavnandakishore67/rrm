import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../common/footer";
import Header from "../common/header";
import ClosedRequest from "./closedRequests";
import Dashboard from "./dashboard";
import Login from "./login";
import NewRequest from "./newRequest";
import RequestList from "./requestList";

function Home() {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/requestList" element={<RequestList />} />
                <Route path="/newRequest" element={<NewRequest />} />
                <Route path="/closedRequests" element={<ClosedRequest />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </div>
    );
  }
  
  export default Home;
  