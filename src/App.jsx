import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import ProductPage from "./Products/ProductPage";
import BuyProduct from "./Products/BuyProduct";
import Cart from "./components/Cart/Cart";
import Buy from "./components/Cart/Buy";
import Signup from "./Pages/Signup";
import Forgot from "./Pages/Forgot";
import Reset from "./Pages/Reset";
import Verify from "./Pages/Verify";
import DashBoardContainer from "./components/DashBoard/DashBoardContainer";
import Chart from "./components/Chart";
import MyDashBoard from "./Pages/MyDashBoard";
import ChangePassword from "./Pages/ChangePassword";
import PageNotFound from "./components/PageNotFound"
import Categories from "./ProductCategories/Categories"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/about" element={<About />} />

        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/productPage/:title" element={<ProductPage />} />
        <Route path="/BuyProduct/:title" element={<BuyProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cartItem/buy/:id" element={<Buy />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/confirm" element={<Verify />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<DashBoardContainer />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/myDashBoard" element={<MyDashBoard />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Routes>
      
    </div>
  );
}

export default App;
