import { Link } from "react-router-dom";
import styles from "../styles/navstyles.module.css";
import companyLogo from "../assets/logo.png";
function Navbar() {
  return (
    <nav>
      <div className={styles.sticky_header}>
        <img alt="aperture" className={styles.mainLogo} src={companyLogo}></img>
        <div className={styles.header_buttons}>
          <div className={styles.dropdown} >
            <Link to="/" className={styles.dropbtn}>Login</Link>
          </div>
          <div className={styles.dropdown} >
            <Link to="/requestList" className={styles.dropbtn}>RequestList</Link>
          </div>
          <div className={styles.dropdown} >
            <Link to="/newRequest" className={styles.dropbtn}>New Request</Link>
          </div>
          <div className={styles.dropdown} >
            <Link to="/closedRequests" className={styles.dropbtn}>Closed Requests</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
