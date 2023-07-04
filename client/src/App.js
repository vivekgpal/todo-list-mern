import Login from "./login/Login";
import Register from "./register/Register";
import Home from "./home/Home";
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
   <div>
   <Routes>
    <Route path="/" Component={Home} />
    <Route path="/register" Component={Register} />
    <Route path ="/Login" Component={Login} />
   </Routes>
   </div>
  );
}

export default App;
