import LoginForm from "./component/login-Form/LoginForm";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Signup from "./component/login-Form/Signup";

function App() {
  return (
      <div >
        <BrowserRouter>
          <Routes>
            <Route index element={ <LoginForm/>}/>
            <Route path="/loginform" element={ <LoginForm/>}/>
            <Route path="/signup" element={ <Signup/>}/>
          </Routes>
        </BrowserRouter>
        {/*<LoginForm/>*/}
        {/*<Signup/>*/}
      </div>
  );
}

export default App;
