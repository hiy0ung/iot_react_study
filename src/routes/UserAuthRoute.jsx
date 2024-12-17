import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useLoginStore } from '../stores/useLoginStore';

// 인증을 해야지 쓸 수 있는 페이지
function UserAuthRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLogin } = useLoginStore();
  
  // 이 영역에서 pathname이 바뀔 때마다 동작하도록 해줌
  // 토큰이 맞지 않으면 signin 페이지로 이동하게 함
  useEffect(() => {
    if (!isLogin) {
      navigate("/user/auth/signin");
    }
  }, [location.pathname]);

  // 로그인이 된 상태에서만 렌더링 할 수 있게 함
  // 그 후 useEffect를 이용해서 토큰 유효성 검사
  return <>
    {
      isLogin &&
    <Routes>
      <Route path='/name' element= { <h1>USER NAME</h1> }/>
      <Route path='/age' element= { <h1>USER AGE</h1> }/>
      <Route path='/address' element= { <h1>USER ADDRESS</h1> }/>
      {/* 404 등 나머지 페이지에 대해서 처리할 때는 서브라우트에서 작동하게 함 */}
      <Route path='/*' element= { <h1>404 NOT FOUND</h1> }/>
    </Routes>
    }
  </>
}

export default UserAuthRoute;