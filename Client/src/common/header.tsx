import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../store/reducer";

export default function Header() {
  const userName = localStorage.getItem('userName');
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const logout = (e: any) => {
    e.preventDefault()
    localStorage.clear();
    dispatch(actions.userLoggedOutRequested())
    navigate('/');
  }
  return (
    <div className="d-flex align-items-center flex-wrap bg-secondary pb-2">
      <div className="me-auto px-3 fs-2">
        <LogoDevIcon fontSize="large" />
      </div>
      {userName && <div className="d-flex">
        <div className="px-3 fs-2">
          <AccountCircleIcon fontSize="large" /> <span>{userName}</span>
        </div>
        <div className="px-3 fs-2 cursor-pointer" onClick={logout}>
          <LogoutIcon />
        </div>
      </div>}
    </div>
  );
}
