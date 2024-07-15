import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Routes/Home"
import Login from "./Routes/Login";
import Main from "./Routes/Main"
import SignUp from "./Routes/Signup";

function App() {
  return (  
    <BrowserRouter>
    <Routes>
      <Route 
      path="/"
      element={<Home />}
      />
      <Route 
      path="/login"
      element={<Login />}
      />
      <Route 
      path="/main"
      element={<Main />}
      />
      <Route 
      path="/signup"
      element={<SignUp />}
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;