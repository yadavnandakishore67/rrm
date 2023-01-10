import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/requestList">RequestList</Link>
          </li>
          <li>
            <Link to="/newRequest">New Request</Link>
          </li>
          <li>
            <Link to="/closedRequests">Closed Requests</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  