import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import UserAuthRoute from "./UserAuthRoute";
import UserSignInAndUp from "./UserSignInAndUp";

function UserRoute() {
  const location = useLocation();
  const accessToken = "test";
    
    useEffect(() => {
      console.log(location.pathname);
      console.log(accessToken + "검사");
    }, []);

  return <>
    <Routes>
      {/* 위에서 아래로 흘러가니까 순서 중요! */}
      <Route path="/mypage/:username" element={ <h1>USER MYPAGE</h1> } />
      <Route path="/auth/*" element={ <UserSignInAndUp /> } />
      <Route path="/*" element={ <UserAuthRoute /> } />
    </Routes>
  </>
}

export default UserRoute;