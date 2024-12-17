import React from 'react'
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import SigninPage from '../pages/SigninPage/SigninPage';
import SignupPage from '../pages/SignupPage/SignupPage';

function UserSignInAndUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const [ isLogin, setLogin ] = useState(false);

  useEffect(() => {
    if(isLogin) {
      // 로그인이 되어있는 상태에서 회원가입/로그인페이지로 들어옴 
      // >> 강제로 main페이지로 갈 수 있게 해줘야함
      navigate("/")
    }
  }, [location.pathname])

  return <>
  {
    !isLogin &&
    <Routes>
      <Route path="/signin" element={ <SigninPage /> } />
      <Route path="/signup" element={ <SignupPage /> } />
    </Routes>
  }
  </>
}
export default UserSignInAndUp;