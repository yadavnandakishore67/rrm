import React from "react";
import { useEffect, useState } from "react";
import { State } from '../../store/state';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/reducer";

function Login() {
  const dispatch = useDispatch();
  const userName = useSelector((store: State) => {
    console.log('red')
    return store.userName
  })
  function loginUser() {
    dispatch(actions.userLoggedIn({ empId: 'emp2', password: 'code' }))
  }
  return (
    <>
    <p>{userName}</p>
      <h1>Login!</h1>
      <button onClick={loginUser}>logIn</button>
    </>
  );
}

export default Login;
