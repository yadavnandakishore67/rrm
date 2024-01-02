import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./employeeView.scss";
import Button from "@mui/material/Button";

export default function EmployeeView() {
  const location = useLocation();
  const updatedEmployeeData = location?.state?.empData
    ? location.state.empData
    : {};

  const navigate = useNavigate();
  const routeUrl = () => {
    navigate("/employeesList");
  };

  function titleCaseHandler(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  return (
    <>
      <div className="employee-view container mt-4 text-capitalize">
        <div className="row pb-2">
          <div className="col-sm-8 col-md-8 col-8 p-0">
            <h4>Employee Details</h4>
          </div>
          <div className="col-sm-4 col-md-4 col-4 text-end p-0">
            <Button variant="outlined" onClick={routeUrl}>
              Back
            </Button>
          </div>
        </div>
        <div className="card bg-white shadow-lg text-black p-3 mb-3">
          <div className="row">
            <div className="col">
              <div className="header">Employee id</div>
              <div>{updatedEmployeeData.empId}</div>
            </div>
            <div className="col">
              <div className="header">Employee Name</div>
              <div>{titleCaseHandler(updatedEmployeeData.empName)}</div>
            </div>
            <div className="col">
              <div className="header">Experience</div>
              <div>{updatedEmployeeData.experience} years</div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="header">Reporting Manager</div>
              <div>
                {titleCaseHandler(updatedEmployeeData.reportingManager)}
              </div>
            </div>
            <div className="col">
              <div className="header">Practice</div>
              <div>{updatedEmployeeData.practice}</div>
            </div>
            <div className="col">
              <div className="header">Billing status</div>
              <div>{updatedEmployeeData.billingStatus}</div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <div className="header">Role</div>
              <div>{updatedEmployeeData.role}</div>
            </div>
            <div className="col">
              <div className="header">Skills</div>

              {updatedEmployeeData.skills.map((skill: string, i: number) => (
                <li>{titleCaseHandler(skill)}</li>
              ))}
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </>
  );
}
