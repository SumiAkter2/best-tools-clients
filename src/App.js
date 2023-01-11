import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Home/Navbar";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* </Navbar> */}
    </div>
  );
}

export default App;
