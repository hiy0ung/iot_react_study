// App.js라고 생각!
import { Route, Routes,  } from "react-router-dom";
import { useAccessTokenValid } from "./hooks/useAccessTokenValid"
import UserRoute from "./routes/UserRoute";

function Main() {
  const { isLoding } = useAccessTokenValid();

  return <>
    {
      !isLoding &&
      <Routes>
        <Route path='/user/*' element={ <UserRoute /> }/>
        <Route path='/admin/*' element={
          <Routes>
            <Route path='/' element={ <h1>USER HOME</h1> } />
            <Route path='/name' element={ <h1>USER NAME</h1> } />
            <Route path='/age' element={ <h1>USER AGE</h1> } />
            <Route path='/address' element={ <h1>USER ADDRESS</h1> } />
          </Routes>
        }/>
      </Routes>
    }
  </>
}

export default Main;