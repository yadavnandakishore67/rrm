import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../protected-route";
import Login from "../components/login/login";
import RequestList from "../components/requestList/requestList";
import EmployeesList from "../components/employeesList/employeesList";
import EmployeeForm from "../components/employee-form/employeeForm";
import RequestForm from "../components/request-form/request-form";
import EmployeeView from "../components/employee-view/employeeView";

function Routers() {
  return (
    <div className="mb-5 pb-5">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <ProtectedRoute path="/requestList" element={<RequestList />} /> */}
        {/* <Route path="/requestList" element={<RequestList />} /> */}
        <Route path="/requestForm" element={<RequestForm />} />
        <Route path="/employeesList" element={<EmployeesList />} />
        <Route path="/employeeForm" element={<EmployeeForm />} />
        <Route path="/employeeView" element={<EmployeeView />} />
        <Route
          path="/requestList"
          element={
            <ProtectedRoute>
              <RequestList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default Routers;
