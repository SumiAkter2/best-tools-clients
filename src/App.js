import "./App.css";
import { Routes, Route } from "react-router-dom";
// import MyPortfolio from "./Components/Dashboard/";
import Home from "./Components/Home/Home";
import DashBoard from "./Components/Dashboard/DashBoard";
import MyOrder from "./Components/Dashboard/MyOrder";
import ManageOrder from "./Components/Dashboard/ManageOrder";
import ManageAllProducts from "./Components/Dashboard/ManageAllProducts";
import AddProducts from "./Components/Dashboard/AddProducts";
import MakeAdmin from "./Components/Dashboard/MakeAdmin";
import MyProfile from "./Components/Dashboard/MyProfile";
import UpdateProfile from "./Components/Dashboard/UpdateProfile";
import AddReview from "./Components/Dashboard/AddReview";
import Summary from "./Components/Home/Summary";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./Components/Home/ProductDetails";
import RequireAuth from "./Components/RequireAuth";
import Login from "./Components/SocialLogIn/LogIn";
import SignIn from "./Components/SocialLogIn/SignIn";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/* <Route path="blogs" element={<Blogs></Blogs>}></Route> */}
          <Route path="login" element={<Login />}></Route>
          <Route path="signin" element={<SignIn></SignIn>}></Route>

          <Route path="summary" element={<Summary />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>

        <ToastContainer></ToastContainer>
      </Navbar>
    </div>
  );
}

export default App;
