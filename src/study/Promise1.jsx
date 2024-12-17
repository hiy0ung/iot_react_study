
function Promise1() {
  
  new Promise((rs, rj) => {
    console.log("프로미스 생성1");
    rj(new Error("오류났음!!!"));
  }).then(() => {
    console.log("then 실행1");
  }).then(() => {
    console.log("then 실행1-1");
  }).catch((error) => {
    console.error(error);
  });

  console.log("프로미스 외부에서 실행");

  const n = 10;

  new Promise((rs, rj) => {
    console.log("프로미스 생성2");
    if(n % 2 === 0) {
      rs(10);
    }else {
      rj(new Error());
    }
  }).then((num) => {
    console.log("then 실행2");
    return 20;
  }).then((num2) => {
    console.log("then 실행2-2");
  });

  return <></>
}

export default Promise1;