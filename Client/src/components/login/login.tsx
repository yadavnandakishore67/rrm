import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserRequested } from "../../store/backend.action";
import { State } from "../../store/state";
import './login.scss'
import { UserDetails } from "../../utils/types";

export default function Login() {
  const [empId, setempId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<any>();
  const userLoggerIn = useSelector((state: State) => state.userLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (userLoggerIn)
      navigate('requestList')
  }, [userLoggerIn])
  function loginUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (empId && password) {
      dispatch(loginUserRequested({
        emp_ID: empId,
        password: password
      }));
    }
  }
  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container pt-8 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-6 col-lg-5 col-xl-5">
              <div className="card bg-white shadow-lg text-black">
                <div className="card-body p-4 text-center">
                  <form className="mb-md-5 mt-md-4" onSubmit={loginUser}>
                    <h4 className="fw-bold mb-2 text-uppercase">Login</h4>
                    <div className="form-outline form-white mb-4">
                      <TextField
                        className="form-control"
                        required
                        id="outlined-required"
                        label="Emp ID"
                        value={empId}
                        onChange={(event) => setempId(event?.target.value)}
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <TextField
                        required
                        className="form-control"
                        label="Password"
                        value={password}
                        onChange={(event) => setPassword(event?.target.value)}
                      />
                    </div>
                    <Button className="btn btn-outline-light btn-lg px-5" variant="contained" type="submit">Login</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

