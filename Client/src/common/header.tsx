import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/reducer";

export default function Header() {
  const userName = localStorage.getItem("userName");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(actions.userLoggedOutRequested());
    navigate("/");
  };
  return (
    <div className="d-flex align-items-center flex-wrap pb-2 header-rrm">
      <div className="me-auto px-3 fs-5 pt-3">RRM</div>
      {userName && (
        <div className="d-flex">
          <div className="px-3 fs-6 pt-3">
            <NavLink
              to="/requestList"
              className="text-light text-decoration-none"
            >
              RRM
            </NavLink>
          </div>
          <div className="px-3 fs-6 pt-3">
            <NavLink
              to="/employeesList"
              className="text-light text-decoration-none"
            >
              Employees
            </NavLink>
          </div>
          <div className="px-3 fs-6 pt-3">
            <AccountCircleIcon fontSize="medium" /> <span>Hi {userName}</span>
          </div>
          <div
            className="px-3 fs-6 cursor-pointer pt-3"
            style={{ cursor: "pointer" }}
            onClick={logout}
          >
            <PowerSettingsNewIcon fontSize="medium" />
          </div>
        </div>
      )}
    </div>
  );
}
