import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoDevIcon from "@mui/icons-material/LogoDev";

export default function Header() {
  return (
    <div className="d-flex align-items-center flex-wrap bg-secondary pb-2">
      <div className="me-auto px-3 fs-2">
        <LogoDevIcon fontSize="large" />
      </div>
      <div className="px-3 fs-2">
        <AccountCircleIcon fontSize="large" /> <span>Hello Naresh</span>
      </div>
      <div className="px-3 fs-2">
        <LogoutIcon />
      </div>
    </div>
  );
}
