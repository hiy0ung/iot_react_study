import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLoginStore } from "../stores/useLoginStore";

export function useAccessTokenValid() {
  const location = useLocation();
  // zustand를 통해 전역에서 상태 가져올 수 있게 함
  const { isLogin, setLogin } = useLoginStore();
  const [ isLoding, setLoding ] = useState(true);

  // 경로가 바뀌었을 때 토큰 검사
  useEffect(() => {
    if(isLoding) {
      valid();
      setLoding(false);
    }
  }, [isLoding]);

  useEffect(() => {
    if(!isLoding) {
      setLoding(true);
    }
  }, [location.pathname]);

  const valid = () => {
    // AccessToken을 back으로 보내서 사용가능한지 확인
    // localStorage cookie랑 비슷함,,, 대체해서 사용 가능
    const userAccessToken = localStorage.getItem("UserAccessToken");

    if (!userAccessToken) {
      setLogin(false);
      return;
    }

    const validAccessToken = "abcd";
    if(userAccessToken !== validAccessToken) {
      setLogin(false);
      return;
    }
    setLogin(true);
  }
  // key: value 가 같으면 : 뒤 생략 가능
  // return { isLoding: isLoding }
  return { isLoding, setLoding }
}