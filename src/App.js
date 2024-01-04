// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/landingPage/landing/Landing";
import Home from "./Pages/homePage/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/> }/>
          {/* <Route path="/" element={<Home/> }/> */}

        </Routes>
      </BrowserRouter>

      {/* */}
    </div>
  );
}

export default App;

// <Routes>

// <Route element={<LoginAuth />}>
// <Route path="/" element={<Landing />} />
// </Route>

// {/* userRoute */}

// <Route element={<UserAuth />}>
//     <Route path="/home" element={<Home />} />
//     <Route path="/CourtUserViewPage/:id"element={<CourtUserViewPage />}/>
//     <Route path="/MyBookings" element={<MyBookings />} />
// </Route>

// {/* adminRoute */}

// <Route element={<AdminAuth/>}>
//      <Route path="/AddNewCourt" element={<AddNewCourt/>} />
//      <Route path="/EditCourt/:courtId" element={<EditCourt/>} />

// </Route>

// </Routes>
