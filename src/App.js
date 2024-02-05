// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/landingPage/landing/Landing";
import Home from "./Pages/homePage/Home/Home";
import { ToastContainer } from "react-toastify";
import {LoginAuth} from './Authorization/Authorization'

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      
      <BrowserRouter>
        <Routes>
          <Route element={<LoginAuth/>}>
            <Route path="/" element={<Landing/> }/>
          </Route>
          
          <Route path="*" element={<Home/> }/>

        </Routes>
      </BrowserRouter>

      {/* */}
    </div>
  );
}

export default App;

