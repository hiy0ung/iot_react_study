import { useState } from "react";

async function getUser3(url, option) {
  try {
    const response = await getUser();
    setTimeout(() => {
      getUser2(response.url, response.option);
    }, 1000);
    
  } catch(error) {
    console.error(error);
  }
}

function getUser2(url, option) {
  if(url === "") {
    throw new Error("오류!!!");
  };
  return {url, option};
}

async function getUser(url, option) {
  if(url === "") {
    throw new Error("오류!!!");
  };
  return {url, option};
}

function AsyncAwait() {
  const [ data, setData ] = useState("")


  getUser3("http://localhost:8080/api/v1/user", {params: {}});

  return <></> 
}

export function test1() {}
export function test2() {}

export default AsyncAwait;