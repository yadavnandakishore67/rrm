import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login!</h1>
    <ul>
    <li>
      {/* Endpoint to route to Home component */}
      <Link to="/dashboard">Dashboard</Link>
    </li>
    </ul>
    </div>
    
  );
}

export default Login;
