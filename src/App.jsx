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
import { DUMMy_API } from "./Services/api";
import {useEffect, useState} from "react"
import AppsBar from "./TopBar/AppBar";
import {  useDispatch, useSelector } from "react-redux";
import {updateSearchItem} from "./store/slice/searchSlice";
import Alerts from "./components/Alert/Alerts";
import { hideAlert } from "./store/slice/alertSlice";
function App() {
  const [filter, setFilter] = useState("");
const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    if(e.key && e.key === "Enter"){
      dispatch(updateSearchItem(e.target.value))
    }


  };

  const getProductCategories =async ()=>{
    try {
      const res = await DUMMy_API.get('https://dummyjson.com/products/category-list')
    localStorage.setItem("categories", JSON.stringify((res?.data)));
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
    getProductCategories()
  },[])

  const alert = useSelector(state=>state.alert)


  return (
    <div className="App">
      <AppsBar search={filter} handleChange={handleFilterChange}/>
      <Alerts alert={alert} handleCloseAlert={()=>dispatch(hideAlert())}/>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
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
